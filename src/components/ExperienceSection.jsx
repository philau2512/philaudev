import React from 'react';

const ExperienceSection = React.forwardRef(({ workExperience }, ref) => (
  <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        <span className="text-blue-400">EXPERIENCE</span>
      </h2>

      <div className="space-y-12">
        {workExperience.map((job, index) => (
          <div key={index} className="flex gap-6 group">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-xl border-2 border-gray-600 group-hover:border-orange-400 transition-colors duration-300 overflow-hidden">
                {job.logo.startsWith('http') || job.logo.startsWith('/') ? (
                  <img src={job.logo} alt={job.company} className="w-full h-full object-cover object-center" />
                ) : (
                  <i className={`${job.logo} ${job.logoColor}`}></i>
                )}
              </div>
              {index < workExperience.length - 1 && (
                <div className="w-0.5 h-20 bg-gray-700 mt-4" />
              )}
            </div>
            <div className="flex-1 pb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">
                  {job.position} at {job.company}
                </h3>
                <div className="text-gray-400 text-sm">
                  <i className="far fa-calendar-alt mr-2" />
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
));

export default ExperienceSection; 