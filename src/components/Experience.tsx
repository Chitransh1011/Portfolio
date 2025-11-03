import React from 'react';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building real-world experience in the fintech industry while contributing to innovative solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-8 text-white">
              <div className="flex items-center mb-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mr-4">
                  <Briefcase size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Software Development Intern</h3>
                  <p className="text-blue-100 text-lg">TaxTrack Startup</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 text-blue-100">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>Current Position</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  <span>Remote</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp size={16} className="mr-2" />
                  <span>FinTech Industry</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Key Responsibilities & Achievements</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">Developing scalable web applications using MERN stack technologies</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">Contributing to tax calculation and financial management features</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">Collaborating with senior developers on code reviews and best practices</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">Implementing responsive UI components with React and Tailwind CSS</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">Building RESTful APIs with Node.js and Express.js</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">Working with MongoDB for data storage and management</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                <h5 className="text-lg font-bold text-gray-900 mb-4">Technologies & Tools Used</h5>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'Git', 'Agile/Scrum'].map((tech, index) => (
                    <span
                      key={index}
                      className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
                <h5 className="text-lg font-bold text-blue-900 mb-2">Key Learning Outcomes</h5>
                <p className="text-blue-800 leading-relaxed">
                  This internship has provided invaluable hands-on experience in professional software development, 
                  from working in collaborative team environments to understanding the complexities of fintech applications. 
                  I've gained practical knowledge in enterprise-level code organization, deployment processes, and agile development methodologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;