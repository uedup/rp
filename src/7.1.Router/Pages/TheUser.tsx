import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

type TheUserProps = {
  user?: string;
};

export const TheUser: React.FC<TheUserProps> = ({ user }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const gotoUser = (name: string) => {
    // navigate(`/main/users/${name}`, {
    //   replace: true,
    //   state: {
    //     user: name,
    //   },
    // });
    navigate(`/main/users/_`, {
      replace: true,
      state: {
        user: name,
      },
    });
  };
  const { user: stateUserName12 } = (location.state as any) || { user };
  const userName = user || stateUserName12;
  console.log(location.state, stateUserName12);
  return (
    <div>
      <h3>User:{userName}</h3>
      <h4>{location.pathname}</h4>
      <button
        onClick={() => {
          gotoUser("peter");
        }}
      >
        Peter
      </button>
      <button
        onClick={() => {
          gotoUser("paul");
        }}
      >
        Paul
      </button>
      <button onClick={goBack}>go back</button>
    </div>
  );
};
export default TheUser;
