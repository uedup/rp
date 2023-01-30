import { ReactNode, useEffect, useState } from "react";
import Example from "./Example";

type AppProps = {
  message?: string;
  children?: ReactNode;
};

const App: React.FC<AppProps> = ({ message, children }) => {
  const [count, setCount] = useState();
  useEffect(() => {
    console.log("render");
  });
  useEffect(() => {
    console.log("componentDidMount");
    return () => {
      console.log("Demo-componentWillUnmount");
    };
  }, []);
  useEffect(() => {
    console.log("shouldComponentUpdate", count);
  }, [count]);
  return (
    <div>
      <h3>temp</h3>
      {message}
      {children}
      <Example />
    </div>
  );
};

export default App;
