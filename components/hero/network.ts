// Works out where every point, line and label in the hero network goes.
// Pure maths, no drawing: NetworkMap.tsx turns this into SVG.

import { projects, type Project } from "@/data/projects";

// ---------- layouts ----------
// Positions are hand-placed for a pleasing composition; they are not real
// embeddings (the caption under the map says so).

type Layout = {
  width: number;
  height: number;
  seed: number;
  spread: { main: number; secondary: number }; // how wide each cluster is
  count: { main: number; secondary: number }; // points per cluster
  dots: number; // faint background points
  pos: Record<string, [number, number]>; // cluster centre per project key
};

// Wide screens: a landscape canvas.
export const WIDE: Layout = {
  width: 640,
  height: 340,
  seed: 21,
  spread: { main: 20, secondary: 12 },
  count: { main: 40, secondary: 18 },
  dots: 140,
  pos: {
    "client-sim": [205, 135],
    "face-verif": [440, 100],
    vegemite: [100, 258],
    tbrgs: [330, 250],
    vrp: [545, 235],
  },
};

// Phones: a taller, narrower canvas so labels stay readable.
export const TALL: Layout = {
  width: 360,
  height: 470,
  seed: 33,
  spread: { main: 17, secondary: 10 },
  count: { main: 34, secondary: 16 },
  dots: 90,
  pos: {
    "client-sim": [115, 105],
    "face-verif": [255, 190],
    tbrgs: [140, 300],
    vegemite: [75, 405],
    vrp: [265, 395],
  },
};

// Which clusters are connected, and how much each curve bends.
// The main-to-main link is drawn thicker.
const LINKS: [string, string, number][] = [
  ["client-sim", "face-verif", 0.16],
  ["client-sim", "vegemite", -0.2],
  ["client-sim", "tbrgs", 0.14],
  ["face-verif", "tbrgs", -0.18],
  ["face-verif", "vrp", 0.2],
  ["vegemite", "tbrgs", 0.22],
  ["tbrgs", "vrp", -0.16],
];

// ---------- output types ----------
export type Point = { x: number; y: number; r: number; o: number };
export type Cluster = {
  project: Project;
  x: number;
  y: number;
  ring: number; // radius of the icon ring
  labelY: number;
  points: Point[];
  threads: string[]; // SVG path data for the fine lines off each cluster
};
export type Edge = { from: string; to: string; d: string; strong: boolean };
export type Network = {
  width: number;
  height: number;
  dots: { x: number; y: number; r: number }[];
  edges: Edge[];
  clusters: Cluster[];
};

// ---------- helpers ----------
// A seeded random generator: the same seed always gives the same numbers,
// so the server and the browser draw an identical network.
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

// Bell-curve randomness (most points near the centre), clipped to avoid strays.
function gaussian(rand: () => number) {
  const u = rand() || 1e-6;
  const v = rand();
  const n = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  return Math.max(-2.2, Math.min(2.2, n));
}

const r1 = (n: number) => Math.round(n * 10) / 10; // round to 1 decimal

// A gently curved line from a to b. "bend" pushes the middle sideways.
export function curve(
  ax: number,
  ay: number,
  bx: number,
  by: number,
  bend: number,
) {
  const mx = (ax + bx) / 2 - (by - ay) * bend;
  const my = (ay + by) / 2 + (bx - ax) * bend;
  return `M${r1(ax)},${r1(ay)} Q${r1(mx)},${r1(my)} ${r1(bx)},${r1(by)}`;
}

// ---------- build ----------
export function buildNetwork(layout: Layout): Network {
  const rand = seeded(layout.seed);
  const g = () => gaussian(rand);

  const clusters: Cluster[] = projects.map((project) => {
    const [x, y] = layout.pos[project.key];
    const main = project.tier === "main";
    const s = main ? layout.spread.main : layout.spread.secondary;
    const n = main ? layout.count.main : layout.count.secondary;
    const ring = main ? 15 : 12;

    const points: Point[] = Array.from({ length: n }, () => ({
      x: r1(x + g() * s),
      y: r1(y + g() * s * 0.75),
      r: r1((main ? 3.3 : 2.4) * (0.6 + rand() * 0.6)),
      o: Math.round((0.45 + rand() * 0.55) * 100) / 100,
    }));

    const threads = Array.from({ length: 6 }, () => {
      const a = points[Math.floor(rand() * points.length)];
      return curve(a.x, a.y, a.x + g() * 40, a.y + g() * 30, (rand() - 0.5) * 0.6);
    });

    return { project, x, y, ring, labelY: r1(y - s * 1.7 - ring + 2), points, threads };
  });

  const edges: Edge[] = LINKS.map(([from, to, bend]) => {
    const [ax, ay] = layout.pos[from];
    const [bx, by] = layout.pos[to];
    return {
      from,
      to,
      d: curve(ax, ay, bx, by, bend),
      strong: from === "client-sim" && to === "face-verif",
    };
  });

  const dots = Array.from({ length: layout.dots }, () => {
    // Half the dots gather loosely around clusters, half spread everywhere.
    const near = rand() < 0.5;
    const c = clusters[Math.floor(rand() * clusters.length)];
    return {
      x: r1(near ? c.x + g() * 50 : rand() * layout.width),
      y: r1(near ? c.y + g() * 40 : rand() * layout.height),
      r: r1(0.8 + rand() * 0.9),
    };
  });

  return { width: layout.width, height: layout.height, dots, edges, clusters };
}