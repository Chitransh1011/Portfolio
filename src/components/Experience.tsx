import React from 'react';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const achievements = [
    'Architected scalable backend workflows with LangGraph to coordinate multiple autonomous services.',
    'Designed an orchestration layer for Research, Retrieval, Scenario, Stress, and Writer services, improving throughput by 35%.',
    'Implemented concurrent ingestion and retrieval pipelines for large PDF datasets with context-aware querying.',
    'Integrated PostgreSQL for transactional storage, metadata indexing, and optimized read-heavy query paths.',
    'Reduced end-to-end processing latency by 40% using asynchronous execution and parallel task scheduling.',
    'Refactored workflows into reusable graph components, improving maintainability and extensibility by 30%.'
  ];

  const tools = ['Python', 'FastAPI', 'LangGraph', 'LangChain', 'RAG', 'PostgreSQL', 'Async Workflows', 'Backend Architecture'];

  return (
    <section id="experience" className="bg-slate-50 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">Experience</p>
          <h2 className="mt-3 text-4xl font-bold text-slate-950 lg:text-5xl dark:text-white">Professional backend experience</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Real startup engineering work focused on AI workflow orchestration, retrieval systems, database-backed APIs, and performance improvement.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-950">
          <div className="bg-gradient-to-r from-cyan-600 to-teal-500 p-8 text-white">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white/20 p-3 backdrop-blur-sm">
                  <Briefcase size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Backend Developer Intern</h3>
                  <p className="text-lg text-cyan-50">OptimagineAI - US-based Startup</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-sm font-semibold text-cyan-50">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2"><Calendar size={16} /> Nov 2025 - Mar 2026</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2"><MapPin size={16} /> Remote</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2"><TrendingUp size={16} /> AI Systems</span>
              </div>
            </div>
          </div>

          <div className="p-8">
            <h4 className="text-xl font-bold text-slate-950 dark:text-white">Key outcomes</h4>
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
              {achievements.map((achievement) => (
                <div key={achievement} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-900">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-500" />
                  <p className="leading-7 text-slate-700 dark:text-slate-300">{achievement}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-slate-50 p-6 dark:bg-slate-900">
              <h5 className="text-lg font-bold text-slate-950 dark:text-white">Tools and systems used</h5>
              <div className="mt-4 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool} className="rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:bg-slate-950 dark:text-slate-300">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
