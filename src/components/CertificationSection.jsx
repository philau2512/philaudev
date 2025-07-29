import React from 'react';

const CertificationSection = React.forwardRef(({ certificates }, ref) => (
  <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 whitespace-nowrap">
        <span className="text-orange-400">CERTIFICATION</span>
      </h2>

      <div className={`grid gap-6 ${certificates.length > 2 
        ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
        : certificates.length === 2 
          ? 'grid-cols-1 md:grid-cols-2' 
          : 'grid-cols-1 max-w-sm mx-auto'}`}>
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="group flex flex-col items-center bg-gray-800/40 p-4 md:p-6 rounded-lg border border-gray-700 transition-all duration-300 transform hover:scale-[1.02] hover:border-orange-400 hover:bg-gray-800/60 hover:shadow-lg"
          >
            {/* Certificate Image */}
            <div className="w-full mb-4">
              <div className="rounded-lg overflow-hidden border-2 border-gray-600 transition-all duration-300 group-hover:border-orange-400">
                <img
                  src={`/${cert.image}`}
                  alt={cert.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="w-full text-center space-y-3">
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {cert.name}
              </h3>
              
              {cert.file && (
                <a
                  href={`/${cert.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-sm text-orange-400 hover:text-orange-300 transition-colors duration-300"
                >
                  <i className="far fa-file-pdf mr-2" />
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
));

export default CertificationSection; 