'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-blue-500/10 bg-slate-950">



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pt-8 border-t border-blue-500/10">
        <p className="text-center text-gray-400 text-sm flex items-center justify-center gap-2">
          &copy; {currentYear} Bipasna Dulal. All rights reserved.
        </p>
      </div>

    </footer>
  );
}
