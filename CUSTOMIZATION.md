# Customization Guide

## Quick Customization Checklist

### 1. Update Projects (`data/projects.ts`)

Replace the placeholder `#` links with your actual project URLs:

```typescript
{
  github: 'https://github.com/yourusername/bird-feather-classification',
  demo: 'https://your-demo-url.com',
}
```

Add or remove projects by editing the `projectsData` array.

### 2. Update Skills (`data/skills.ts`)

Add or remove skills in each category:

```typescript
'AI/ML': [
  'TensorFlow',
  'PyTorch',  // Add new skill
  // ... more skills
],
```

### 3. Update Experience (`data/experience.ts`)

Add new work experience:

```typescript
export const experienceData: Experience[] = [
  {
    id: 'your-company',
    role: 'Your Role',
    company: 'Company Name',
    location: 'City, Country',
    period: 'Start - End',
    description: 'Brief description',
    highlights: [
      'Achievement 1',
      'Achievement 2',
    ],
    current: false,
  },
  // ... more experiences
];
```

### 4. Update Contact Information

**Email Address** (`components/sections/Contact.tsx` and `components/sections/Hero.tsx`):
```typescript
href="mailto:your.email@example.com"
```

**Social Links** (`components/sections/Hero.tsx` and `components/Footer.tsx`):
```typescript
{ icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
{ icon: Linkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
```

### 5. Update Personal Information

**Name and Bio** (`components/sections/About.tsx`):
```typescript
<p className="text-gray-400 leading-relaxed">
  Your updated bio here...
</p>
```

**Hero Section** (`components/sections/Hero.tsx`):
- Update the main heading
- Update the subheading
- Update the tagline

### 6. Add Resume Download

Replace the placeholder button with actual resume link:

**In Navbar** (`components/Navbar.tsx`):
```typescript
<Button
  variant="outline"
  size="sm"
  onClick={() => window.open('/resume.pdf', '_blank')}
>
  <Download className="w-4 h-4 mr-2" />
  Resume
</Button>
```

Then add your `resume.pdf` file to the `public/` folder.

### 7. Update Metadata

**SEO and Social Sharing** (`app/layout.tsx`):
```typescript
export const metadata: Metadata = {
  title: 'Your Name - Your Title',
  description: 'Your description',
  // ... update other fields
};
```

### 8. Colors and Theme

**Primary Colors** are defined in `tailwind.config.ts` and used throughout:
- Blue accent: `blue-400`, `blue-500`
- Purple accent: `purple-400`, `purple-500`
- Background: `slate-950`, `slate-900`

To change colors, do a global search and replace:
- `blue-400` → `your-color-400`
- `purple-500` → `your-color-500`

### 9. Add Blog Section (Optional)

The blog section is mentioned but not implemented. To add it:

1. Create `components/sections/Blog.tsx`
2. Add blog posts in `data/blog.ts`
3. Import and add to `app/page.tsx`

### 10. Add Google Analytics (Optional)

1. Create Google Analytics account
2. Add tracking ID to environment variables
3. Create `components/Analytics.tsx`
4. Add to `app/layout.tsx`

## File Reference

**Data Files** (Easy to update):
- `data/skills.ts` - Your technical skills
- `data/projects.ts` - Your project portfolio
- `data/experience.ts` - Work history and education

**Component Files** (UI Structure):
- `components/sections/Hero.tsx` - Landing section
- `components/sections/About.tsx` - About section
- `components/sections/Skills.tsx` - Skills display
- `components/sections/Projects.tsx` - Project showcase
- `components/sections/Experience.tsx` - Work experience
- `components/sections/Contact.tsx` - Contact form
- `components/Navbar.tsx` - Navigation bar
- `components/Footer.tsx` - Footer

**Configuration Files**:
- `app/layout.tsx` - SEO metadata
- `app/globals.css` - Global styles
- `tailwind.config.ts` - Theme configuration

## Tips

1. **Test locally** after each change: `npm run dev`
2. **Build before deploy**: `npm run build`
3. **Use consistent formatting**: Run `npm run lint` (if configured)
4. **Commit often**: Make small, incremental changes
5. **Keep backups**: Use git branches for experiments

## Common Tasks

### Add a new project:
1. Add entry to `data/projects.ts`
2. Upload project image to `public/projects/`
3. Update image path in project data

### Change color scheme:
1. Update Tailwind config
2. Search and replace color classes
3. Test all sections

### Add new section:
1. Create component in `components/sections/`
2. Import in `app/page.tsx`
3. Add navigation link in `components/Navbar.tsx`

Need help? Check the README.md for more details!
