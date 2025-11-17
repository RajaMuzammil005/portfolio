import React from "react";
import "./Contact.css";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactItems = [
    {
      icon: <Mail size={40} />,
      title: "Email",
      subtitle: "muzammilraja533@gmail.com",
      link: "mailto:muzammilraja533@gmail.com",
    },
    {
      icon: <Linkedin size={40} />,
      title: "LinkedIn",
      subtitle: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/raja-muzammil-547796391/",
    },
    {
      icon: <Github size={40} />,
      title: "GitHub",
      subtitle: "View My Projects",
      link: "https://github.com/RajaMuzammil005",
    },
    {
      icon: <MessageCircle size={40} />,
      title: "WhatsApp",
      subtitle: "Message Me",
      link: "https://wa.me/+923275690141",
    },
  ];

  return (
    <div className="contact-container">
      <h1>
        Let's Work <span>Together</span>
      </h1>
      <p className="contact-subtitle">
        Have a project in mind? I'd love to hear about it. Reach out anytime.
      </p>

      <div className="contact-grid">
        {contactItems.map((item, index) => (
          <div key={index} className="contact-card">
            <div className="contact-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
            <a href={item.link} className="contact-btn">
              Connect
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
