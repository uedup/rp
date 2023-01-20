import React from "react";
import { Outlet } from "react-router-dom";

type MainUsersProps = {};

export const MainUsers: React.FC<MainUsersProps> = () => {
  return (
    <div className="route-page">
      <h2>Main Users</h2>
      <Outlet />
    </div>
  );
};
export default MainUsers;
