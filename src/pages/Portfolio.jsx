import React, { useState, useRef, useEffect } from 'react';
import NavBar from '../components/NavBar.jsx';
import HeroSection from '../components/HeroSection.jsx';
import ProjectsSection from '../components/ProjectsSection.jsx';
import ExperienceSection from '../components/ExperienceSection.jsx';
import ContactSection from '../components/ContactSection.jsx';
import FooterSection from '../components/FooterSection.jsx';
import EducationSection from '../components/EducationSection.jsx';

function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  // Section refs
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const educationRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const refs = {
      home: homeRef,
      projects: projectsRef,
      experience: experienceRef,
      contact: contactRef,
    };
    refs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  // Data states loaded from external JSON
  const [profile, setProfile] = useState({});
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then((res) => res.json())
      .then((data) => {
        setProfile(data.profile || {});
        setSkills(data.skills || []);
        setProjects(data.projects || []);
        setWorkExperience(data.workExperience || []);
        setEducation(data.education || []);
      })
      .catch((err) => console.error('Failed to load portfolio data:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar activeSection={activeSection} scrollToSection={scrollToSection} />

      <HeroSection
        ref={homeRef}
        profile={profile}
        skills={skills}
        scrollToContact={() => scrollToSection('contact')}
      />

      <EducationSection ref={educationRef} education={education} />

      <ProjectsSection ref={projectsRef} projects={projects} />

      <ExperienceSection ref={experienceRef} workExperience={workExperience} />

      <ContactSection ref={contactRef} />

      <FooterSection />
    </div>
  );
}

export default Portfolio;