import React, { useState } from 'react';
import { Smartphone, Code, Database, Star, Rocket, Mail, Phone, Github, Linkedin, Globe } from 'lucide-react';
import './FreelancePortfolio.css';

const ServiceCard = ({ title, icon: Icon, description, features, borderColor }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="service-card"
      style={{ borderColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="service-header">
        <Icon className={`service-icon ${isHovered ? 'service-icon-hovered' : ''}`} />
        <h3 className="service-title">{title}</h3>
      </div>
      <p className="service-description">{description}</p>
      <ul className="service-features">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            <Star className="feature-icon" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ContactItem = ({ icon: Icon, text, link, hoverStyles }) => (
  <a 
    href={link} 
    className="contact-item"
    style={hoverStyles}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon />
    <span>{text}</span>
  </a>
);

const SkillTag = ({ skill }) => (
  <span className="skill-tag">
    {skill}
  </span>
);

const FreelancePortfolio = () => {
  const [activeTab, setActiveTab] = useState('services');
  
  const personalInfo = {
    name: "Laxminarayana",
    title: "Full-Stack React Developer",
    bio: "Passionate full-stack developer with expertise in React, React Native, and Firebase. Specialized in building scalable web and mobile applications with 5+ years of experience.",
    contacts: [
      { icon: Mail, text: "laxminarayanajitta98@gmail.com", link: "mailto:your.email@example.com", hoverStyles: { '--hover-color': '#2563eb' } },
      { icon: Phone, text: "+91 9553319437", link: "tel:+12345678900", hoverStyles: { '--hover-color': '#10b981' } },
      // { icon: Github, text: "github.com/yourusername", link: "https://github.com/yourusername", hoverStyles: { '--hover-color': '#4b5563' } },
      { icon: Linkedin, text: "LinkedIn Profile", link: "https://www.linkedin.com/in/laxminarayana-jitta/", hoverStyles: { '--hover-color': '#2563eb' } },
      // { icon: Globe, text: "yourwebsite.com", link: "https://yourwebsite.com", hoverStyles: { '--hover-color': '#9333ea' } }
    ]
  };

  const services = [
    {
      title: "React Native Development",
      icon: Smartphone,
      description: "Cross-platform mobile applications built with React Native",
      features: [
        "Custom mobile app development",
        "Native module integration",
        "App store deployment",
        "Performance optimization",
        "Cross-platform compatibility"
      ],
      borderColor: "#3b82f6"
    },
    {
      title: "React Web Development",
      icon: Code,
      description: "Modern web applications using React.js",
      features: [
        "Single Page Applications (SPA)",
        "Progressive Web Apps (PWA)",
        "Admin dashboards",
        "E-commerce platforms",
        "Real-time applications"
      ],
      borderColor: "#9333ea"
    },
    {
      title: "Firebase Integration",
      icon: Database,
      description: "Full-stack solutions with Firebase backend",
      features: [
        "Authentication systems",
        "Real-time database setup",
        "Cloud Functions development",
        "Security rules configuration",
        "Firebase hosting setup"
      ],
      borderColor: "#fbbf24"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "React Native", "Redux", "TypeScript", "CSS/SASS", "Tailwind"] },
    { category: "Backend", items: ["Firebase", "Node.js", "Express", "REST APIs", "GraphQL"] },
    { category: "Tools", items: ["Git", "Jest", "Webpack", "Docker", "CI/CD"] }
  ];

  return (
    <div className="container">
      <div className="max-width-wrapper">
        {/* Profile Section */}
        <div className="profile-card">
          <div className="profile-content">
            <div className="profile-image">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQFYfagsduZLtA/profile-displayphoto-shrink_800_800/B56ZNfb9BAGwAg-/0/1732472984861?e=1742428800&v=beta&t=xWLmsSwKAuSG0PYAqVEVs0tAawc4xZrUJDwRBJEuyzU" 
                alt={personalInfo.name}
              />
            </div>
            <div className="profile-info">
              <h1 className="profile-name">{personalInfo.name}</h1>
              <h2 className="profile-title">{personalInfo.title}</h2>
              <p className="profile-bio">{personalInfo.bio}</p>
              <div className="contact-grid">
                {personalInfo.contacts.map((contact, index) => (
                  <ContactItem key={index} {...contact} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="tabs">
          <button
            onClick={() => setActiveTab('services')}
            className={`tab-button ${activeTab === 'services' ? 'active' : ''}`}
          >
            Services
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
          >
            Skills
          </button>
        </div>

        {/* Content Section */}
        {activeTab === 'services' ? (
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        ) : (
          <div className="skills-grid">
            {skills.map((skillSet, index) => (
              <div key={index} className="skill-card">
                <h3 className="skill-category">{skillSet.category}</h3>
                <div className="skills-container">
                  {skillSet.items.map((skill, skillIndex) => (
                    <SkillTag key={skillIndex} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="cta-section">
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <a
            href="https://www.linkedin.com/in/laxminarayana-jitta/"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Rocket className="cta-icon" />
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default FreelancePortfolio;