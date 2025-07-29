import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProjectsSection = React.forwardRef(({ projects }, ref) => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if viewport is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Get the projects to display
  const visibleProjects = isMobile && !showAll ? projects.slice(0, 2) : projects;

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-orange-400">PROJECTS</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
          {visibleProjects.map((project, index) => (
            <Link
              key={index}
              to={`/project/${index}`}
              className="relative group overflow-hidden rounded-xl bg-gray-900 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* Background Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-3">
                  <h3 className="text-base font-bold text-white mb-1 leading-tight line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-300 text-xs font-medium tracking-wide max-w-[75%] truncate">
                      {project.description}
                    </p>
                    <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-orange-400 transition-colors duration-300">
                      <i className="fas fa-arrow-right text-white text-xs" />
                    </div>
                  </div>
                </div>

                {/* Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400/50 transition-all duration-300 rounded-xl" />
              </div>
            </Link>
          ))}
        </div>

        {/* View More Button (only on mobile when there are more than 2 projects) */}
        {isMobile && projects.length > 2 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-md border border-gray-700 transition-all duration-300"
            >
              {showAll ? (
                <>
                  <span>View Less</span>
                  <i className="fas fa-chevron-up"></i>
                </>
              ) : (
                <>
                  <span>View More</span>
                  <i className="fas fa-chevron-down"></i>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
});

export default ProjectsSection; 