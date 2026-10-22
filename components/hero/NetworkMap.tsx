// Draws the hero network as SVG from the positions in network.ts.

import {
  IconBuildingFactory2,
  IconFaceId,
  IconMessageChatbot,
  IconRoute,
  IconTruckDelivery,
} from "@tabler/icons-react";
import type { Project } from "@/data/projects";
import type { Network } from "./network";

// Matches each project's "icon" field to an icon component.
const ICONS: Record<Project["icon"], typeof IconRoute> = {
  chatbot: IconMessageChatbot,
  face: IconFaceId,
  factory: IconBuildingFactory2,
  route: IconRoute,
  truck: IconTruckDelivery,
};

type Props = { net: Network; className?: string };

export default function NetworkMap({ net, className }: Props) {
  return (
    <svg
      className={`net ${className ?? ""}`}
      viewBox={`0 0 ${net.width} ${net.height}`}
      role="img"
      aria-label="Map of my five projects, grouped as clusters and connected by theme"
    >
      {/* Layers are drawn in order, so later ones sit on top. */}

      {/* 1. faint background dots */}
      <g>
        {net.dots.map((d, i) => (
          <circle key={i} className="dot" cx={d.x} cy={d.y} r={d.r} />
        ))}
      </g>

      {/* 2. curved connections between clusters, plus fine threads */}
      <g>
        {net.edges.map((e) => (
          <path
            key={`${e.from}-${e.to}`}
            className={e.strong ? "edge strong" : "edge"}
            d={e.d}
          />
        ))}
        {net.clusters.flatMap((c) =>
          c.threads.map((d, i) => (
            <path key={`${c.project.key}-t${i}`} className="thread" d={d} />
          )),
        )}
      </g>

      {/* 3. clusters: points, icon ring, icon, label */}
      {net.clusters.map((c) => {
        const tier = c.project.tier === "main" ? "main" : "sec";
        const Icon = ICONS[c.project.icon];
        const size = tier === "main" ? 18 : 14;
        return (
          <g key={c.project.key}>
            {c.points.map((p, i) => (
              <circle
                key={i}
                className={`pt-${tier}`}
                cx={p.x}
                cy={p.y}
                r={p.r}
                opacity={p.o}
              />
            ))}
            <circle className={`ring ring-${tier}`} cx={c.x} cy={c.y} r={c.ring} />
            <Icon
              className={`ic-${tier}`}
              x={c.x - size / 2}
              y={c.y - size / 2}
              size={size}
              stroke={1.6}
              aria-hidden="true"
            />
            <text
              className={`label label-${tier}`}
              x={c.x}
              y={c.labelY}
              textAnchor="middle"
            >
              {c.project.key}
            </text>
          </g>
        );
      })}
    </svg>
  );
}