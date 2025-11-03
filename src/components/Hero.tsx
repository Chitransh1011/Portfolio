import React from 'react';
import { ChevronDown, Code, Database, Server } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
            <Code size={48} className="text-white" />
          </div>
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
          MERN Stack
          <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> Developer</span>
        </h1>

        <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Crafting full-stack web applications with MongoDB, Express.js, React, and Node.js. 
          Passionate about creating scalable, user-centric solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <Database size={20} className="text-green-600" />
            <span className="text-gray-700 font-medium">MongoDB</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <Server size={20} className="text-gray-800" />
            <span className="text-gray-700 font-medium">Express.js</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <Code size={20} className="text-blue-600" />
            <span className="text-gray-700 font-medium">React.js</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <Server size={20} className="text-green-700" />
            <span className="text-gray-700 font-medium">Node.js</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
          >
            View My Work
          </button>
          <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
            Get In Touch
          </button>
        </div>
      </div>

      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;