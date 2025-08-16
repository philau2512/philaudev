import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import ExperienceSection from "../components/ExperienceSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import FooterSection from "../components/FooterSection.jsx";
import EducationSection from "../components/EducationSection.jsx";
import CertificationSection from "../components/CertificationSection.jsx";

function Portfolio() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  // Section refs
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const educationRef = useRef(null);
  const certificationRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToSection = (sectionId) => {
    const refs = {
      home: homeRef,
      projects: projectsRef,
      experience: experienceRef,
      contact: contactRef,
      education: educationRef,
      certification: certificationRef,
    };
    refs[sectionId]?.current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  // Data states loaded from external JSON
  const [profile, setProfile] = useState({});
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [contacts, setContacts] = useState({});

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data.profile || {});
        setSkills(data.skills || []);
        setProjects(data.projects || []);
        setWorkExperience(data.workExperience || []);
        setEducation(data.education || []);
        setCertificates(data.certificates || []);
        setContacts(data.contacts && data.contacts[0] || {});
      })
      .catch((err) => console.error("Failed to load portfolio data:", err));
  }, []);

  // Handle hash navigation when page loads
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the # character
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 500); // Short delay to ensure the page is loaded
    }
  }, [location]);

  // Show scroll-to-top button when near bottom
  useEffect(() => {
    const handleScroll = () => {
      const { innerHeight, scrollY } = window;
      const { scrollHeight } = document.documentElement;
      // Show when within 300px of bottom
      if (innerHeight + scrollY >= scrollHeight - 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Observe sections to update active nav on scroll
  useEffect(() => {
    const sections = [
      { id: "home", ref: homeRef },
      { id: "education", ref: educationRef },
      { id: "projects", ref: projectsRef },
      { id: "experience", ref: experienceRef },
      { id: "certification", ref: certificationRef },
      { id: "contact", ref: contactRef },
    ];

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = sections.find((s) => s.ref.current === entry.target);
          if (section) {
            setActiveSection(section.id);
            
            // Update URL hash without triggering a new navigation
            const url = new URL(window.location);
            url.hash = section.id;
            window.history.replaceState({}, "", url);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar activeSection={activeSection} scrollToSection={scrollToSection} />

      <HeroSection
        ref={homeRef}
        profile={profile}
        skills={skills}
        scrollToContact={() => scrollToSection("contact")}
      />

      <EducationSection ref={educationRef} education={education} />

      <ProjectsSection ref={projectsRef} projects={projects} />

      <ExperienceSection ref={experienceRef} workExperience={workExperience} />

      <CertificationSection ref={certificationRef} certificates={certificates} />

      <ContactSection ref={contactRef} contacts={contacts} />

      <FooterSection />

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-20 right-5 md:bottom-24 md:right-8 w-10 h-10 flex items-center justify-center bg-gray-800 border border-gray-700 text-orange-400 hover:bg-gray-700 transition-colors duration-300 rounded-full shadow-lg z-40"
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up" />
        </button>
      )}
    </div>
  );
}

export default Portfolio;
