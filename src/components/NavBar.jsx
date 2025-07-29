import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar({ activeSection, scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
  const location = useLocation();

  const languages = [
    {
      code: "en",
      label: "English",
      flag: "/images/flag-us.webp",
    },
    {
      code: "vi",
      label: "Việt Nam",
      flag: "/images/flag-vn.webp",
    },
  ];

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (section) => {
    // If we're on the homepage, scroll to section
    if (location.pathname === '/') {
      scrollToSection(section);
    } else {
      // Otherwise, navigate to home with hash
      window.location.href = `/#${section}`;
    }
    setMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "certification", label: "Certification" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-white italic">Lầu</Link>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-orange-400 ${
                  activeSection === item.id
                    ? "text-orange-400"
                    : "text-gray-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Language selector (desktop & mobile icon area) */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="relative" ref={langRef}>
              <button
                className="flex items-center gap-1 text-gray-300 hover:text-orange-400 transition-colors duration-300 focus:outline-none"
                onClick={() => setLangOpen((prev) => !prev)}
              >
                <span className="text-sm font-medium">Language</span>
                <i className="fas fa-chevron-down text-xs ml-1" />
              </button>
              {/* Dropdown */}
              <div
                className={`absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-800 rounded-md shadow-lg ${
                  langOpen ? "block" : "hidden"
                }`}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangOpen(false);
                    }}
                    className={`flex items-center gap-2 w-full px-3 py-2 text-sm text-left hover:bg-gray-800 transition duration-200 ${
                      language === lang.code
                        ? "text-orange-400"
                        : "text-gray-300"
                    }`}
                  >
                    <img
                      src={lang.flag}
                      alt={lang.code}
                      className="w-6 h-4 object-cover"
                    />
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="text-white focus:outline-none"
              >
                <i
                  className={`fas ${
                    menuOpen ? "fa-times" : "fa-bars"
                  } text-2xl`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden absolute left-0 top-full w-full bg-gray-900 border-t border-gray-800 py-2 z-50">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-6 py-3 text-sm font-medium transition-colors duration-300 hover:bg-gray-800 hover:text-orange-400 ${
                  activeSection === item.id
                    ? "text-orange-400"
                    : "text-gray-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}

        {/* Language selector inside mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-800 pt-2 pb-4 bg-gray-900">
            <div className="px-6 flex gap-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-300 hover:bg-gray-800 ${
                    language === lang.code
                      ? "bg-gray-800 text-orange-400"
                      : "text-gray-300"
                  }`}
                >
                  <img
                    src={lang.flag}
                    alt={lang.code}
                    className="w-6 h-4 object-cover"
                  />
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
