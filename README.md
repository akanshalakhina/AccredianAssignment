# Accredian Enterprise Clone

A pixel-faithful, production-quality **partial clone** of [enterprise.accredian.com](https://enterprise.accredian.com/) built as an internship assignment.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | **Next.js 15** (App Router) |
| Language | **TypeScript** |
| Styling | **Tailwind CSS v4** |
| Font | **Inter** (Google Fonts) |
| Package Manager | npm |

---

## ✨ Features Implemented

| Section | Details |
|---|---|
| **Navbar** | Scroll-aware glass effect · Animated hamburger · Responsive |
| **Hero** | Gradient background · Floating card · Skill progress bars · Stats strip |
| **Trusted By** | Auto-scrolling infinite marquee of company logos |
| **Why Us** | 6-card feature grid with hover gradients and staggered animations |
| **Programs** | Interactive filter tabs · Program cards with badges |
| **Testimonials** | 3-column card grid · Gradient CTA banner |
| **Contact** | Fully controlled form · Success state · Validation |
| **Footer** | 5-column grid · Social icons · Copyright bar |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, SEO metadata, fonts
│   ├── page.tsx            # Home page (server component)
│   └── globals.css         # Design tokens, animations, base styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky, scroll-aware nav
│   │   └── Footer.tsx      # Dark footer with links
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── TrustedBySection.tsx
│   │   ├── WhyUsSection.tsx
│   │   ├── ProgramsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── Button.tsx      # Variant/size-aware button primitive
│       └── Badge.tsx       # Coloured label badge
├── lib/
│   └── data.ts             # All static content (single source of truth)
└── types/
    └── index.ts            # Shared TypeScript interfaces
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18.17
- npm ≥ 9

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/accredian-enterprise-clone.git
cd accredian-enterprise-clone

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🏗 Architecture Decisions

### Server vs Client Components
- **Page & section components** → Server Components (zero JS bundle cost)  
- **Interactive components** (Navbar, ProgramsSection, ContactSection) → marked `"use client"` only where needed  
- This follows the Next.js App Router best practice: *push client boundaries to the leaves*

### Data Layer
All content lives in `src/lib/data.ts`. To update copy or add programs, you edit one file — no hunting through JSX.

### Design System
CSS custom properties in `globals.css` define the colour palette and animation library. Tailwind utility classes reference these tokens, keeping the design consistent.

---

## 🤖 AI Usage Disclosure

This project was scaffolded and built with **AI assistance** (Antigravity / Claude). Here is what was AI-generated vs manually modified:

| Item | AI-generated | Manually adjusted |
|---|---|---|
| Project scaffold (`create-next-app`) | ✅ | — |
| Component structure & file layout | ✅ | Reviewed & approved |
| Tailwind class choices | ✅ | Tweaked spacing/colors |
| Content copy (headings, descriptions) | ✅ | Edited for accuracy |
| TypeScript interfaces | ✅ | — |
| Form logic & state management | ✅ | Tested manually |
| CSS animations | ✅ | Adjusted timing |

> **Key insight:** AI accelerates boilerplate and design patterns. The real engineering decisions — component architecture, Server vs Client boundary, data separation — were planned and verified by the developer.

---

## 📈 Potential Improvements (Bonus Points)

- [ ] **Dark mode** — toggle using `next-themes` and CSS `[data-theme]` selectors  
- [ ] **Framer Motion** — replace CSS animations with `motion.div` for scroll-triggered reveals  
- [ ] **CMS integration** — move `lib/data.ts` to Contentful / Sanity for dynamic content  
- [ ] **API Route** — `app/api/contact/route.ts` to email form submissions via Resend  
- [ ] **i18n** — add Hindi locale with Next.js internationalization  
- [ ] **Storybook** — document `Button` and `Badge` with visual stories  
- [ ] **E2E tests** — Playwright scripts for form submission and nav behaviour  
- [ ] **Performance audit** — Lighthouse score target ≥ 95 on all metrics  

---

## 📄 License

MIT © 2025 — built for educational purposes as an internship assignment.
