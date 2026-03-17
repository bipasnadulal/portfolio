import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { motion } from 'framer-motion';


const montserrat = Montserrat({
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: 'Bipasna Dulal',
  description:
    'AI-focused Computer Science undergraduate specializing in deep learning, CNN-based image classification, and AI-powered full-stack systems. Experienced in TensorFlow, Scikit-learn, Next.js, and Django with 99.5% CNN model accuracy in real-world projects.',

  keywords: [
    'Bipasna Dulal',
    'AI Engineer',
    'Machine Learning',
    'Deep Learning',
    'CNN Image Classification',
    'TensorFlow',
    'Scikit-learn',
    'Next.js Developer',
    'Django Developer',
    'Full-Stack AI Developer',
    'Computer Vision',
    'Spam Detection ML',
    'Gradio',
    'FastAPI'
  ],

  authors: [{ name: 'Bipasna Dulal' }],

  openGraph: {
    title: 'Bipasna Dulal | AI & Machine Learning',
    description:
      'Building intelligent AI systems, CNN image classifiers, and ML-powered civic platforms with modern full-stack technologies.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'Hero.png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Bipasna Dulal | AI Engineer',
    description:
      'Deep Learning • Computer Vision • AI-Powered Web Applications',
    images: [
      {
        url: 'Hero.png',
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
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
