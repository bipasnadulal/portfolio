# Deployment Guide

## Quick Deploy to Vercel (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: AI Engineer Portfolio"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

That's it! Your portfolio will be live in minutes.

## Environment Variables (Optional)

If you want to add a contact form backend or analytics, add these in Vercel:

- `NEXT_PUBLIC_SITE_URL` - Your production URL
- Add any API keys for contact forms, analytics, etc.

## Custom Domain

1. In Vercel dashboard, go to Settings > Domains
2. Add your custom domain
3. Update DNS records as instructed

## Performance Optimization

Already included:
- ✅ Next.js 13 App Router for optimal performance
- ✅ Automatic code splitting
- ✅ Image optimization ready
- ✅ Static page generation
- ✅ Minified CSS and JS

## Monitoring

Consider adding:
- Vercel Analytics
- Google Analytics
- Sentry for error tracking

## Updates

To update your portfolio:
```bash
git add .
git commit -m "Update portfolio content"
git push
```

Vercel will automatically redeploy.
