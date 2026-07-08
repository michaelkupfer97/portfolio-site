export interface Project {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  images: string[];
  /** Where `object-cover` anchors the image in the card thumbnail (default: center). */
  imageObjectPosition?: "top" | "center" | "bottom";
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
    title: "Voxly",
    description:
      "Voice AI agent platform that turns natural-language requirements into schema-validated, provider-independent voice-agent configs. Private repository — contact me for access.",
    highlights: [
      "End-to-end platform: natural-language requirements → schema-validated, provider-independent voice-agent configs (OpenAI Structured Outputs + Zod)",
      "Next.js/TypeScript + Supabase (immutable config versions), deterministic compiler deploying Vapi assistants; Twilio outbound + Cal.com booking",
      "Lead/call management, authenticated webhooks, idempotent events, transcripts/recordings; 621 Vitest tests, deployed on Vercel",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Vapi",
      "Twilio",
      "Cal.com",
      "OpenAI",
      "Zod",
      "Vitest",
      "Vercel",
    ],
    images: [
      "/images/voxly/01-builder.png",
      "/images/voxly/02-natural-language-builder.png",
      "/images/voxly/03-leads-and-outbound-call.png",
      "/images/voxly/04-call-result-and-booking-1.png",
      "/images/voxly/04-call-result-and-booking-2.png",
      "/images/voxly/05-agent-archive-restore.png",
    ],
    secondaryLink: {
      url: "https://www.loom.com/share/e6e4e803793547ea9b322cb444a51408",
      label: "Watch Demo",
    },
  },
  {
    title: "GTM Intelligence Agent",
    description:
      "Multi-agent pipeline that takes a company name and produces intelligence briefs, lead scores, outreach strategy, and a personalized three-email sequence.",
    highlights: [
      "Four-stage pipeline (researcher → scorer → strategist → copywriter) with Python, Claude, LangGraph, Tavily, and Streamlit",
      "Structured context passing and tier-based gating to skip low-priority leads early, reducing unnecessary model calls and token usage",
    ],
    tech: ["Python", "LangGraph", "Claude", "Tavily", "Streamlit", "LangChain"],
    images: [
      "/images/gtm-intelligence-agent/01-overview.png",
      "/images/gtm-intelligence-agent/02-scoring.png",
      "/images/gtm-intelligence-agent/03-emails.png",
    ],
    githubUrl: "https://github.com/michaelkupfer97/gtm-intelligence-agent",
  },
  {
    title: "DipSignal",
    description:
      "Production Next.js app aggregating CNN Fear & Greed, Yahoo Finance, and S5FI breadth to score four S&P 500 “buy the dip” rules, with bilingual EN/HE UI and a markdown blog.",
    highlights: [
      "Four-rule dip signal (Fear & Greed, VIX, S5FI breadth, three red days) with historical charts",
      "Vercel Blob storage for ~2 years of history + twice-daily cron refreshes",
      "Bilingual (EN/HE) App Router routes, markdown blog, CRON_SECRET-protected jobs",
    ],
    tech: ["Next.js", "TypeScript", "Vercel", "Vercel Blob", "Recharts"],
    images: ["/images/dipsignal/thumbnail.jpg"],
    imageObjectPosition: "top",
    githubUrl: "https://github.com/michaelkupfer97/dipSignal",
    liveUrl: "https://dip-signal.vercel.app/",
  },
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
    images: ["/images/weather-analytics/thumbnail.jpg"],
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
    images: ["/images/trussify/thumbnail.png"],
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
    images: ["/images/stockpulse/thumbnail.jpg"],
    githubUrl: "https://github.com/michaelkupfer97/StockPulseAI",
    secondaryLink: {
      url: "https://github.com/michaelkupfer97/StockPulseAI/blob/main/DLFinalProject_stockPluseAI.ipynb",
      label: "Notebook",
    },
  },
  {
    title: "WorkScheduler",
    description:
      "Shift scheduling web app for organizations with manager scheduling tools and employee availability, swaps, and time-off workflows.",
    highlights: [
      "Manager scheduling tools (weekly grid + constraint-aware generation)",
      "Employee availability/preferences, shift swaps + approvals, time-off workflows",
      "Full-stack TypeScript with shared Zod validation, JWT auth, MongoDB persistence",
    ],
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind",
      "TanStack Query",
      "Express",
      "MongoDB",
      "Zod",
      "JWT",
    ],
    images: ["/images/work-scheduler/thumbnail.png"],
    githubUrl: "https://github.com/michaelkupfer97/WorkScheduler",
    liveUrl: "https://work-scheduler-nine.vercel.app/",
    secondaryLink: {
      url: "https://workscheduler-michaelkupfer97.fly.dev/healthz",
      label: "API Health",
    },
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
    images: ["/images/studio-time/thumbnail.jpg"],
    githubUrl: "https://github.com/TheZohar11/miriyam-studio",
    liveUrl: "https://miriyam-studio-front.onrender.com/",
  },
  {
    title: "My Blog",
    description:
      "A minimal full-stack blog built with Express and EJS: create and manage posts from the homepage with Bootstrap styling, no database required for lightweight deployment.",
    highlights: [
      "Server-rendered pages with EJS templates and Express routes",
      "Post workflow (create, edit, delete) using in-memory storage",
      "Bootstrap layout and Font Awesome icons, deployed on Render",
    ],
    tech: ["Node.js", "Express", "EJS", "Bootstrap"],
    images: ["/images/my-blog/thumbnail.jpg"],
    githubUrl: "https://github.com/michaelkupfer97/my-blog-express",
    liveUrl: "https://my-blog-express.onrender.com/",
  },
];
