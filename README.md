# Accredian Enterprise Page

This project is a partial clone of the Accredian Enterprise website built using Next.js.

---

## 🚀 Live Submission

* **Vercel Deployment:** ADD_YOUR_VERCEL_URL_HERE
* **GitHub Repository:** ADD_YOUR_GITHUB_LINK_HERE

---

## ✅ Assignment Checklist

### 1) Landing Page

* [x] Landing page with all major sections (Hero, Trusted By, Why Us, Programs, Testimonials, Contact)
* [x] Navigation menu
* [x] Footer

### 2) Functional Requirements

* [x] Fully responsive (mobile + desktop)
* [x] Clean and structured UI
* [x] Reusable components (`Button`, `Badge`, section wrappers)
* [x] Smooth navigation (anchor links + scroll behavior)

### 3) Mandatory Tech Requirements

* [x] Next.js (App Router)
* [x] Functional components + hooks
* [x] Tailwind CSS
* [x] API integration (lead form → backend route)
* [x] Deployment ready (Vercel)

---

## ⭐ Bonus Features

* [x] Lead capture form
* [x] Data stored using MongoDB Atlas (persistent storage)
* [x] API-based backend handling using Next.js route handlers

---

## 🛠️ Tech Stack

* **Next.js 16 (App Router)**
* **React 19**
* **TypeScript**
* **Tailwind CSS v4**
* **MongoDB Atlas (Database)**

---

## ⚙️ Local Setup

### Prerequisites

* Node.js 20+
* npm 10+

### Installation

```bash
git clone <your-repo-url>
cd accredian-clone
npm install
npm run dev
```

### Production Build

```bash
npm run build
npm run start
```

---

## 🧠 Project Approach

1. **Component-based architecture**

   * Divided UI into reusable sections for scalability and readability

2. **Data-driven structure**

   * Centralized content in `src/lib/data.ts`

3. **Reusable UI primitives**

   * Created shared components (`Button`, `Badge`) for consistency

4. **Optimized client usage**

   * Limited client components to interactive parts only

5. **Form + Backend Integration**

   * Lead form submits data via `/api/lead`
   * Backend stores data in MongoDB Atlas for persistence

---

## 🗄️ Backend & Data Storage

* Implemented using **Next.js API routes**
* Data stored in **MongoDB Atlas cloud database**
* Ensures persistent and scalable storage
* Environment variables used for secure DB connection

---

## 🤖 AI Usage (Required Disclosure)

### Where AI helped

* Initial component scaffolding
* Tailwind styling suggestions
* API route structure
* Debugging and error resolution

### What was manually improved

* Fixed backend integration issues
* Replaced mock storage with MongoDB (real persistence)
* Improved UI responsiveness and structure
* Added proper validation and error handling
* Ensured production build stability

---

## 🚀 Improvements With More Time

* Pixel-perfect UI matching with reference site
* Add authentication & user sessions
* Add analytics for lead tracking
* Improve accessibility (ARIA + keyboard navigation)
* Add automated tests (Playwright / React Testing Library)

---
