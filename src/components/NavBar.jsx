import React from 'react';

function NavBar({ activeSection, scrollToSection }) {
  return (
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
  );
}

export default NavBar; 