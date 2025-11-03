import React from 'react';
import { ExternalLink, Github, Code, Users, PlayCircle, ShoppingCart, MessageCircle,Send } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'DevTinder',
      description: 'A full-stack dating application for developers with real-time matching, profile management, and messaging features. Built with comprehensive authentication and user interaction systems.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io', 'JWT'],
      icon: <Users size={32} className="text-pink-600" />,
      type: 'Full Stack',
      gradient: 'from-pink-500 to-rose-500',
      features: ['Real-time messaging', 'Profile matching algorithm', 'User authentication', 'Responsive design'],
      github: "https://github.com/Chitransh1011/DEV_TINDER_UI",
      demo: "https://dev-tinder-ui-kappa.vercel.app/"
    },
    {
      title: 'YouTube UI Clone',
      description: 'A pixel-perfect recreation of YouTube\'s user interface with responsive design, video thumbnails, and interactive components. Demonstrates advanced frontend skills and attention to detail.',
      tech: ['React.js', 'CSS3', 'JavaScript', 'Responsive Design'],
      icon: <PlayCircle size={32} className="text-red-600" />,
      type: 'Frontend',
      gradient: 'from-red-500 to-red-600',
      features: ['Responsive layout', 'Video thumbnails', 'Navigation sidebar', 'Search functionality'],
      github: "https://github.com/Chitransh1011/MY_YOUTUBE"
    },
    {
      title: 'Food Platform',
      description: 'Modern food delivery platform frontend with intuitive user experience, restaurant listings, menu browsing, and cart functionality. Focus on clean design and smooth interactions.',
      tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'Local Storage'],
      icon: <ShoppingCart size={32} className="text-orange-600" />,
      type: 'Frontend',
      gradient: 'from-orange-500 to-yellow-500',
      features: ['Restaurant listings', 'Menu management', 'Shopping cart', 'Order tracking'],
      github: "https://github.com/Chitransh1011/Food_platform_UI"
    },
    {
      title: 'Twitter Backend',
      description: 'Robust backend API for a Twitter-like social media platform with user management, tweet operations, and follow/unfollow functionality. Includes comprehensive error handling and security.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bcrypt'],
      icon: <MessageCircle size={32} className="text-blue-600" />,
      type: 'Backend',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['User authentication', 'Tweet CRUD operations', 'Follow system', 'API security'],
      github: "https://github.com/Chitransh1011/TWITTER_DEV"
    },
    {
      title: 'Flights Service Backend',
      description:
        'Microservices-based flight management backend system handling 100K+ flight records with high scalability and performance. Includes airport, airplane, city, and flight CRUD operations with secure JWT authentication and inter-service communication via RabbitMQ.',
      tech: ['Node.js', 'Express.js', 'Sequelize ORM', 'MySQL', 'JWT', 'RabbitMQ', 'Gmail SMTP'],
      icon: <Send size={32} className="text-indigo-600" />,
      type: 'Backend',
      gradient: 'from-indigo-500 to-purple-500',
      features: [
        'Microservices architecture',
        'Flight, airport, and city CRUD operations',
        'JWT-based authentication & role-based access control',
        'API Gateway for optimized inter-service communication',
        'Automated email reminders via RabbitMQ and Gmail SMTP',
        'Optimized DB queries and indexing for 40% faster responses'
      ],
      github: "https://github.com/Chitransh1011/FlightsAndSearchService"
    }

  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my development projects demonstrating proficiency across the full technology stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              <div className={`bg-gradient-to-r ${project.gradient} p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    {project.icon}
                  </div>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              </div>

              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mr-2`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 bg-gradient-to-r ${project.gradient} text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-200 font-medium`}
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg transition-colors font-medium"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105">
            View All Projects
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;