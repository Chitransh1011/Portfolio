import React from 'react';
import { Award, Briefcase, GraduationCap, Target } from 'lucide-react';

const About = () => {
  const facts = [
    { label: 'Education', value: 'B.Tech CSE, IIIT Ranchi' },
    { label: 'Graduation', value: '2027' },
    { label: 'CGPA', value: '8.79/10' },
    { label: 'Focus', value: 'Backend + AI Systems' }
  ];

  const strengths = [
    {
      icon: Briefcase,
      title: 'Backend Engineering With Business Impact',
      text: 'At Optimagine, I worked on graph-based backend workflows that coordinate autonomous services and improved system throughput by 35%.'
    },
    {
      icon: Target,
      title: 'AI Systems That Ship',
      text: 'I build LangGraph and RAG workflows with retrieval, scenario analysis, async execution, and writer services designed for real product use.'
    },
    {
      icon: Award,
      title: 'Strong Problem-Solving Base',
      text: 'Solved 450+ LeetCode problems, secured 1st place in INTERLAY Hackathon, and qualified for Smart India Hackathon rounds.'
    }
  ];

  return (
    <section id="about" className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">About</p>
          <h2 className="mt-3 text-4xl font-bold text-slate-950 lg:text-5xl dark:text-white">A backend-first developer who understands products</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            I am a Computer Science undergraduate at IIIT Ranchi who enjoys building the hard parts behind modern applications: orchestration layers, APIs, database models, retrieval pipelines, authentication, and deployment flows.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-cyan-100 p-3 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300">
                <GraduationCap size={26} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">Quick Profile</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Recruiter-friendly snapshot</p>
              </div>
            </div>

            <div className="space-y-3">
              {facts.map((fact) => (
                <div key={fact.label} className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm dark:bg-slate-950">
                  <span className="font-medium text-slate-600 dark:text-slate-400">{fact.label}</span>
                  <span className="text-right font-bold text-slate-950 dark:text-white">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {strengths.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-slate-950/50">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
