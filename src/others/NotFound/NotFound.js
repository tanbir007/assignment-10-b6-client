import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found text-center">
      <h1>404</h1>
      <div className="not-found-description w-100">
        <h3>Sorry, the page is not found</h3>
        <p>
          The link you followed probably broken or the page has been removed
        </p>
        <Link className="not-found-button" to="/home">
          <button className="header-button">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
