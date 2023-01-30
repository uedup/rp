import React from "react";
// import App from "./StateValue";
// import App from "./StateObject";
import App from "./StateReducer";

type AppProps = {};

export const Main: React.FC<AppProps> = () => {
  return (
    <div>
      <App />
    </div>
  );
};
export default Main;
