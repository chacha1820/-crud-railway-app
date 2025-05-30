import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Charity Mae S. Rosal</h3>
            <p>Full Stack Developer | General Virtual Assistant</p>
            <p>Malaybalay City, Bukidnon, Philippines</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/services">Services</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
          
          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <nav>
              <div className="contact-item">
                <Phone size={16} />
                <span>+63 967 671 5310</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>charitymaerosal18@gmail.com</span>
              </div>
            </nav>
            <div className="social-links">
              <a href="https://github.com/chacha1820" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/charitymaerosal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Charity Mae S. Rosal. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
