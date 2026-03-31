# Kiran Garud — DevOps & Platform Engineering Portfolio

A modern, performance-optimized personal portfolio built with **Next.js 15**, **Tailwind CSS 4**, and **Framer Motion**. Designed to showcase hands-on **DevOps**, **cloud infrastructure**, and **platform engineering** work through a professional engineering-dashboard aesthetic.

> **Live Site:** _Deploy to Vercel / Netlify and replace this line with your live URL._

---

## 🖥️ Preview

The portfolio features a dark-mode-first, brutalist-minimalist blueprint design with animated network lines, subtle grid overlays, and scroll-triggered section transitions.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Sections Overview](#-sections-overview)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [License](#-license)

---

## ✨ Features

- **Dark Mode First** — Professionally themed with light mode support via `next-themes`.
- **Blueprint Grid Background** — Subtle engineering-inspired grid overlays in dark and light modes.
- **Animated Network Lines** — CSS-animated background lines for a platform-monitoring aesthetic.
- **Scroll Animations** — Sections animate into view using Framer Motion and Intersection Observer.
- **Interactive Sliders** — Drag-to-scroll horizontal sliders for Design & Motion System and Lab Experiments.
- **Architecture Diagram Viewer** — Expandable diagram viewer with navigation controls for project architecture visuals.
- **Fully Responsive** — Optimized for 360px–2560px viewports with mobile-specific breakpoints.
- **SEO Optimized** — Proper meta tags, semantic HTML, and heading hierarchy.
- **Mono Typography** — Engineering-grade monospace font system using JetBrains Mono + Instrument Sans display font.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router, Turbopack) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 4, CSS Variables |
| **Animations** | Framer Motion, CSS Keyframes |
| **Icons** | Lucide React |
| **UI Primitives** | Radix UI (Slot, Toggle, etc.) |
| **Theme** | next-themes (dark/light toggle) |
| **Fonts** | JetBrains Mono, Instrument Sans (Google Fonts) |
| **Deployment** | Vercel / Netlify / Any Node.js host |

---

## 📁 Project Structure

```
├── public/
│   ├── Projects/              # Architecture diagram images (referenced by Work section)
│   │   ├── Project 1 testing/Diagrams/
│   │   ├── Projetc 2 Production Style/Diagrams/
│   │   └── Code Mentor Ai-LLM Deploment-Porject 3/Diagrams/
│   └── Labs/                  # Lab experiment screenshots (referenced by Prototypes section)
│       ├── learning-sphere/
│       ├── interior-designer/
│       ├── restaurant/
│       ├── saas-prototype/
│       ├── portfolio-v1/
│       └── portfolio-v2/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout (fonts, metadata, dark mode)
│   │   ├── page.tsx           # Main page (all sections composed here)
│   │   └── globals.css        # Global styles, CSS variables, grid backgrounds
│   ├── components/
│   │   ├── Navbar.tsx          # Fixed nav with mobile hamburger menu
│   │   ├── Footer.tsx          # Footer with quick links and status
│   │   ├── Terminal.tsx        # Animated terminal component (Hero)
│   │   ├── NetworkLines.tsx    # Animated background network lines
│   │   ├── SectionHeader.tsx   # Reusable section header component
│   │   ├── PipelineVisual.tsx  # CI/CD pipeline status visual
│   │   ├── DiagramViewer.tsx   # Architecture diagram viewer with expand/nav
│   │   ├── ThemeToggle.tsx     # Dark/light mode switch
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Hero section with name, tagline, terminal
│   │   │   ├── MotionSlider.tsx # Design & Motion System interactive slider
│   │   │   ├── About.tsx       # Engineering Identity section
│   │   │   ├── Services.tsx    # Operational Scope (5 capability cards)
│   │   │   ├── TechStack.tsx   # Technology Stack grid (6 categories)
│   │   │   ├── Certs.tsx       # Certifications & Learning section
│   │   │   ├── Work.tsx        # Engineering Work (3 projects with diagrams)
│   │   │   ├── Prototypes.tsx  # Lab Experiments slider (6 projects)
│   │   │   ├── Growing.tsx     # Current Sprint & Ecosystem
│   │   │   └── Contact.tsx     # Contact CTA with social links
│   │   └── ui/                 # shadcn/ui primitive components
│   └── lib/
│       ├── utils.ts            # Tailwind class merge utility (cn)
│       └── hooks/
│           └── use-mobile.tsx  # Mobile breakpoint detection hook
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── tailwind.config.ts (via CSS)
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **pnpm** (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at **http://localhost:3000**.

### Build for Production

```bash
pnpm build
pnpm start
```

---

## 📖 Sections Overview

### 1. Hero
Full-screen landing with animated name reveal, status badge, value statement, action buttons, and an interactive terminal component showcasing deployment commands.

### 2. Design & Motion System
Horizontal drag-to-scroll slider with 8 interactive UI modules demonstrating viewport animations, clip-path reveals, gradient beams, marquee tickers, and card stacking effects.

### 3. Engineering Identity (About)
Two-column layout featuring a professional summary, engineering philosophy quote, and operational bias cards explaining the DevOps-first mindset.

### 4. Operational Scope (Services)
5 capability cards covering AWS Cloud & DevOps, AI-Driven Systems, Web Development, Security & DevSecOps, and Platform Observability — each with detailed bullet points.

### 5. Technology Stack
6-category glassmorphism grid displaying cloud platforms, containers, CI/CD, observability, security, and AI tools with hover-glow effects.

### 6. Validation Layers (Certifications)
AWS Solutions Architect certification, training programs, and continuous learning methodology with applied approach documentation.

### 7. Engineering Work (Projects)
Tabbed interface showcasing 3 major projects:
- **LearnSphere Testing** — Single-AZ Kubernetes deployment simulation
- **LearnSphere Production** — Production-grade 3-AZ architecture
- **CodeMentor AI** — Cost-optimized LLM deployment platform

Each includes detailed descriptions, tech stacks, key contributions, architecture diagrams, and a CI/CD pipeline visual.

### 8. Lab Experiments (Prototypes)
Horizontal slider displaying 6 web application prototypes with real screenshots, deployment previews, infrastructure tags, and a tech overview + reflection summary.

### 9. Current Sprint & Ecosystem
Split-panel section showing active learning focus areas and community engagement.

### 10. Contact
Large CTA heading with email, LinkedIn, GitHub, and resume links.

---

## 🎨 Customization

### Content
All section content is defined inline within each component file under `src/components/sections/`. To update project details, certifications, or descriptions, edit the relevant component directly.

### Colors & Theme
CSS variables are defined in `src/app/globals.css` using Tailwind CSS 4's `@theme` syntax. Key variables:
- `--primary` — Main brand color
- `--accent` — Highlight/CTA color
- `--background` / `--foreground` — Base theme colors

### Fonts
Fonts are configured in `src/app/layout.tsx` via `next/font/google`. The portfolio uses:
- **Instrument Sans** — Display/headline font
- **JetBrains Mono** — Monospace/body font

### Architecture Diagrams
Place diagram images in `public/Projects/[project-name]/Diagrams/` and update the `diagrams` array in `Work.tsx`.

### Lab Screenshots
Place experiment screenshots in `public/Labs/[project-name]/` and update the `prototypes` array in `Prototypes.tsx`.

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect the GitHub repository directly via [vercel.com](https://vercel.com) for automatic deployments on push.

### Netlify

```bash
# Build command
pnpm build

# Publish directory
.next
```

### Docker

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
CMD ["pnpm", "start"]
```

---

## 📄 License

This project is licensed under the terms included in the [LICENSE](./LICENSE) file.

---

**Built with Next.js + AI** | © 2026 Kiran Garud
