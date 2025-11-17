import React from "react";
import Background from "./components/Background/Background";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      
      <div className="home-background">
        <Background />
      </div>

      <div className="home-content">
        <h1>Raja Muzammil</h1>
        <p>Front End Developer</p>
      </div>

    </div>
  );
};

export default Home;
