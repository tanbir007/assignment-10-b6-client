import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-bg"></div>
      <div className="banner-details text-center">
        <h2 >Course Hero</h2>
        <p>
          Start your career with our Tech Courses
        </p>
        <Link to='/courses'>
          <button className="banner-btn">Let's Start</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
