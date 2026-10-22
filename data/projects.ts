// Every project on the home page. The hero, run table and project cards
// all read from this list, so edit text here and it updates everywhere.

// "main" | "secondary" means the value must be exactly one of these two.
export type Tier = "main" | "secondary";

// What the "trace" column of the run table shows: either a small chart
// (only with real measured values) or a short piece of text.
export type Trace =
  | { kind: "spark"; label: string; values: number[] }
  | { kind: "text"; value: string };

// The "?" after a name means that field is optional.
export type Project = {
  slug: string; // used in the URL, e.g. /projects/simulated-client
  key: string; // short label on the hero map
  title: string;
  tier: Tier;
  icon: "chatbot" | "face" | "factory" | "route" | "truck";
  context: string; // team size, unit, year
  summary: string; // one line for the hero hover card
  description: string; // the main paragraph on the home page
  myPart?: string; // secondary projects only
  result?: string; // secondary projects only
  headline: string; // the badge: award or key metric
  headlineNote?: string; // a caveat shown next to the headline
  trace: Trace;
  stack: string[];
  hasCaseStudy: boolean;
  codeUrl?: string; // leave out if there's no public repo
};

export const projects: Project[] = [
  {
    slug: "simulated-client",
    key: "client-sim",
    title: "AI-Powered Simulated Client System",
    tier: "main",
    icon: "chatbot",
    context: "Capstone team project (6 members) · 2025",
    summary: "LLM patient simulator for psychology training",
    description:
      "A chatbot that plays a simulated patient so psychology students can practise clinical interviews safely. I co-led the backend, built the voice features, designed 30 patient personas and built the session feedback screen.",
    headline: "Best Project · Data/AI",
    trace: { kind: "text", value: "60 prompt templates scored" },
    stack: ["Llama Maverick", "Python", "Flask", "Whisper", "MongoDB", "React"],
    hasCaseStudy: true,
  },
  {
    slug: "face-verification",
    key: "face-verif",
    title: "Facial Recognition with Emotion & Liveness",
    tier: "main",
    icon: "face",
    context: "Group project (5 members) · Applied Machine Learning · 2026",
    summary: "Real-time verification with spoof and emotion checks",
    description:
      "A real-time webcam attendance system that recognises people, rejects spoofed faces and reads emotion. I trained and compared the face verification models; a triplet-loss ResNet18 reached an AUC of 0.80.",
    headline: "AUC 0.80",
    // Real triplet-loss values from the 10 training epochs (Phase 2 notebook).
    trace: {
      kind: "spark",
      label: "triplet loss, 10 epochs",
      values: [0.0249, 0.0211, 0.0185, 0.0186, 0.0145, 0.014, 0.0134, 0.0129, 0.0118, 0.0122],
    },
    stack: ["PyTorch", "ResNet18", "MobileNetV2", "MTCNN", "Tkinter"],
    hasCaseStudy: true,
    codeUrl: "", // add your fork's URL once it's set up
  },
  {
    slug: "vegemite-optimisation",
    key: "vegemite",
    title: "Vegemite Production Optimisation",
    tier: "secondary",
    icon: "factory",
    context: "Group project (4) · AI for Engineering",
    summary: "Quality, settings and anomaly models",
    description:
      "Three ML models for a food production line: a random-forest classifier predicting batch quality, a model recommending machine settings learned from good batches, and an Isolation Forest flagging unusual periods near recorded downtime. A desktop tool lets operators test settings and see the predicted outcome.",
    myPart:
      "The initial pipeline, the settings recommendation model, anomaly detection and model saving.",
    result:
      "98% classification accuracy on a random row split; a batch-level split would give a more conservative estimate, and anomaly detection remained weak.",
    headline: "98% accuracy",
    headlineNote: "random split",
    trace: { kind: "text", value: "3 models" },
    stack: ["Python", "scikit-learn", "Tkinter"],
    hasCaseStudy: false,
    codeUrl: "https://github.com/ChathilJay/Project-of-Product-Manufacturing",
  },
  {
    slug: "traffic-route-guidance",
    key: "tbrgs",
    title: "Traffic-Based Route Guidance System",
    tier: "secondary",
    icon: "route",
    context: "Group project (4) · Introduction to AI",
    summary: "LSTM traffic forecasts with A* routing",
    description:
      "Forecasts traffic at Melbourne intersections from VicRoads SCATS data, converts predicted flow into travel time with a traffic flow-speed model, and finds the fastest route with A* search on an interactive map. LSTM, GRU, DNN and Random Forest models were compared.",
    myPart: "The LSTM model and the travel-time calculation.",
    result:
      "The LSTM had the lowest validation error of the four models, and the sequence models captured rush-hour peaks the DNN missed.",
    headline: "LSTM lowest error",
    trace: { kind: "text", value: "4 models compared" },
    stack: ["Python", "TensorFlow/Keras", "NetworkX", "Streamlit", "Folium"],
    hasCaseStudy: false,
  },
  {
    slug: "vehicle-routing",
    key: "vrp",
    title: "Delivery Vehicle Routing System",
    tier: "secondary",
    icon: "truck",
    context: "Group project (4) · Intelligent Systems",
    summary: "Multi-agent routing with search heuristics",
    description:
      "A multi-agent routing system: a master agent collects each vehicle's capacity and distance limits, then assigns delivery routes from a central warehouse, with a map view and CSV export.",
    myPart:
      "Search and optimisation, including the route-scoring heuristic that balances distance against deliveries completed within each vehicle's limits.",
    headline: "Search & optimisation",
    trace: { kind: "text", value: "heuristic search" },
    stack: ["Python", "Heuristic search", "GUI"],
    hasCaseStudy: false,
  },
];

// Handy filtered lists for the page sections.
// .filter keeps only the items where the check is true.
export const mainProjects = projects.filter((p) => p.tier === "main");
export const secondaryProjects = projects.filter((p) => p.tier === "secondary");