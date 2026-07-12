import React from 'react';
import { Bot, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];
  const tech = ['LangGraph', 'FastAPI', 'PostgreSQL', 'React.js', 'Node.js'];

  return (
    <footer className="bg-slate-950 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 p-2">
                <Bot size={24} />
              </div>
              <div>
                <span className="block text-2xl font-bold">Chitransh Prasanna</span>
                <span className="text-sm font-semibold text-cyan-300">Backend & AI Systems Developer</span>
              </div>
            </div>
            <p className="max-w-md leading-7 text-slate-400">
              Building reliable backend systems, AI agent workflows, retrieval pipelines, and full-stack products with a strong computer science foundation.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://github.com/Chitransh1011" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-slate-900 p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white" aria-label="GitHub"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/chitransh-prasanna-3b86b6280/" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-slate-900 p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="mailto:chitranshprasanna6666@gmail.com" className="rounded-lg bg-slate-900 p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white" aria-label="Email"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {links.map((link) => (
                <button key={link} onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })} className="block text-slate-400 transition hover:text-white">
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Core Stack</h4>
            <div className="space-y-2 text-slate-400">
              {tech.map((item) => <div key={item}>{item}</div>)}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-800 pt-8 text-slate-400 md:flex-row">
          <span>Made by Chitransh using React and Tailwind CSS.</span>
          <span className="mt-3 md:mt-0">&copy; {currentYear} Chitransh Prasanna. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
