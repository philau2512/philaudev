import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsSection = React.forwardRef(({ projects }, ref) => (
  <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        <span className="text-orange-400">PROJECTS</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <Link
            key={index}
            to={`/project/${index}`}
            className="relative group overflow-hidden rounded-xl bg-gray-900 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {/* Background Image */}
            <div className="relative h-80 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1.5 leading-tight">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-gray-300 text-sm font-medium tracking-wide max-w-[80%] truncate">
                    {project.description}
                  </p>
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-orange-400 transition-colors duration-300">
                    <i className="fas fa-arrow-right text-white text-sm" />
                  </div>
                </div>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400/50 transition-all duration-300 rounded-xl" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
));

export default ProjectsSection; 