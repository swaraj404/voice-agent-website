# KOEL AI - Voice Agent Website

A modern, futuristic website for KOEL AI voice agent platform built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## 🚀 Features

- ✨ Modern glassmorphic UI design
- 🎨 Dark theme with purple/blue gradient accents
- 📱 Fully responsive across all devices
- ⚡ Optimized performance with GPU-accelerated animations
- 🎭 Smooth scroll-triggered animations with Framer Motion
- 🔤 Custom Google Fonts (Raleway, Orbitron, Inter, etc.)
- 📧 Contact form with validation
- 🎯 SEO optimized

## 🛠️ Tech Stack

- **Framework:** Next.js 16.0.0 (App Router)
- **React:** 19.2.0
- **TypeScript:** 5.x
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion 12.x
- **Icons:** Lucide React
- **Utilities:** clsx, tailwind-merge

## 📦 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/swaraj404/voice-agent-website.git

# Navigate to project directory
cd voice-agent-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🏗️ Project Structure

```
voice-agent-website/
├── public/               # Static assets (images, fonts)
│   ├── HeroBG.jpg       # Hero section background
│   └── logo.png         # Company logo
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── layout.tsx   # Root layout with fonts
│   │   ├── page.tsx     # Home page
│   │   └── globals.css  # Global styles
│   └── home/            # Home page components
│       ├── Navbar.tsx   # Navigation component
│       ├── Hero.tsx     # Hero section
│       ├── Features.tsx # Features section
│       ├── Demo.tsx     # Demo cards section
│       └── Contact.tsx  # Contact form section
├── next.config.ts       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

## 📄 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🌐 Deployment on Vercel

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import project to Vercel
3. Vercel will auto-detect Next.js and configure settings
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/swaraj404/voice-agent-website)

## 📝 Environment Variables

No environment variables required for basic deployment.

## 🎨 Customization

### Colors
Edit `src/app/globals.css` to modify the color scheme.

### Fonts
Update font imports in `src/app/layout.tsx` to use different Google Fonts.

### Content
- **Hero Section:** Edit `src/home/Hero.tsx`
- **Features:** Edit `src/home/Features.tsx`
- **Demos:** Edit `src/home/Demo.tsx`
- **Contact Info:** Edit `src/home/Contact.tsx`

## 📧 Contact Information

- **Email:** contact@koelai.com
- **Phone:** +91 7721889978
- **Location:** Pune, Maharashtra, India

## 📄 License

This project is proprietary and confidential.

## 👨‍💻 Author

Built with ❤️ by the KOEL AI team

---

**Note:** This is a professional client project. All rights reserved.
