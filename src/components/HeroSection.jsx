import React from 'react';
import { useState } from 'react';

const HeroSection = React.forwardRef(({ profile = {}, skills = [], scrollToContact }, ref) => {
  const [expandedDescription, setExpandedDescription] = useState(false);
  
  // Function to truncate text to a certain length
  const truncateText = (text, maxLength) => {
    if (!text || text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };
  
  // Get the description text
  const descriptionText = profile.description || 'Passionate developer eager to create amazing applications.';
  const truncatedDescription = truncateText(descriptionText, 150);
  const shouldTruncate = descriptionText.length > 150;

  // Function to determine if an icon is a URL or a FontAwesome icon
  const isIconUrl = (icon) => {
    return icon && (icon.startsWith('http://') || icon.startsWith('https://'));
  };

  return (
  <section
    ref={ref}
    className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
  >
    <div className="max-w-4xl mx-auto text-center">
      {/* Avatar */}
      <div className="mb-8">
        <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-8 relative">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 p-1">
            {profile.avatar ? (
              <img
                src={`/${profile.avatar}`}
                alt={profile.name || 'Avatar'}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl">
                <i className="fas fa-user-tie text-white" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        {profile.name || 'Your Name'}
        <br />
        <span
          className="text-orange-400 text-2xl md:text-3xl lg:text-5xl whitespace-nowrap"
        >
          {profile.role || 'Your Role'}
        </span>
      </h1>

      {/* Description */}
      <div className="mb-8 max-w-2xl mx-auto text-center">
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          {expandedDescription || !shouldTruncate ? descriptionText : truncatedDescription}
        </p>
        
        {shouldTruncate && (
          <button 
            onClick={() => setExpandedDescription(!expandedDescription)}
            className="mt-3 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors duration-300 inline-flex items-center mx-auto"
          >
            {expandedDescription ? (
              <>
                Show Less <i className="fas fa-chevron-up ml-1.5 text-xs"></i>
              </>
            ) : (
              <>
                Read More <i className="fas fa-chevron-down ml-1.5 text-xs"></i>
              </>
            )}
          </button>
        )}
      </div>

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
                {isIconUrl(skill.icon) ? (
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-8 h-8 object-contain" 
                  />
                ) : (
                  <i className={`${skill.icon} ${skill.color}`} />
                )}
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
)});

export default HeroSection; 