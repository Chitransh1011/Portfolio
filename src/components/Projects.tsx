import React from 'react';
import { Bot, ExternalLink, Github, MessageCircle, Plane, Users } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tech: string[];
  icon: React.ReactNode;
  type: string;
  gradient: string;
  features: string[];
  github: string;
  demo?: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Multi-Agent Software Engineering Assistant',
      description: 'An AI engineering assistant that coordinates planner, research, coding, and review agents through LangGraph shared-state workflows. Built for context-aware software tasks with retrieval, code generation, and quality validation.',
      tech: ['FastAPI', 'LangGraph', 'PostgreSQL', 'ChromaDB', 'RAG', 'Docker'],
      icon: <Bot size={32} className="text-white" />,
      type: 'AI Backend',
      gradient: 'from-cyan-600 to-teal-500',
      features: ['Planner, research, coding, and review agents', 'RAG over 200+ pages of technical docs', 'PostgreSQL-backed state persistence', '40% lower average response latency'],
      github: 'https://github.com/Chitransh1011/Multi_Agent_Software_Engineering_Assistant'
    },
    {
      title: 'DevTinder',
      description: 'A full-stack social platform for developers with real-time messaging, profile discovery, subscription payments, secure auth, and production deployments across Vercel and Render.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Socket.IO', 'JWT', 'Render'],
      icon: <Users size={32} className="text-white" />,
      type: 'Full Stack',
      gradient: 'from-pink-500 to-rose-500',
      features: ['Real-time chat with Socket.IO', 'JWT auth and role-based access', 'Pagination and optimized queries', 'CI-based production deployment'],
      github: 'https://github.com/Chitransh1011/DEV_TINDER',
      demo: 'https://dev-tinder-ui-kappa.vercel.app/'
    },
    {
      title: 'Flights Service Backend',
      description: 'A microservices-based flight management backend with API gateway patterns, role-based access, RabbitMQ-powered reminders, and optimized relational queries for large flight datasets.',
      tech: ['Node.js', 'Express.js', 'Sequelize', 'MySQL', 'RabbitMQ', 'JWT'],
      icon: <Plane size={32} className="text-white" />,
      type: 'Backend',
      gradient: 'from-indigo-500 to-violet-500',
      features: ['Microservices architecture', 'Flight, airport, and city CRUD APIs', 'RabbitMQ email reminders', '40% faster indexed query responses'],
      github: 'https://github.com/Chitransh1011/FlightsAndSearchService'
    },
    {
      title: 'Twitter Backend',
      description: 'A secure backend API for a Twitter-like social product with user authentication, tweet operations, follow relationships, validation, and defensive error handling.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bcrypt'],
      icon: <MessageCircle size={32} className="text-white" />,
      type: 'Backend API',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['User authentication', 'Tweet CRUD operations', 'Follow system', 'API security and validation'],
      github: 'https://github.com/Chitransh1011/TWITTER_DEV'

    }
  ];

  return (
    <section id="projects" className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">Projects</p>
          <h2 className="mt-3 text-4xl font-bold text-slate-950 lg:text-5xl dark:text-white">Selected work that proves backend depth</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Projects are ordered to show the strongest recruiter signal first: AI orchestration, scalable APIs, real-time systems, and secure backend design.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
              <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white`}>
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="rounded-xl bg-white/20 p-3 backdrop-blur-sm">{project.icon}</div>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-bold backdrop-blur-sm">{project.type}</span>
                </div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>

              <div className="p-6">
                <p className="leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>

                <div className="mt-6">
                  <h4 className="text-sm font-bold uppercase tracking-wide text-slate-950 dark:text-white">Impact and features</h4>
                  <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                        <span className={`mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r ${project.gradient}`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">{tech}</span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 rounded-lg bg-gradient-to-r ${project.gradient} px-5 py-3 font-semibold text-white transition hover:scale-105`}>
                    <Github size={16} />
                    View Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-400">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
