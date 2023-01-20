import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";

type AppProps = {};

export const Main: React.FC<AppProps> = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};
export default Main;
