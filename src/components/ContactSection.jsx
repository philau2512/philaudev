import React from 'react';
import { useTranslation } from "react-i18next";

const ContactSection = React.forwardRef(({ contacts = {} }, ref) => {
  const { t } = useTranslation();
  
  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">{t('Contact')}</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          {t('Contact Info Text')}
        </p>

        <div className="flex flex-col items-center space-y-4 mb-8">
          {contacts.gmail && (
            <a
              href={`mailto:${contacts.gmail}`}
              className="text-orange-400 hover:text-orange-300 transition-colors text-lg flex items-center"
            >
              <i className="fas fa-envelope mr-3" />
              {contacts.gmail}
            </a>
          )}
          
          {contacts.phone && (
            <div className="flex space-x-4">
              <a
                href={`tel:${contacts.phone}`}
                className="text-orange-400 hover:text-orange-300 transition-colors text-lg flex items-center"
              >
                <i className="fas fa-phone-alt mr-3" />
                {contacts.phone}
              </a>
            </div>
          )}
        </div>

        <div className="flex justify-center space-x-6">
          {contacts.linkedin && (
            <a 
              href={contacts.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
            >
              <i className="fab fa-linkedin" />
            </a>
          )}
          {contacts.github && (
            <a 
              href={contacts.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-gray-100 transition-colors text-2xl"
            >
              <i className="fab fa-github" />
            </a>
          )}
          {contacts.website && (
            <a 
              href={contacts.website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-orange-400 transition-colors text-2xl"
            >
              <i className="fas fa-globe" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
});

export default ContactSection; 