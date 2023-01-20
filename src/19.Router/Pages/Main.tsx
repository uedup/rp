import React from "react";
import { Outlet, Link } from "react-router-dom";

type MainProps = {};

export const Main: React.FC<MainProps> = () => {
  return (
    <div className="route-page">
      <h1>Main Page</h1>
      <nav>
        <Link to="/main/users">Users</Link>
        <Link to="/main/books">Books</Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default Main;
