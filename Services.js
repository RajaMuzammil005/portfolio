import React from "react";
import "./Services.css"; // We'll create this CSS file next

const servicesData = [
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Building responsive and performant websites using modern frameworks and best practices.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful user interfaces that enhance user experience.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description:
      "Ensuring your website looks perfect on all devices, from mobile to desktop.",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description:
      "Optimizing websites for speed and efficiency to deliver the best user experience.",
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <h2 className="section-title">Services</h2>
      <div className="services-grid">
        {servicesData.map(({ icon, title, description }, idx) => (
          <div key={idx} className="service-card">
            <div className="service-icon">{icon}</div>
            <h3 className="service-title">{title}</h3>
            <p className="service-description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
