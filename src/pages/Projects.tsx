import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

// Project type definition
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  category: string;
}

const Projects = () => {
  // Sample project data
  const projectsData: Project[] = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A fully functional e-commerce platform with product catalog, shopping cart, and secure checkout.",
      image: "/ecommerce.jpg",
      tags: ["React", "Node.js","PHP", "Python", "Express","API", "Ruby on Rails", "MongoDB","Wordpress","Wix"],
      liveUrl: "Coming Soon",
      repoUrl: "Coming Soon",
      category: "fullstack"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website for a photographer showcasing their work and services.",
      image: "/Portfolio.jpg",
      tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Bootstrap","Type Script", "Git & GitHub"],
      liveUrl: "http://localhost:5173",
      repoUrl: "https://github.com",
      category: "fullstack"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A task management application with features like task creation, assignment, and status tracking.",
      image: "/Task Management App.jpg",
      tags: ["Vue.js", "Firebase", "Vuetify","Vue.js", "API", "Node.js","Git & GitHub"],
      liveUrl: "Coming Soon",
      repoUrl: "Coming Soon",
      category: "fullstack"
    },
    {
      id: 4,
      title: "Inventory Management System",
      description: "A comprehensive inventory management system for small businesses to track products and sales.",
      image: "/Inventory Management System.jpg",
      tags: ["PHP", "MySQL", "Bootstrap", "jQuery","PostgreSQL"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com",
      category: "backend"
    },
    {
      id: 5,
      title: "Wordpress Website",
      description: "A responsive and professional website built using WordPress and Elementor, designed to showcase services, engage visitors, and drive inquiries.",
      image: "/Wordpress.jpg",
      tags: ["Elementor", "JavaScript", "HTML", "PHP", "CSS" , "REST API", "MySQL"],
      liveUrl: "Coming Soon",
      repoUrl: "Coming Soon",
      category: "frontend"
    },
    {
      id: 6,
      title: "Wix Website",
      description: "A CRM system to help businesses track and manage customer interactions and data.",
      image: "/Wix.jpg",
      tags: ["HTML", "Javascript (Velo)", "APIs"],
      liveUrl: "Coming Soon",
      repoUrl: "Coming Soon",
      category: "frontend"
    },
  ];

  // State for filtering projects
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <div className="projects-page">
      <div className="container">
        <div className="projects-header">
          <h1>My Projects</h1>
          <p>
            Browse through some of my recent work. Each project represents my skills and expertise
            in different areas of web development and design.
          </p>
        </div>
        
        <div className="project-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveFilter('frontend')}
          >
            Front-End
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveFilter('backend')}
          >
            Back-End
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setActiveFilter('fullstack')}
          >
            Full Stack
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                      <Github size={16} /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="load-more">
          <button className="btn btn-outline">Load More Projects</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;