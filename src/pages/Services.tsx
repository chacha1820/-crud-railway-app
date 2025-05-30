import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, Settings, FileText, MessageSquare,
  Database, Mail, TrendingUp, Rocket
} from 'lucide-react';
import './Services.css';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  ctaText?: string;
  highlight?: boolean;
}

interface ServiceCategory {
  title: string;
  services: Service[];
}

const ServiceCard: React.FC<Service> = ({ 
  icon, 
  title, 
  description, 
  features, 
  ctaText = 'Get Started',
  highlight = false
}) => (
  <div className={`service-card ${highlight ? 'highlight-card' : ''}`}>
    <div className="service-icon" aria-hidden="true">{icon}</div>
    <div className="service-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="service-features">
        <h4>Key Features:</h4>
        <ul className="features-list">
          {features.map((feature, index) => (
            <li key={index}>
              <span className="feature-icon">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="service-cta">
        <Link to="/contact" className="btn btn-primary" aria-label={`Contact us for ${title}`}>
          {ctaText}
          <span className="btn-arrow">→</span>
        </Link>
      </div>
    </div>
  </div>
);

const Services: React.FC = () => {
  const serviceCategories: ServiceCategory[] = [
    {
      title: 'Technical Services',
      services: [
        {
          icon: <Code size={48} />,
          title: 'Web Development & Design',
          description: 'Custom websites and applications built with modern technologies and responsive design principles for optimal user experience.',
          features: [
            'Custom website development',
            'Responsive UI/UX design',
            'Frontend frameworks (React, Vue, Angular)',
            'Backend systems (Node.js, Python, PHP)',
            'E-commerce solutions'
          ],
          highlight: true
        },
        {
          icon: <Settings size={48} />,
          title: 'Web Maintenance',
          description: 'Comprehensive maintenance plans to keep your digital assets secure and performing at peak efficiency.',
          features: [
            'Security updates & patches',
            'Performance optimization',
            'Bug resolution',
            'Content management',
            'Automated backups'
          ]
        }
      ]
    },
    {
      title: 'Operational Support',
      services: [
        {
          icon: <FileText size={48} />,
          title: 'Administrative Support',
          description: 'Streamline your business operations with professional virtual assistance services.',
          features: [
            'Email & calendar management',
            'Document processing',
            'Data organization',
            'Meeting coordination',
            'Travel arrangements'
          ],
          ctaText: 'Hire Now'
        },
        {
          icon: <MessageSquare size={48} />,
          title: 'Customer Support',
          description: '24/7 customer service solutions to enhance client satisfaction and retention.',
          features: [
            'Multichannel support',
            'Live chat management',
            'Ticket system administration',
            'Knowledge base development',
            'Feedback collection'
          ],
          ctaText: 'Hire Now'
        }
      ]
    },
    {
      title: 'Data & Marketing',
      services: [
        {
          icon: <Database size={48} />,
          title: 'Data Management',
          description: 'Professional data services to ensure accuracy, organization, and accessibility.',
          features: [
            'Data entry & processing',
            'Database administration',
            'Data cleansing',
            'CRM maintenance',
            'Reporting automation'
          ]
        },
        {
          icon: <Mail size={48} />,
          title: 'Email Marketing',
          description: 'Strategic email campaigns to engage your audience and drive conversions.',
          features: [
            'Campaign strategy',
            'List segmentation',
            'Automation workflows',
            'A/B testing',
            'Performance analytics'
          ]
        },
        {
          icon: <TrendingUp size={48} />,
          title: 'Social Media',
          description: 'Comprehensive social media strategies to amplify your brand presence.',
          features: [
            'Content strategy',
            'Community management',
            'Paid advertising',
            'Influencer collaborations',
            'ROI analysis'
          ],
          highlight: true
        }
      ]
    },
    {
      title: 'Business Solutions',
      services: [
        {
          icon: <Rocket size={48} />,
          title: 'Project Management',
          description: 'End-to-end project coordination to deliver initiatives on time and within scope.',
          features: [
            'Agile methodologies',
            'Resource allocation',
            'Risk assessment',
            'Stakeholder reporting',
            'Quality assurance'
          ]
        }
      ]
    }
  ];

  return (
    <section className="services-page">
      <div className="container">
        <header className="services-header">
          <h1 className="services-title">Professional Services Portfolio</h1>
          <p className="services-subtitle">
            Comprehensive solutions designed to elevate your business. From technical implementation 
            to operational excellence, I deliver premium services customized to your requirements.
          </p>
        </header>
        
        <div className="services-categories">
          {serviceCategories.map((category, catIndex) => (
            <section key={catIndex} className="service-category">
              <h2 className="category-title">
                <span className="title-decoration">{category.title}</span>
              </h2>
              <div className={`services-grid`}>
                {category.services.map((service, index) => (
                  <ServiceCard
                    key={index} // Consider using a unique identifier if available
                    {...service}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
        
        <section className="hire-cta">
  <div className="cta-content">
    <h2 className="cta-title">Ready to Transform Your Business?</h2>
    <p className="cta-text">
      Let's collaborate to optimize your operations, enhance your digital presence,
      and drive sustainable growth through professional services.
    </p>
    <Link to="/contact" className="btn btn-cta" aria-label="Schedule a consultation">
      Schedule Consultation
      <span className="btn-arrow">→</span>
    </Link>
  </div>
</section>
      </div>
    </section>
  );
};

export default Services;
