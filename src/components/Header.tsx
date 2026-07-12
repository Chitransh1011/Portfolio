import React, { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download, Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/1nb0c0RvJo2bh5v_FCb6Qw7FH7WeHLVbu/view?usp=drive_link', '_blank', 'noopener,noreferrer');
  };

  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-md dark:bg-slate-950/90 dark:shadow-slate-950/40' : 'bg-white/70 backdrop-blur-sm dark:bg-slate-950/70'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => scrollToSection('hero')} className="text-left">
            <div className="text-lg font-bold text-slate-950 dark:text-white">Chitransh Prasanna</div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">Backend & AI Systems</div>
          </button>

          <nav className="hidden items-center space-x-7 md:flex">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-semibold text-slate-700 transition-colors duration-200 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden items-center space-x-3 md:flex">
            <a href="https://github.com/Chitransh1011" target="_blank" rel="noopener noreferrer" className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/chitransh-prasanna-3b86b6280/" target="_blank" rel="noopener noreferrer" className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:chitranshprasanna6666@gmail.com" className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white" aria-label="Email">
              <Mail size={20} />
            </a>
            <button onClick={() => setIsDark((value) => !value)} className="rounded-lg border border-slate-200 p-2 text-slate-700 transition-colors hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-400" aria-label="Toggle dark theme">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={handleResumeDownload} className="flex items-center space-x-2 rounded-lg bg-cyan-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600">
              <Download size={16} />
              <span>Resume</span>
            </button>
          </div>

          <button className="rounded-lg p-2 text-slate-800 dark:text-white md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-slate-200 bg-white py-3 dark:border-slate-800 dark:bg-slate-950 md:hidden">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full rounded-lg px-3 py-2 text-left font-medium text-slate-700 hover:bg-slate-100 hover:text-cyan-600 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-cyan-400"
                >
                  {item}
                </button>
              ))}
              <div className="flex items-center gap-3 px-3 pt-3">
                <button onClick={() => setIsDark((value) => !value)} className="rounded-lg border border-slate-200 px-3 py-2 text-slate-700 dark:border-slate-700 dark:text-slate-200">
                  {isDark ? 'Light mode' : 'Dark mode'}
                </button>
                <button onClick={handleResumeDownload} className="rounded-lg bg-cyan-600 px-3 py-2 font-semibold text-white">
                  Resume
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
