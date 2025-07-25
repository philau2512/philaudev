import React from 'react';

const EducationSection = React.forwardRef(({ education }, ref) => (
  <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16">
        <span className="text-green-400">EDUCATION</span>
      </h2>

      <div className="space-y-6 md:space-y-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="group flex items-start md:items-center gap-4 md:gap-6 bg-gray-800/40 p-4 md:p-6 rounded-lg border border-gray-700 transition-all duration-300 transform hover:scale-[1.02] hover:border-green-400 hover:bg-gray-800/60 hover:shadow-lg"
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-gray-600 transition-all duration-300 transform group-hover:scale-110 group-hover:border-green-400"
              >
                <img
                  src={`/${edu.logo}`}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Details stacked */}
            <div className="flex-1 space-y-1 text-left">
              <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
                {edu.school}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-snug">
                {edu.degree}
              </p>
              <p className="text-gray-400 text-sm md:text-base flex items-center leading-snug">
                <i className="far fa-calendar-alt mr-2" />
                {edu.period}
              </p>
              {edu.gpa && (
                <p className="text-gray-500 text-xs md:text-sm leading-snug">GPA: {edu.gpa}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
));

export default EducationSection; 