import React from 'react';
import { ArrowRight, Github, Linkedin, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-slate-50 pt-24 text-slate-950 dark:bg-slate-950 dark:text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.15),transparent_30%)]" />
      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center px-4 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-semibold text-cyan-700 shadow-sm dark:border-cyan-900/70 dark:bg-slate-900 dark:text-cyan-300">
            <Sparkles size={16} />
            Backend systems, AI agents, and scalable product engineering
          </div>

          <h1 className="text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-7xl dark:text-white">
            Hi, I am Chitransh Prasanna.
            <span className="block bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">I build production-ready AI backends.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300">
            Computer Science student at IIIT Ranchi with backend experience at Optimagine, focused on LangGraph orchestration, RAG pipelines, PostgreSQL-backed systems, and reliable product engineering backed by 40% latency reduction and 35% throughput gains.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button onClick={scrollToProjects} className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600">
              View Projects
              <ArrowRight size={18} />
            </button>
            <button onClick={scrollToContact} className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-7 py-4 text-base font-semibold text-slate-800 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-100 dark:hover:border-cyan-400 dark:hover:text-cyan-400">
              Contact Me
            </button>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a href="https://github.com/Chitransh1011" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400">
              <Github size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/chitransh-prasanna-3b86b6280/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;