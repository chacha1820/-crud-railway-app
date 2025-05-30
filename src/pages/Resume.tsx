import {
  Briefcase,
  GraduationCap,
  Award,
  Code,
  User,
  Mail,
  Phone,
  MapPin,
  Download
} from 'lucide-react';
import './Resume.css';

const Resume = () => {
  const contactDetails = [
    { icon: <Phone size={16} />, text: '+63 967 671 5310' },
    { icon: <Mail size={16} />, text: 'charitymaerosal18@gmail.com' },
    { icon: <MapPin size={16} />, text: 'Malaybalay City, Bukidnon, Philippines' }
  ];

  const skillCategories = [
    { category: 'Front-End Development', skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Vue.js'] },
    { category: 'Back-End Development', skills: ['Node.js', 'PHP', 'Python', 'Laravel', 'Visual Basic'] },
    { category: 'Database Management', skills: ['SQL Server', 'PostgreSQL', 'MySQL'] },
    { category: 'Design Tools', skills: ['Canva', 'Figma', 'Adobe XD', 'Sketch', 'Capcut'] },
    { category: 'Development Tools', skills: ['Git', 'GitHub', 'VS Code', 'Sublime Text', 'Postman', 'Docker', 'Railway'] },
    { category: 'Productivity Tools', skills: ['Hubspot', 'Trello', 'Slack', 'Zoom', 'Google Workspace', 'Microsoft Office'] }
  ];

  const workExperience = [
    {
      title: 'Virtual Assistant (Customer Service/Chat Support)',
      period: 'June 2024 - April 2025',
      company: '',
      details: [
        'Provided exceptional customer support through the company\'s messaging system.',
        'Delivered prompt and professional responses via email.',
        'Generated and reconciled invoices, ensuring accurate billing.',
        'Provided real-time support via live chat.',
        'Managed customer records and supported departmental operations.'
      ]
    },
    {
      title: 'Web Developer',
      period: 'November 2023 - May 2024',
      company: 'Shakespeers Digital Solutions',
      details: [
        'Designed and developed websites using Wix and WordPress.',
        'Applied SEO best practices and ensured website performance.',
        'Collaborated with clients and team for user-focused solutions.'
      ]
    },
    {
      title: 'Intern (MIS Department)',
      period: 'January 2023 - May 2023',
      company: 'Malaybalay City, Bukidnon, Philippines',
      details: [
        'Performed accurate data entry for certificates and reports.',
        'Coordinated document distribution and program events.',
        'Developed backend features using Visual Basic and PHP.'
      ]
    }
  ];

  return (
    <div className="resume-page">
      <div className="container">
        {/* Header */}
        <header className="resume-header">
          <h1>Charity Mae Rosal</h1>
          <p>
            Full Stack Developer • Virtual Assistant • Creative Problem Solver
          </p>
          <p>
            I specialize in building responsive websites, supporting clients with high-quality service, and bringing reliable solutions to digital problems. With a blend of technical skills and administrative experience, I help businesses grow smoothly online.
          </p>
        </header>

        <div className="resume-content">
          {/* Sidebar */}
          <aside className="resume-sidebar">
            {/* Contact Info */}
            <section className="resume-section">
              <h3 className="resume-section-title">
                <User  size={20} /> Contact Information
              </h3>
              <div className="contact-info">
                {contactDetails.map((item, idx) => (
                  <div className="contact-item" key={idx}>
                    {item.icon}<span>{item.text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Skills */}
            <section className="resume-section">
              <h3 className="resume-section-title">
                <Code size={20} /> Technical Skills
              </h3>
              <div className="skills-grid">
                {skillCategories.map(({ category, skills }) => (
                  <div className="skill-card" key={category}>
                    <h4>{category}</h4>
                    <div className="skill-tags">
                      {skills.map(skill => (
                        <span className="skill-tag" key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </aside>

          {/* Main Section */}
          <main className="resume-main">
            {/* Work Experience */}
            <section className="resume-section">
              <h3 className="resume-section-title">
                <Briefcase size={20} /> Work Experience
              </h3>
              <div className="timeline">
                {workExperience.map(({ title, period, company, details }) => (
                  <div className="timeline-item" key={title}>
                    <div className="timeline-header">
                      <div className="timeline-title">{title}</div>
                      <div className="timeline-period">{period}</div>
                    </div>
                    {company && <div className="timeline-subtitle">{company}</div>}
                    <div className="timeline-content">
                      <ul>
                        {details.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="resume-section">
              <h3 className="resume-section-title">
                <GraduationCap size={20} /> Education
              </h3>
              <div className="education-item">
                <div className="timeline-header">
                  <div className="timeline-title">Bachelor of Science in Information Technology</div>
                  <div className="timeline-period">2020 - 2024</div>
                </div>
                <div className="timeline-subtitle">Central Mindanao University (CMU)</div>
                <p>Specialized in Web Development</p>
              </div>
            </section>

            {/* Certifications */}
            <section className="resume-section">
              <h3 className="resume-section-title">
                <Award size={20} /> Certifications
              </h3>
              <div className="certificate-item">
                <h4>Google I/O Seminar</h4>
                <p>Advanced web development technologies and best practices</p>
              </div>
            </section>
          </main>
        </div>

        {/* Download Resume Button */}
        <div className="download-resume">
          <a
            href="/Charity%20Mae-Rosal_Resume.pdf" // Ensure this path is correct
            download="Charity_Mae-Rosal_Resume.pdf"
            className="download-btn"
          >
            <Download size={16} /> Download Resume PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
