export interface Project {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  secondaryLink?: { url: string; label: string };
}

export interface SocialLink {
  label: string;
  url: string;
}

export const profile = {
  name: "Michael Kupfer",
  location: "Tel Aviv",
  email: "michaelkulhs@gmail.com",
  tagline:
    "I build software end-to-end\u2009—\u2009from scalable APIs and data systems to ML models and the interfaces that tie them together.",
  about: [
    "Computer Science graduate from SCE Academic College (GPA\u00a090). I\u2019ve shipped full-stack web apps, trained neural networks on real-world datasets, and deployed services that handle live traffic.",
    "As a university tutor for Deep Learning, Data Structures, and Algorithms I sharpened both my technical depth and my ability to explain complex ideas clearly.",
    "I care about clean, maintainable code and building products that actually work well for the people who use them.",
  ],
  avatar: "/profile.jpeg",
  resumeUrl: "/resume.pdf",
} as const;

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/michaelkupfer97" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/michael-kupfer/" },
];

export const projects: Project[] = [
  {
    title: "Weather Analytics",
    description:
      "Real-time weather dashboard with city search, favorites, and a custom Weather Score feature. Built for performance with server-side caching.",
    highlights: [
      "Node.js + Express backend consuming a live weather API",
      "Caching layer to cut external API calls and speed up responses",
      "User preference storage (favorite cities) and Weather Score",
    ],
    tech: ["Node.js", "Express", "REST API", "JavaScript"],
    image: "/weather-analytics.jpg",
    githubUrl: "https://github.com/michaelkupfer97/weather-website-node3",
    liveUrl: "https://weather-website-node3.onrender.com/",
  },
  {
    title: "Trussify",
    description:
      "ML-powered structural design tool that predicts optimal truss configurations using Random Forest and Graph Neural Networks.",
    highlights: [
      "Dataset of 1,000+ truss configurations with GNN-compatible structures",
      "Hyperparameter tuning via Optuna for model optimization",
      "Full demo app with backend integration",
    ],
    tech: ["Python", "PyTorch", "GNN", "Optuna"],
    image: "/trussify.png",
    githubUrl: "https://github.com/michaelkupfer97/FinalProjectTrussify",
  },
  {
    title: "StockPulse AI",
    description:
      "LSTM-based forecasting model for financial time series with feature engineering and an interactive Jupyter dashboard.",
    highlights: [
      "LSTM model trained on historical market data",
      "Feature engineering and hyperparameter tuning for accuracy",
      "Interactive analysis dashboard in Jupyter",
    ],
    tech: ["Python", "TensorFlow", "LSTM", "Jupyter"],
    image: "/stock1.jpg",
    githubUrl: "https://github.com/michaelkupfer97/StockPulseAI",
    secondaryLink: {
      url: "https://github.com/michaelkupfer97/StockPulseAI/blob/main/DLFinalProject_stockPluseAI.ipynb",
      label: "Notebook",
    },
  },
  {
    title: "Work Scheduler",
    description:
      "MERN-based shift scheduling system with authentication, role-based access control, and a responsive management UI.",
    highlights: [
      "JWT authentication with role-based access (admin / employee)",
      "Business logic and data models in Node.js + MongoDB",
      "Responsive React UI for shift management and user allocation",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "/work-scheduler.png",
    githubUrl: "https://github.com/michaelkupfer97/WorkScheduler",
  },
  {
    title: "Studio Time",
    description:
      "Multi-user session management app for an art studio \u2014 lets admins schedule classes, manage students, and track attendance with JWT-based authentication.",
    highlights: [
      "JWT authentication with role-based access control",
      "User-scoped card management so each user only sees their own records",
      "Full-stack app with Express REST API and Vite vanilla JS frontend",
    ],
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Vite"],
    image: "/Stutio-time.jpg",
    githubUrl: "https://github.com/TheZohar11/miriyam-studio",
    liveUrl: "https://miriyam-studio-front.onrender.com/",
  },
];
