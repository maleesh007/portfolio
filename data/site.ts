// Personal details and site-wide text.
// Leave a link as "" until you have it; the site will hide empty links.

// "export" makes this usable from other files with "import".
export const site = {
  name: "Maleesha Basnayake",
  location: "Melbourne, Australia",
  headline:
    "Computer Science graduate, majoring in Artificial Intelligence, Swinburne University of Technology",
  tagline:
    "I build applied AI systems and test how they behave, from LLM-driven training tools to face verification models.",
  availability: "Open to graduate AI/ML roles",

  // Square brackets make an array: a list of items.
  quickFacts: [
    "Bachelor of Computer Science (AI) · Swinburne · Completed June 2026",
    "Best Project Award, Data/AI category, Capstone Expo 2025",
    "Focus: LLM applications · computer vision · model evaluation",
  ],

  links: {
    email: "", // e.g. "you@example.com"
    github: "", // e.g. "https://github.com/your-username"
    linkedin: "", // e.g. "https://www.linkedin.com/in/your-name"
    resume: "", // e.g. "/resume.pdf" once the file is in /public
  },
};

// A "type" describes the shape of the data. TypeScript then warns you
// if a skill group is missing a field or has a typo in a field name.
export type SkillGroup = { group: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    group: "AI & ML",
    items: [
      "PyTorch",
      "TensorFlow/Keras",
      "scikit-learn",
      "Transfer learning",
      "Metric learning",
      "LSTM/GRU",
      "Random forests",
      "Model evaluation (ROC/AUC, precision/recall)",
    ],
  },
  {
    group: "LLM applications",
    items: [
      "Prompt engineering",
      "Persona design",
      "LLM-based evaluation",
      "Whisper speech-to-text",
      "Text-to-speech",
    ],
  },
  {
    group: "Software",
    items: ["Python", "Flask", "React", "MongoDB", "Streamlit", "Tkinter", "Git"],
  },
  {
    group: "Deployment & testing",
    items: [
      "Cloud VM deployment (Nectar)",
      "Unit and system testing",
      "Technical documentation",
    ],
  },
];