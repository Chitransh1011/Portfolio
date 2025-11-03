import React from 'react';
import { Code, Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-2 rounded-lg">
                <Code size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold">MERN Developer</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Passionate full-stack developer creating innovative web applications with modern technologies. 
              Always eager to learn and take on new challenges.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com/Chitransh1011"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors duration-200"
              >
                <Github size={20} className="text-gray-400 hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/chitransh-prasanna-3b86b6280/"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors duration-200"
              >
                <Linkedin size={20} className="text-gray-400 hover:text-white" />
              </a>
              <a
                href="mailto:chitranshprasanna6666@gmail.com"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors duration-200"
              >
                <Mail size={20} className="text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Technologies</h4>
            <div className="space-y-2 text-gray-400">
              <div>MongoDB</div>
              <div>Express.js</div>
              <div>React.js</div>
              <div>Node.js</div>
              <div>JavaScript</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-1 text-gray-400 mb-4 md:mb-0">
              <span>Made by Chitransh</span>
              
              <span>using React & Tailwind CSS</span>
            </div>
            <div className="text-gray-400">
              <span>&copy; {currentYear} MERN Stack Developer. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;