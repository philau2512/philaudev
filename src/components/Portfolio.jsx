import React, { useState, useRef, useEffect } from 'react';

function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const refs = {
      home: homeRef,
      projects: projectsRef,
      experience: experienceRef,
      contact: contactRef
    };
    
    refs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  // Data states loaded from external JSON
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);

  // Fetch data.json once component mounts
  useEffect(() => {
    fetch('/data/data.json')
      .then((res) => res.json())
      .then((data) => {
        setSkills(data.skills || []);
        setProjects(data.projects || []);
        setWorkExperience(data.workExperience || []);
      })
      .catch((err) => console.error('Failed to load portfolio data:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white italic">Lầu</div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-orange-400 ${
                    activeSection === item.toLowerCase() ? 'text-orange-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="md:hidden">
              <button className="text-white">
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={homeRef} className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl">
                  <i className="fas fa-user-tie text-white"></i>
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            I do code and<br />
            make content <span className="text-orange-400">about it!</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            I am a seasoned full-stack software engineer with over 6 years of professional experience, specializing in backend development. My expertise lies in crafting robust and scalable SaaS-based architectures on the Amazon AWS platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <i className="fas fa-envelope mr-2"></i>
              Get in Touch
            </button>
            <button className="border border-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:border-orange-400 hover:text-orange-400 transition-all duration-300">
              <i className="fas fa-download mr-2"></i>
              Download CV
            </button>
          </div>
          
          {/* Skills Section */}
          <div className="mt-16">
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-8">EXPERIENCE WITH</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="group relative flex flex-col items-center">
                  {/* Icon box */}
                  <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center text-2xl
                  hover:bg-gray-700 transition-all duration-300 transform hover:scale-110
                  border border-gray-700 hover:border-orange-400">
                    <i className={`${skill.icon} ${skill.color}`}></i>
                  </div>

                  {/* MOBILE: tên + level hiển thị cố định */}
                  <div className="mt-2 text-center text-xs">
                    <div className="text-white font-medium">{skill.name}</div>
                    <div className="text-gray-400">{skill.level}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-orange-400">PROJECTS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl bg-gray-900 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
                {/* Background Image */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    {/* Main Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                      {project.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-orange-400 text-sm font-medium uppercase tracking-wider">
                          {project.description}
                        </p>
                      </div>
                      
                      {/* Arrow Icon */}
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-orange-400 transition-colors duration-300">
                        <i className="fas fa-arrow-right text-white text-sm"></i>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400/50 transition-all duration-300 rounded-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-blue-400">EXPERIENCE</span>
          </h2>
          
          <div className="space-y-12">
            {workExperience.map((job, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-xl border-2 border-gray-600 group-hover:border-orange-400 transition-colors duration-300">
                    <i className={`${job.logo} ${job.logoColor}`}></i>
                  </div>
                  {index < workExperience.length - 1 && (
                    <div className="w-0.5 h-20 bg-gray-700 mt-4"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.position} at {job.company}</h3>
                    </div>
                    <div className="text-gray-400 text-sm">
                      <i className="far fa-calendar-alt mr-2"></i>
                      {job.period}
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Contact</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Seasoned full-stack software engineer with over 8 years of hands-on experience in designing and implementing robust, scalable, and innovative web solutions. Adept at leveraging cutting-edge technologies and best practices.
          </p>
          
          <div className="mb-8">
            <a href="mailto:demo@tekblok89.com" className="text-orange-400 hover:text-orange-300 transition-colors text-lg">
              <i className="fas fa-envelope mr-3"></i>
              demo@tekblok89.com
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-2xl">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-100 transition-colors text-2xl">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-2xl">
              <i className="fas fa-globe"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p>
            <i className="far fa-copyright mr-2"></i>
            2024 Developer Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;