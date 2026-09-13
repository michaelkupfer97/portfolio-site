export type ProjectCategory = "AI Agents" | "Machine Learning" | "Full-stack";

export interface Project {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  images: string[];
  category: ProjectCategory;
  /** Rendered as the large case-study block above the grid. Only one project should be featured. */
  featured?: boolean;
  /** Big numbers shown on the featured block. */
  stats?: { value: string; label: string }[];
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

export interface Experience {
  role: string;
  company: string;
  /** Employer of record / staffing arrangement, shown after the company name. */
  via?: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  tags: string[];
  current?: boolean;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  note?: string;
}

export const profile = {
  name: "Michael Kupfer",
  location: "Tel Aviv, Israel",
  email: "michaelkulhs@gmail.com",
  role: "Forward Deployed Engineer",
  company: "Wonderful",
  /** Phrases cycled by the hero typewriter after "I build". */
  heroRoles: [
    "production AI agents",
    "voice agents that book meetings",
    "multi-agent LLM pipelines",
    "RAG systems in Hebrew & English",
    "full-stack products, end to end",
  ],
  tagline:
    "Forward Deployed Engineer at Wonderful, shipping AI agents into real enterprise workflows. I own the whole stack — from LLM orchestration and integrations to the data layer and the UI on top.",
  about: [
    "I’m an AI engineer with full-stack roots. Today I work as a Forward Deployed Engineer at Wonderful (via HMS), where I design, deploy, and iterate on production AI agents inside enterprise environments — wiring agent logic to real tools, data sources, and APIs.",
    "Before that I built Voxly, a voice-AI agent platform that turns plain-language requirements into deployable calling agents, and a series of LLM systems: a multi-agent GTM pipeline, a tool-calling analytics agent over federal aviation data, and a bilingual RAG app.",
    "Computer Science graduate from SCE Academic College (GPA 90). As a university tutor for Deep Learning, Data Structures, and Algorithms I learned to explain hard things simply — which turns out to be most of the job when you deploy AI with client teams.",
  ],
  avatar: "/profile.jpeg",
  resumeUrl: "/resume.pdf",
} as const;

export const heroStats = [
  { value: "3", label: "AI agent systems shipped" },
  { value: "950+", label: "automated tests across projects" },
  { value: "10+", label: "end-to-end projects" },
];

export const techStack = [
  "TypeScript",
  "Python",
  "Next.js",
  "React",
  "Node.js",
  "OpenAI API",
  "Anthropic API",
  "LangGraph",
  "Vapi",
  "Twilio",
  "Supabase",
  "PostgreSQL",
  "MongoDB",
  "Zod",
  "Vitest",
  "Pytest",
  "Streamlit",
  "PyTorch",
  "TensorFlow",
  "Tailwind CSS",
  "Vercel",
  "Docker",
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/michaelkupfer97" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/michael-kupfer/" },
];

export const experience: Experience[] = [
  {
    role: "Forward Deployed Engineer",
    company: "Wonderful",
    via: "via HMS",
    period: "Aug 2026 — Present",
    location: "Tel Aviv",
    current: true,
    summary:
      "Wonderful builds AI agents for enterprises. As an FDE I sit between the product and the customer, turning messy real-world workflows into agents that run in production.",
    bullets: [
      "Design, ship, and operate production-grade AI agents for complex enterprise workflows — agent logic, tools, data sources, and APIs integrated inside client environments.",
      "Own technical delivery end to end: workflow discovery and architecture, build and testing, production launch, monitoring, and continuous iteration.",
      "Partner with client engineering and business stakeholders to solve data-access, governance, security, and performance constraints while enabling long-term ownership by their teams.",
    ],
    tags: ["AI Agents", "LLM Orchestration", "Integrations", "Enterprise Delivery"],
  },
  {
    role: "Computer Science Tutor",
    company: "SCE Academic College",
    period: "2023 — 2026",
    location: "Beer Sheva",
    summary:
      "Tutored undergraduate students in Deep Learning, Data Structures, Algorithms, OOP, and Intro to CS.",
    bullets: [
      "Simplified abstract topics into intuitive explanations and built exam strategies with students.",
      "Kept my own fundamentals sharp — the same ones I lean on when reviewing model behaviour and system design today.",
    ],
    tags: ["Deep Learning", "Algorithms", "Teaching"],
  },
];

export const education: Education[] = [
  {
    degree: "B.Sc. Computer Science",
    school: "SCE — Sami Shamoon College of Engineering",
    period: "2022 — 2025",
    note: "GPA 90 · Final project: Trussify (ML for structural design)",
  },
];

export const projects: Project[] = [
  {
    title: "Voxly",
    category: "AI Agents",
    featured: true,
    description:
      "A voice-AI agent platform that turns natural-language requirements into schema-validated, provider-independent voice-agent configs — then deploys them as real assistants that call leads, qualify them, and book meetings.",
    highlights: [
      "Natural language → validated agent config: OpenAI Structured Outputs + Zod produce a provider-independent spec, compiled deterministically into Vapi assistants",
      "Immutable config versions in Supabase with archive/restore; Twilio outbound calling and Cal.com booking wired into the agent’s tools",
      "Lead & call management with authenticated webhooks, idempotent event handling, transcripts and recordings",
      "621 Vitest tests covering the compiler, webhooks, and booking flows; deployed on Vercel",
    ],
    stats: [
      { value: "621", label: "automated tests" },
      { value: "6", label: "external integrations" },
      { value: "1", label: "prompt → deployed agent" },
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
    category: "AI Agents",
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
    title: "Airport Investment Agent",
    category: "AI Agents",
    description:
      "Tool-calling analytics agent that screens U.S. airports for modernization investment. The LLM interprets intent and picks tools; every number comes from deterministic Python over validated BTS data snapshots.",
    highlights: [
      "OpenAI Responses API with function tools: rank / compare / profile airports, long-haul share, demand-pressure proxy, data-freshness answers, multi-turn follow-ups",
      "ETL over BTS T-100 + On-Time Performance and OurAirports with atomic last-known-good snapshots; lazy per-state route caching",
      "Weighted percentile scoring (capacity pressure, congestion) with evidence cards, sources, and assumptions surfaced in the Streamlit UI; optional voice input via transcription",
      "331 offline pytest tests with fake OpenAI clients; SQLite chat history",
    ],
    tech: ["Python", "OpenAI Responses API", "Tool Calling", "Pandas", "Streamlit", "Pydantic", "Pytest"],
    images: [
      "/images/airport-investment-agent/01-ranking.png",
      "/images/airport-investment-agent/02-compare.png",
      "/images/airport-investment-agent/03-evidence.png",
    ],
    imageObjectPosition: "top",
    githubUrl: "https://github.com/michaelkupfer97/airport-investment-agent",
  },
  {
    title: "DipSignal",
    category: "Full-stack",
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
    title: "Mini RAG",
    category: "AI Agents",
    description:
      "A small, readable Retrieval-Augmented Generation pipeline: drop in a TXT or PDF, get grounded answers in Hebrew or English with the exact chunks each answer was built from.",
    highlights: [
      "Paragraph-aware chunking with word-boundary overlap; Gemini embeddings with retrieval-optimized task types",
      "Hebrew-safe PDF extraction (PyMuPDF, right-to-left order) and a local JSON vector store with cosine top-k search",
      "Streamlit UI + CLI; answers reply in the question’s language and cite the retrieved chunks with similarity scores",
    ],
    tech: ["Python", "Gemini API", "Embeddings", "PyMuPDF", "Streamlit"],
    images: [
      "/images/mini-rag/01-hebrew.png",
      "/images/mini-rag/02-english.png",
      "/images/mini-rag/03-pdf.png",
    ],
    imageObjectPosition: "top",
    githubUrl: "https://github.com/michaelkupfer97/mini-rag-app",
  },
  {
    title: "WorkScheduler",
    category: "Full-stack",
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
    title: "Trussify",
    category: "Machine Learning",
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
    category: "Machine Learning",
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
    title: "Weather Analytics",
    category: "Full-stack",
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
    title: "Studio Time",
    category: "Full-stack",
    description:
      "Multi-user session management app for an art studio — lets admins schedule classes, manage students, and track attendance with JWT-based authentication.",
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
    category: "Full-stack",
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

export const projectCategories: ProjectCategory[] = [
  "AI Agents",
  "Full-stack",
  "Machine Learning",
];
