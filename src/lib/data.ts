import type { NavItem, Feature, Stat, Testimonial, Program } from "@/types";

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { label: "Home",      href: "/" },
  { label: "Programs",  href: "#programs" },
  { label: "Why Us",    href: "#why-us" },
  { label: "Companies", href: "#companies" },
  { label: "Contact",   href: "#contact" },
];

// ─── Hero Stats ───────────────────────────────────────────────────────────────
export const HERO_STATS: Stat[] = [
  { value: "500",  suffix: "+", label: "Partner Companies" },
  { value: "10K",  suffix: "+", label: "Professionals Trained" },
  { value: "95",   suffix: "%", label: "Placement Rate" },
  { value: "4.8",  suffix: "/5", label: "Average Rating" },
];

// ─── Features ─────────────────────────────────────────────────────────────────
export const FEATURES: Feature[] = [
  {
    id: "f1",
    icon: "🎓",
    title: "Industry-Aligned Curriculum",
    description:
      "Programs co-created with top companies to ensure your team learns skills that matter right now.",
  },
  {
    id: "f2",
    icon: "🏆",
    title: "Globally Recognized Certificates",
    description:
      "Earn credentials from IIT Guwahati and other prestigious institutes trusted by Fortune 500s.",
  },
  {
    id: "f3",
    icon: "🤝",
    title: "Dedicated Account Manager",
    description:
      "A personal point-of-contact guides your enterprise from onboarding through program completion.",
  },
  {
    id: "f4",
    icon: "📊",
    title: "Learning Analytics Dashboard",
    description:
      "Real-time progress tracking, engagement metrics, and ROI reports for HR and L&D leaders.",
  },
  {
    id: "f5",
    icon: "⚡",
    title: "Flexible Learning Modes",
    description:
      "Live cohorts, self-paced modules, and blended options that fit into your team's schedule.",
  },
  {
    id: "f6",
    icon: "🌐",
    title: "Pan-India Delivery",
    description:
      "Seamlessly upskill distributed teams across locations through our hybrid delivery model.",
  },
];

// ─── Trusted Logos (text placeholders) ───────────────────────────────────────
export const TRUSTED_COMPANIES = [
  "Google", "Microsoft", "Amazon", "Infosys", "Wipro",
  "HCL", "TCS", "Accenture", "Deloitte", "KPMG",
];

// ─── Programs ─────────────────────────────────────────────────────────────────
export const PROGRAMS: Program[] = [
  {
    id: "p1",
    title: "Executive Program in Data Science & AI",
    duration: "11 Months",
    level: "Advanced",
    tag: "Most Popular",
    description:
      "Master ML, deep learning, NLP, and AI strategy with IIT Guwahati faculty.",
  },
  {
    id: "p2",
    title: "Post Graduate Program in Product Management",
    duration: "6 Months",
    level: "Intermediate",
    tag: "Trending",
    description:
      "Build PM skills: roadmapping, user research, agile, and stakeholder management.",
  },
  {
    id: "p3",
    title: "Certification in Digital Marketing",
    duration: "4 Months",
    level: "Beginner",
    tag: "New",
    description:
      "SEO, performance marketing, social media, and analytics for modern marketers.",
  },
  {
    id: "p4",
    title: "Executive Program in Generative AI",
    duration: "5 Months",
    level: "Advanced",
    tag: "Hot",
    description:
      "LLMs, prompt engineering, RAG pipelines, and enterprise AI deployment.",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    role: "Head of L&D",
    company: "Infosys",
    avatar: "PS",
    quote:
      "Accredian's enterprise programs transformed our analytics team. The IIT-backed credentials gave our employees the credibility boost they needed.",
  },
  {
    id: "t2",
    name: "Rahul Mehta",
    role: "VP Engineering",
    company: "TCS",
    avatar: "RM",
    quote:
      "The flexibility of blended learning meant zero disruption to delivery cycles. Our team upskilled without missing a single sprint.",
  },
  {
    id: "t3",
    name: "Ananya Krishnan",
    role: "CHRO",
    company: "HCL Technologies",
    avatar: "AK",
    quote:
      "From onboarding to completion, the dedicated account manager kept everything on track. Best enterprise L&D investment we've made.",
  },
];
