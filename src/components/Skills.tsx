import React from 'react';
import { Code, Database, Server, Globe, Smartphone, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Globe size={32} className="text-blue-600" />,
      skills: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5 & CSS3', 'Tailwind CSS', 'Responsive Design'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Backend Development', 
      icon: <Server size={32} className="text-green-600" />,
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication', 'Middleware', 'Error Handling'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Database & Storage',
      icon: <Database size={32} className="text-purple-600" />,
      skills: ['MongoDB', 'Mongoose ODM', 'Database Design', 'Aggregation Pipelines', 'Indexing', 'Data Modeling'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Development Tools',
      icon: <Code size={32} className="text-orange-600" />,
      skills: ['Git & GitHub', 'VS Code', 'Postman', 'npm/yarn', 'Webpack', 'Chrome DevTools'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Cloud & Deployment',
      icon: <Cloud size={32} className="text-indigo-600" />,
      skills: ['Vercel', 'Netlify', 'Environment Variables', 'CORS Configuration', 'Production Deployment'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise across the full development stack, from database design to user interface creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg mr-4`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3`}></div>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className={`h-2 bg-gradient-to-r ${category.color} rounded-full opacity-80`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">MERN Stack Proficiency</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { tech: 'MongoDB', level: '90%', color: 'bg-green-500' },
                { tech: 'Express.js', level: '85%', color: 'bg-gray-600' },
                { tech: 'React.js', level: '95%', color: 'bg-blue-500' },
                { tech: 'Node.js', level: '88%', color: 'bg-green-600' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-semibold text-gray-900 mb-2">{item.tech}</div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`${item.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: item.level }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{item.level}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;