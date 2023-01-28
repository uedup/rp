import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";

type AppProps = {
  message: string;
  children: ReactNode;
};

export const App: React.FC<AppProps> = ({ message, children }) => {
  const [count, setCount] = useState();
  useEffect(() => {
    console.log("componentDidMount");
    return () => {
      console.log("Demo-componentWillUnmount");
    };
  });
  useEffect(() => {
    console.log("shouldComponentUpdate");
  }, [count]);
  return (
    <div>
      {message}
      {children}
    </div>
  );
};
