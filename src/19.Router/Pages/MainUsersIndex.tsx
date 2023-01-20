import React from "react";
import { Routes, Route, Link } from "react-router-dom";

type MainUsersIndexProps = {};

export const MainUsersIndex: React.FC<MainUsersIndexProps> = () => {
  return (
    <div>
      <h3>Main Users Index</h3>
      <ol>
        <li>
          <Link to="/main/users/peter">Peter</Link>
        </li>
        <li>
          <Link to="/main/users/paul">Paul</Link>
        </li>
      </ol>
    </div>
  );
};
export default MainUsersIndex;
