import React from 'react';

const HeroSection = React.forwardRef(({ skills, scrollToContact }, ref) => (
  <section
    ref={ref}
    className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
  >
    <div className="max-w-4xl mx-auto text-center">
      {/* Avatar */}
      <div className="mb-8">
        <div className="w-32 h-32 mx-auto mb-8 relative">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl">
              <i className="fas fa-user-tie text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        I do code and
        <br />
        make content <span className="text-orange-400">about it!</span>
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
        I am a seasoned full-stack software engineer with over 6 years of professional experience, specializing in backend development. My expertise lies in crafting robust and scalable SaaS-based architectures on the Amazon AWS platform.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          onClick={scrollToContact}
          className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
        >
          <i className="fas fa-envelope mr-2" />
          Get in Touch
        </button>
        <button className="border border-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:border-orange-400 hover:text-orange-400 transition-all duration-300">
          <i className="fas fa-download mr-2" />
          Download CV
        </button>
      </div>

      {/* Skills */}
      <div className="mt-16">
        <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-8">EXPERIENCE WITH</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="group relative flex flex-col items-center">
              {/* Icon */}
              <div
                className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center text-2xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-orange-400"
              >
                <i className={`${skill.icon} ${skill.color}`} />
              </div>
              {/* Label */}
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
));

export default HeroSection; 