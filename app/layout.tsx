import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bipasna Dulal - AI Engineer & Full-Stack Developer',
  description: 'AI-focused Computer Science student building intelligent systems with deep learning, machine learning, and full-stack development. Specializing in CNN-based image classification, NLP, and AI-powered web applications.',
  keywords: ['AI Engineer', 'Machine Learning', 'Deep Learning', 'Full-Stack Developer', 'Computer Vision', 'Neural Networks', 'Next.js', 'Python', 'TensorFlow'],
  authors: [{ name: 'Bipasna Dulal' }],
  openGraph: {
    title: 'Bipasna Dulal - AI Engineer & Full-Stack Developer',
    description: 'Building intelligent systems with AI & Data',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bipasna Dulal - AI Engineer',
    description: 'Building intelligent systems with AI & Data',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
