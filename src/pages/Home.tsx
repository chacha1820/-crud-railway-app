import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, MessageSquare, PenTool } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content fade-in">
            <h1>Charity Mae S. Rosal</h1>
            <h2>Full Stack Developer | General Virtual Assistant</h2>
            <p>Transforming ideas into innovative digital solutions with creativity and code.</p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Hire Me</Link>
              <Link to="/projects" className="btn btn-outline">Explore My Work</Link>
            </div>
          </div>

          <div className="hero-image scale-in delay-1">
            <img 
              src="/Profile.png" 
              alt="Charity Mae Rosal" 
            />
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      <section className="about section">
        <div className="container">
          <h2 className="section-title fade-in">About Me</h2>
          <div className="about-content">
            <div className="about-image scale-in"></div>
            <div className="about-text slide-in">
              <h3>Results-Driven Professional with Versatile Expertise</h3>
              <p>
                I bring a unique combination of technical expertise and strong communication skills to provide top-notch virtual support, ensuring all tasks are handled with precision, professionalism, and a proactive mindset.
              </p>
              <p>
                As a Full-Stack Developer, I am proficient in both front-end and back-end technologies. On the front end, I work with HTML, CSS, JavaScript, and modern frameworks. On the back end, I have experience with PHP, SQL, and other server-side technologies. I also work with WordPress and Wix.
              </p>
              <p>
                In addition to development, I have a background in customer service and client management using CRM tools like HubSpot and Zoho. I'm also adept with Trello, Asana, and social media management tools.
              </p>
              <p>
              I am passionate about delivering exceptional support, maintaining positive client relationships, and continuously improving operational processes. I am always eager to learn and stay updated with the latest technologies to help businesses grow and succeed.
              </p>
              <div className="about-cta">
                <Link to="/resume" className="btn btn-primary">View My Resume</Link>
              </div>
              <div className="social-links fade-in delay-2">
                <a href="https://www.linkedin.com/in/charitymaerosal/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">LinkedIn</a>
                <a href="https://github.com/chacha1820" target="_blank" rel="noopener noreferrer" className="social-btn github">GitHub</a>
                <a href="https://drive.google.com/file/d/10xZW6p82aiJBNMtc4WSd6oRGejaKLng9/view" target="_blank" rel="noopener noreferrer" className="social-btn resume">Resume</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vision-mission section">
        <div className="container">
          <h2 className="section-title fade-in">Vision & Mission</h2>
          <div className="vision-mission-content slide-in">
            <div className="vision box">
              <h3>Vision</h3>
              <p>
                To be a leading provider of creative, efficient, and user-centered web and virtual assistant solutions that empower individuals and businesses worldwide.
              </p>
            </div>
            <div className="mission box">
              <h3>Mission</h3>
              <p>
                To deliver high-quality web development and support services through innovation, integrity, and a deep understanding of client needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview section">
        <div className="container">
          <h2 className="section-title fade-in">What I Offer?</h2>
          <div className="services-cards">
            <div className="service-card card scale-in delay-1">
              <div className="service-icon">
                <Code size={40} />
              </div>
              <h3>Web Development</h3>
              <p>Custom websites crafted with modern technologies, from design to deployment.</p>
              <Link to="/services" className="service-link">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
            <div className="service-card card scale-in delay-2">
              <div className="service-icon">
                <MessageSquare size={40} />
              </div>
              <h3>Customer Support</h3>
              <p>Professional chat, email, and customer service designed to elevate client satisfaction.</p>
              <Link to="/services" className="service-link">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
            <div className="service-card card scale-in delay-3">
              <div className="service-icon">
                <PenTool size={40} />
              </div>
              <h3>Administrative Support</h3>
              <p>Efficient email management, scheduling, data entry, and organizational assistance.</p>
              <Link to="/services" className="service-link">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="services-cta fade-in">
            <Link to="/services" className="btn btn-outline">See All Services</Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Ready to Collaborate?</h2>
            <p>Let's bring your vision to life through innovative solutions and dedicated teamwork.</p>
            <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
