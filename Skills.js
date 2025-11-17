import React from "react";
import "./Skills.css";

const skillsData = [
  {
    skill: "HTML",
    description: "Semantic markup and accessibility",
    level: "Expert",
    progress: 90,
  },
  {
    skill: "CSS",
    description: "Modern layouts and animations",
    level: "Expert",
    progress: 88,
  },
  {
    skill: "JavaScript",
    description: "ES6+ and modern patterns",
    level: "Advanced",
    progress: 80,
  },
  {
    skill: "React",
    description: "Component architecture and hooks",
    level: "Advanced",
    progress: 78,
  },
  {
    skill: "Bootstrap",
    description: "Responsive design framework",
    level: "Proficient",
    progress: 72,
  },
];

export default function Skills() {
  return (
    <section className="skills-section">
      <h1 className="section-title"> Technical Skills</h1>
      <div className="skills-grid">
        {skillsData.map(({ skill, description, level, progress }, idx) => (
          <div key={idx} className="skill-card">
            <div className="skill-header">
              <h3 className="skill-name">{skill}</h3>
              <span className={`skill-level skill-${level.toLowerCase()}`}>
                {level}
              </span>
            </div>
            <p className="skill-description">{description}</p>
            <div className="progress-bar-background">
              <div
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
