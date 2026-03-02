'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-blue-500/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Bipasna Dulal
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI Engineer building intelligent systems with deep learning and
              full-stack development.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-slate-800/50 border border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-blue-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-500/10">
          <p className="text-center text-gray-400 text-sm flex items-center justify-center gap-2">
            <span>&copy; {currentYear} Bipasna Dulal. Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
