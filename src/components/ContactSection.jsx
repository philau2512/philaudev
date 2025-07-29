import React from 'react';

const ContactSection = React.forwardRef((props, ref) => (
  <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">CONTACT</h2>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
      If you have any questions or concerns about me, please do not hesitate to contact me via the information below.
      </p>

      <div className="mb-8">
        <a
          href="mailto:demo@tekblok89.com"
          className="text-orange-400 hover:text-orange-300 transition-colors text-lg"
        >
          <i className="fas fa-envelope mr-3" />
          demo@tekblok89.com
        </a>
      </div>

      <div className="flex justify-center space-x-6">
        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-2xl">
          <i className="fab fa-linkedin" />
        </a>
        <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors text-2xl">
          <i className="fab fa-twitter" />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-100 transition-colors text-2xl">
          <i className="fab fa-github" />
        </a>
        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-2xl">
          <i className="fas fa-globe" />
        </a>
      </div>
    </div>
  </section>
));

export default ContactSection; 