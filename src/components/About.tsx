import React from 'react';
import { User, Code2, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate full-stack developer with expertise in modern web technologies and a proven track record of delivering high-quality applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <User size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Who I Am</h3>
                <p className="text-gray-600 leading-relaxed">
                  A dedicated MERN stack developer with a passion for creating innovative web applications. 
                  I thrive on solving complex problems and turning ideas into reality through clean, efficient code.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Code2 size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">What I Do</h3>
                <p className="text-gray-600 leading-relaxed">
                  I specialize in full-stack development using MongoDB, Express.js, React, and Node.js. 
                  From database design to responsive frontends, I handle every aspect of web application development.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Briefcase size={24} className="text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">My Experience</h3>
                <p className="text-gray-600 leading-relaxed">
                  Currently gaining valuable industry experience as an intern at TaxTrack startup, 
                  where I contribute to building scalable financial technology solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700 font-medium">Specialization</span>
                <span className="text-blue-600 font-semibold">MERN Stack</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700 font-medium">Projects Completed</span>
                <span className="text-green-600 font-semibold">5+</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700 font-medium">Current Role</span>
                <span className="text-orange-600 font-semibold">Intern at TaxTrack</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700 font-medium">Focus Areas</span>
                <span className="text-purple-600 font-semibold">Full-Stack Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;