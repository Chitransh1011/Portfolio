import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xanlkzyn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">Contact</p>
          <h2 className="mt-3 text-4xl font-bold text-slate-950 lg:text-5xl dark:text-white">Let us build something useful</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            I am open to backend, full-stack, and AI engineering internships or project collaborations where reliability and product thinking matter.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white">Recruiter quick contact</h3>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              The fastest way to reach me is email or LinkedIn. I usually respond with project links, availability, and any extra details you need.
            </p>

            <div className="mt-8 space-y-5">
              <a href="mailto:chitranshprasanna6666@gmail.com" className="flex items-center gap-4 rounded-xl bg-white p-4 transition hover:-translate-y-1 hover:shadow-md dark:bg-slate-950">
                <span className="rounded-lg bg-cyan-100 p-3 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300"><Mail size={22} /></span>
                <div>
                  <h4 className="font-bold text-slate-950 dark:text-white">Email</h4>
                  <p className="break-all text-slate-600 dark:text-slate-400">chitranshprasanna6666@gmail.com</p>
                </div>
              </a>

              <a href="tel:+919565439217" className="flex items-center gap-4 rounded-xl bg-white p-4 transition hover:-translate-y-1 hover:shadow-md dark:bg-slate-950">
                <span className="rounded-lg bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"><Phone size={22} /></span>
                <div>
                  <h4 className="font-bold text-slate-950 dark:text-white">Phone</h4>
                  <p className="text-slate-600 dark:text-slate-400">+91-9565439217</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl bg-white p-4 dark:bg-slate-950">
                <span className="rounded-lg bg-amber-100 p-3 text-amber-700 dark:bg-amber-950 dark:text-amber-300"><MapPin size={22} /></span>
                <div>
                  <h4 className="font-bold text-slate-950 dark:text-white">Location</h4>
                  <p className="text-slate-600 dark:text-slate-400">Remote-friendly, based in India</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <a href="https://github.com/Chitransh1011" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-slate-950 p-3 text-white transition hover:bg-cyan-600 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-400" aria-label="GitHub">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/chitransh-prasanna-3b86b6280/" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-blue-600 p-3 text-white transition hover:bg-blue-700" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white" placeholder="Your full name" required />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white" placeholder="your.email@example.com" required />
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white" placeholder="Internship, freelance work, or collaboration" required />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={6} className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white" placeholder="Tell me what you are hiring or building for." required />
              </div>

              {status === 'success' && <p className="rounded-lg bg-emerald-100 px-4 py-3 font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">Message sent successfully. I will get back to you soon.</p>}
              {status === 'error' && <p className="rounded-lg bg-rose-100 px-4 py-3 font-semibold text-rose-800 dark:bg-rose-950 dark:text-rose-200">Something went wrong. Please email me directly.</p>}

              <button type="submit" disabled={status === 'sending'} className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-cyan-500 dark:hover:bg-cyan-600">
                <Send size={20} />
                <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
