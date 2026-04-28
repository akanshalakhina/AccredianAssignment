// ─── Navigation ───────────────────────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ─── Features / Benefits ──────────────────────────────────────────────────────
export interface Feature {
  id: string;
  icon: string;           // emoji or icon name
  title: string;
  description: string;
}

// ─── Stats ────────────────────────────────────────────────────────────────────
export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;         // initials fallback
  quote: string;
}

// ─── Program / Course ─────────────────────────────────────────────────────────
export interface Program {
  id: string;
  title: string;
  duration: string;
  level: string;
  tag: string;
  description: string;
}
