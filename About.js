import React from "react";
import "./About.css";  // import the css file
import myImage from './../pictures/pic.jpg';

const About = () => {
  return (
    <div className="about-container">
  
  <div className="about-text">
    <h1>About Me</h1>
    <p>
      I'm a passionate Front-End Developer specializing in creating modern, responsive, and user-friendly web applications.
    </p>
    <p>
      My journey in web development has equipped me with a strong foundation...
    </p>
    <p>
      Whether it's building a new website from scratch or improving an existing one...
    </p>
  </div>

  <div className="my-image">
    <img src={myImage} alt="Me" />
  </div>

</div>

  );
};

export default About;
