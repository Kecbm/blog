# 🚀 Klecianny Melo — Personal Blog

> A modern, multilingual personal blog and portfolio built with Next.js and
> TypeScript. Features a clean design with dark mode support, smooth animations,
> and a fully responsive layout.

## 🌐 Live Demo

- **Website**: https://kecbm.vercel.app/

## 📋 Summary

A personal blog and portfolio website built with Next.js 14, featuring
multi-language support (English/Portuguese), dark/light theme switching, and
smooth animations. The project showcases professional experience, published
articles, book recommendations, gaming progress, and personal projects with an
elegant, modern interface.

## 🛠️ What Was Built

- **Home**: Personal introduction with profile image, bio, and external links
- **About**: Detailed personal story with external references and links
- **Articles**: Curated list of technical articles from Dev.to with tags and dates
- **Books**: Reading list with book recommendations
- **Experience**: Professional work history with company links and tech stacks
- **Games**: Gaming progress tracker with status filters (Playing/Completed/Pending)
  and pagination
- **Projects**: Portfolio showcase with animated GIF demonstrations                   |

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Framework | <img src="https://cdn.simpleicons.org/nextdotjs" width="24" alt="Next.js" /> [Next.js 14](https://nextjs.org/) (App Router) |
| UI | <img src="https://cdn.simpleicons.org/react" width="24" alt="React" /> [React 18](https://react.dev/) + <img src="https://cdn.simpleicons.org/tailwindcss" width="24" alt="Tailwind CSS" /> [Tailwind CSS 3](https://tailwindcss.com/) + <img src="https://cdn.simpleicons.org/lucide" width="24" alt="Lucide" /> [lucide-react](https://lucide.dev/) |
| Icons | <img src="https://cdn.simpleicons.org/simpleicons" width="24" alt="Simple Icons" /> [@icons-pack/react-simple-icons](https://github.com/icon-pack/react-simple-icons) |
| Language | <img src="https://cdn.simpleicons.org/typescript" width="24" alt="TypeScript" /> [TypeScript 5](https://www.typescriptlang.org/) (strict) |
| Styling | <img src="https://cdn.simpleicons.org/postcss" width="24" alt="PostCSS" /> [PostCSS](https://postcss.org/) + [Prettier](https://prettier.io/) |
| Analytics | <img src="https://cdn.simpleicons.org/vercel" width="24" alt="Vercel" /> [Vercel Analytics](https://vercel.com/analytics) |
| Hosting | <img src="https://cdn.simpleicons.org/vercel" width="24" alt="Vercel" /> [Vercel](https://vercel.com/) |

## 📁 Project Structure

```
├── public/
│   ├── Profile.jpeg                 # Profile image
│   ├── projects/                    # Project demo GIFs
│   │   ├── 1.add.gif
│   │   ├── 2.edit.gif
│   │   ├── 3.filters.gif
│   │   └── 4.pronuciation.mp4
│   └── reels/                       # Project demo videos
│       ├── 1.mp4 - 11.mp4
│       └── additional reels
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout with theme provider
│   │   ├── page.tsx                 # Home page
│   │   ├── about/page.tsx           # About me section
│   │   ├── articles/page.tsx        # Technical articles from Dev.to
│   │   ├── books/page.tsx           # Book recommendations
│   │   ├── experience/page.tsx      # Professional experience timeline
│   │   ├── games/page.tsx           # Gaming progress tracker
│   │   ├── projects/page.tsx        # Portfolio projects showcase
│   │   └── globals.css              # Global styles and Tailwind imports
│   ├── components/
│   │   ├── ClientLayout.tsx         # Client-side layout wrapper
│   │   ├── ExternalLink.tsx         # External link component
│   │   ├── FloatingIcons.tsx        # Animated floating background icons
│   │   ├── Footer.tsx               # Site footer
│   │   ├── IconBackground.tsx       # Icon background component
│   │   ├── LanguageToggle.tsx       # Language switcher (EN/PT)
│   │   ├── NavLink.tsx              # Navigation link component
│   │   ├── PageSelector.tsx         # Page navigation selector
│   │   ├── PlayStationIcons.tsx     # PlayStation button icons
│   │   ├── ProjectButton.tsx        # Project card button
│   │   ├── ProjectTag.tsx           # Project tag component
│   │   ├── ReadingIcons.tsx         # Reading-themed icons
│   │   ├── scroll-to-top.tsx        # Scroll to top button
│   │   ├── StatusBadge.tsx          # Status badge component
│   │   └── StatusFilter.tsx         # Filter component for games
│   ├── contexts/
│   │   └── LanguageContext.tsx      # Language context provider
│   ├── hooks/
│   │   └── useTranslation.ts        # Translation hook
│   ├── lib/
│   │   └── articles.ts              # Articles data and utilities
│   └── translations/
│       └── index.ts                 # Translation files (EN/PT)
├── .eslintrc.json                   # ESLint configuration
├── .prettierrc.js                   # Prettier configuration
├── next.config.js                   # Next.js configuration
├── package.json                     # Dependencies and scripts
├── postcss.config.js                # PostCSS configuration
├── tailwind.config.ts               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
└── README.md                        # Project documentation
```

## 💻 Run Locally

Requirements: **Node.js 18+** and **npm** (or **yarn** / **pnpm**).

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### ⚙️ Useful Scripts

| Command                | What it does                              |
|------------------------|-------------------------------------------|
| `npm run dev`          | Start development server with hot reload  |
| `npm run build`        | Build production bundle                   |
| `npm run start`        | Start production server                   |
| `npm run lint`         | Run ESLint for code quality               |

## 🤝 Connect

- **LinkedIn**: [linkedin.com/in/kecbm](https://linkedin.com/in/kecbm)
- **GitHub**: [github.com/Kecbm](https://github.com/Kecbm)
- **Twitter**: [x.com/kecbm](https://x.com/kecbm)
- **Dev.to**: [dev.to/kecbm](https://dev.to/kecbm)
- **Email**: kleciannymelo@gmail.com