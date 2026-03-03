<<<<<<< HEAD

# Personal Portfolio Website

This repository contains the source code for my personal portfolio website.
The portfolio was built using modern web technologies and refined over time to improve structure, design, and usability. It showcases my projects, skills, experience, and contact information in a clean and minimal format.

## 🎯 Features

- Responsive, dark-themed design
- Minimal UI with subtle animations
- Project, skills, and experience sections
- Working contact form
- Complete metadata and semantic HTML
- Easy to update and extend

## 🛠 Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- EmailJS (contact form)

## 📁 Project Structure

```
├── app/
    |__ icon.svg            #favicon
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

# Built with passion for AI and modern web development.

# portfolio

> > > > > > > 794edb5a0cdd31116845bb947696a682b8def6a4
