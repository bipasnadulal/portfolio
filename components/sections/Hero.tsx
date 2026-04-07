'use client';

import { useEffect, useRef } from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

export default function Hero() {
  const nameRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const isSnappedRef = useRef(false);

  useEffect(() => {

    const applyHeroState = (name: HTMLDivElement) => {
      name.style.transition = 'all 0.5s ease';

      name.style.fontSize = 'clamp(48px, 7vw, 100px)';
      name.style.fontWeight = '300';
      name.style.letterSpacing = '0.25em';

      name.style.top = '50%';
      name.style.left = '50%';
      name.style.transform = 'translate(-50%, -50%)';
    };

    const applyNavState = (name: HTMLDivElement) => {
      name.style.transition = 'all 0.4s ease';

      name.style.fontSize = '14px';
      name.style.fontWeight = '600';
      name.style.letterSpacing = '0.15em';


      name.style.top = '30px';
      name.style.left = '32px';
      name.style.transform = 'translate(0, -50%)';
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;

      const name = nameRef.current;
      const nav = navRef.current;
      if (!name || !nav) return;

      const shouldSnap = scrollY > 5;


      nav.style.opacity = shouldSnap ? '1' : '0';
      nav.style.pointerEvents = shouldSnap ? 'all' : 'none';

      if (shouldSnap !== isSnappedRef.current) {
        isSnappedRef.current = shouldSnap;

        if (shouldSnap) {
          applyNavState(name);
        } else {
          applyHeroState(name);
        }
      }
    };

    const initHeroState = () => {
      const name = nameRef.current;
      if (!name) return;

      name.style.transition = 'none';

      name.style.fontSize = 'clamp(48px, 7vw, 100px)';
      name.style.fontWeight = '300';
      name.style.letterSpacing = '0.25em';

      name.style.top = '50%';
      name.style.left = '50%';
      name.style.transform = 'translate(-50%, -50%)';
    };

    initHeroState();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const socials = [
    { icon: Github, href: 'https://github.com/bipasnadulal', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/bipasna-dulal-0110bd/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:bipasna.dulal75@gmail.com', label: 'Email' },
  ];

  return (
    <>
      <section className="relative w-full h-screen">
        <img
          src="/me.JPG"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute top-0 inset-x-0 h-1/2 flex flex-col items-center justify-center gap-6 px-6 text-center z-10">
          <div className="flex items-center gap-5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-full border border-white/60 hover:bg-white/10 hover:border-white transition-all duration-200"
              >
                <Icon size={18} strokeWidth={1.5} className="text-white" />
              </a>
            ))}
          </div>

          <p className="text-white text-lg leading-relaxed tracking-wide font-medium max-w-[700px]">
            Computer Science undergraduate interested in machine learning,
            deep learning, and user-centered design. I build practical AI-powered
            applications while continuously learning and experimenting.
          </p>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-1/2 flex items-center justify-center px-6 z-10">
          <a
            href="/BipasnaDulal.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-white/60 text-white text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-200"
          >
            Download Resume
          </a>
        </div>
      </section>


      <div
        ref={nameRef}
        className="fixed z-40 pointer-events-none select-none"
        style={{
          color: 'white',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        Bipasna Dulal
      </div>


      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-30 flex items-center justify-end bg-slate-950 border-b border-slate-800 px-8"
        style={{
          height: '60px',
          opacity: 0,
          pointerEvents: 'none',
          transition: 'opacity 0.3s ease',
        }}
      >
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'About', href: '#about' },
            { name: 'Skills', href: '#skills' },
            { name: 'Projects', href: '#projects' },
            { name: 'Experience', href: '#experience' },
            { name: 'Contact', href: '#contact' },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white text-xs tracking-widest uppercase hover:text-white transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}