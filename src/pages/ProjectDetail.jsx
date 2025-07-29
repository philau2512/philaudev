import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import FooterSection from '../components/FooterSection';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from JSON file
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => {
        // Find the project by ID (index in this case)
        const foundProject = data.projects[parseInt(projectId)];
        if (foundProject) {
          setProject(foundProject);
        } else {
          // Project not found, navigate back to portfolio
          navigate('/');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load project data:', err);
        setLoading(false);
        navigate('/');
      });
  }, [projectId, navigate]);

  // Function to format details with line breaks
  const formatDetails = (text) => {
    if (!text) return '';
    // Split by newlines and map to paragraphs
    return text.split('\n').map((line, index) => (
      <p key={index} className="mb-2">
        {line}
      </p>
    ));
  };

  // Function to go back
  const goBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-orange-400 text-xl">
          <i className="fas fa-circle-notch fa-spin mr-2"></i> Loading...
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <button 
            onClick={goBack}
            className="text-orange-400 hover:text-orange-300 flex items-center"
          >
            <i className="fas fa-arrow-left mr-2"></i> Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* NavBar without active sections */}
      <NavBar activeSection="" scrollToSection={() => {}} />

      <div className="pt-20 pb-16">
        {/* Hero Image Section */}
        <div className="w-full h-80 md:h-96 relative">
          <img 
            src={`/${project.image}`} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
          
          {/* Back button */}
          <button 
            onClick={goBack}
            className="absolute top-4 left-4 bg-gray-800/70 hover:bg-gray-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300"
          >
            <i className="fas fa-arrow-left"></i>
          </button>
        </div>

        {/* Project Details */}
        <div className="max-w-4xl mx-auto px-4 -mt-20 relative z-10">
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-700 shadow-xl">
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white flex-grow">
                {project.title}
              </h1>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
                >
                  <i className="fas fa-external-link-alt"></i>
                  View Project
                </a>
              )}
            </div>

            {project.subtitle && (
              <h2 className="text-xl text-gray-300 mb-6">{project.subtitle}</h2>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {project.size && (
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Project Size</h3>
                  <p className="font-medium text-white">{project.size}</p>
                </div>
              )}
              {project.type && (
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Project Type</h3>
                  <p className="font-medium text-white">{project.type}</p>
                </div>
              )}
              {project.tech && (
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Tech Use:</h3>
                  <p className="font-medium text-white">{project.tech}</p>
                </div>
              )}
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Description</h3>
              <div className="text-gray-300 leading-relaxed">
                <p>{project.description}</p>
              </div>
            </div>

            {project.details && (
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Project Details</h3>
                <div className="text-gray-300 leading-relaxed">
                  {formatDetails(project.details)}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Projects section would go here */}
      </div>

      <FooterSection />
    </div>
  );
};

export default ProjectDetail; 