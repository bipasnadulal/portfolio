# Bipasna Dulal - AI Engineer Portfolio

A modern, professional portfolio website showcasing AI/ML projects, skills, and experience. Built with Next.js, TypeScript, and cutting-edge web technologies.

## 🎯 Features

- **Modern Design**: Dark theme with neon blue and purple gradients, glassmorphism effects
- **Animated Background**: Interactive particle network visualization
- **Smooth Animations**: Framer Motion powered transitions and scroll animations
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **SEO Optimized**: Complete metadata and semantic HTML
- **Fast Performance**: Next.js App Router with optimized loading

## 🛠 Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   ├── AnimatedBackground.tsx
│   └── ui/                 # Shadcn UI components
├── data/
│   ├── skills.ts           # Skills data
│   ├── projects.ts         # Projects data
│   └── experience.ts       # Experience & education data
└── lib/
    └── utils.ts            # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Update Personal Information

1. **Projects**: Edit `data/projects.ts` to add/modify projects
2. **Skills**: Edit `data/skills.ts` to update skill categories
3. **Experience**: Edit `data/experience.ts` for work experience and education
4. **Contact**: Update social links in `components/sections/Hero.tsx` and `components/Footer.tsx`

### Update Content

- **Hero Section**: `components/sections/Hero.tsx`
- **About Section**: `components/sections/About.tsx`
- **Contact Form**: `components/sections/Contact.tsx`

### Styling

- Global colors and theme: `app/globals.css`
- Tailwind configuration: `tailwind.config.ts`
- Component styles: Individual component files

## 🎨 Design Philosophy

This portfolio is designed to represent an AI Engineer's digital workspace:

- **Professional**: Clean, modern design suitable for international opportunities
- **Technical**: Showcases depth in ML and integration capabilities
- **Futuristic**: Subtle AI-inspired animations and effects
- **Accessible**: Optimized for readability and user experience

## 🌟 Key Sections

### Hero
Large bold heading with CTA buttons and animated background

### About
Professional summary with timeline of education and current role

### Skills
Categorized technical skills with animated cards (AI/ML, Programming, Web, Databases, Tools)

### Projects
Featured AI projects with metrics, tech stacks, and links:
- Bird Feather Classification (99.5% accuracy CNN)
- Janta Ko Aawaj (E-Governance with ML)
- Smart Calculator (Handwritten AI Recognition)
- Anu Kitchen (UI/UX Design)

### Experience
Professional experience at Fusemachines as UI/UX Design Intern

### Contact
Contact form and information for collaboration opportunities

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import repository in Vercel
3. Deploy with one click

### Build for Production

```bash
npm run build
npm start
```

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Bipasna Dulal**
- Location: Kathmandu, Nepal
- Focus: AI, Machine Learning, Deep Learning
- Role: AI Engineer & Full-Stack Developer

---

Built with passion for AI and modern web development.
