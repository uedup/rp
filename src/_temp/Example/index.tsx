import { ReactNode, useEffect, useState } from "react";

type TProps = {
  message?: string;
  children?: ReactNode;
};

const Example: React.FC<TProps> = ({ message, children }) => {
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
      <h4>Example</h4>
    </div>
  );
};

export default Example;
