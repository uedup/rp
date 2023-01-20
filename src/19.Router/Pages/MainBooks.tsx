import React from "react";
import { Outlet } from "react-router-dom";

type MainBooksProps = {};

export const MainBooks: React.FC<MainBooksProps> = () => {
  return (
    <div className="route-page">
      <h2>Main Books</h2>
      <Outlet />
    </div>
  );
};
export default MainBooks;
