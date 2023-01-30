import React from "react";
import { Routes, Route, Link } from "react-router-dom";

type HomeProps = {};

export const Home: React.FC<HomeProps> = () => {
  return (
    <div className="route-page">
      <h1>Home Page</h1>
    </div>
  );
};
export default Home;
