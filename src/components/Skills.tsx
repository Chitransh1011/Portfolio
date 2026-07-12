import React from 'react';
import { Bot, Code2, Database, GitBranch, Server, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI & Agentic Systems',
      icon: Bot,
      skills: ['LangGraph', 'LangChain', 'RAG Pipelines', 'AI Agents', 'Workflow Orchestration', 'Tool Calling'],
      color: 'from-cyan-500 to-teal-500'
    },
    {
      title: 'Backend Engineering',
      icon: Server,
      skills: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'Microservices', 'JWT Authentication'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Databases & Retrieval',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'ChromaDB', 'Sequelize ORM', 'Indexing'],
      color: 'from-violet-500 to-indigo-500'
    },
    {
      title: 'Frontend Development',
      icon: Code2,
      skills: ['React.js', 'Redux', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Responsive UI'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Infrastructure & Systems',
      icon: GitBranch,
      skills: ['Docker Compose', 'RabbitMQ', 'Event-Driven Architecture', 'Parallel Processing', 'Vercel', 'Render'],
      color: 'from-orange-500 to-amber-500'
    },
    {
      title: 'Tools & Fundamentals',
      icon: Wrench,
      skills: ['Git', 'Postman', 'DSA', 'OOP', 'DBMS', 'Computer Networks'],
      color: 'from-slate-600 to-slate-800'
    }
  ];

  const metrics = [
    { label: 'Throughput improvement', value: '35%' },
    { label: 'Latency reduction', value: '40%' },
    { label: 'Docs indexed in RAG', value: '200+' },
    { label: 'LeetCode problems', value: '450+' }
  ];

  return (
    <section id="skills" className="bg-slate-50 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">Skills</p>
          <h2 className="mt-3 text-4xl font-bold text-slate-950 lg:text-5xl dark:text-white">Tech stack aligned with real backend work</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            My strongest work sits at the intersection of backend APIs, AI orchestration, data retrieval, and production-minded system design.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950">
              <div className="mb-6 flex items-center gap-4">
                <div className={`rounded-xl bg-gradient-to-r ${category.color} p-3 text-white`}>
                  <category.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-xl bg-slate-50 p-5 text-center dark:bg-slate-900">
              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">{metric.value}</div>
              <div className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
