import React from "react";
import { Routes, Route, Link } from "react-router-dom";

type AboutProps = {};

export const About: React.FC<AboutProps> = () => {
  return (
    <div className="route-page">
      <h1>About Page</h1>
    </div>
  );
};
export default About;
