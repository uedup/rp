import React, { useEffect, useState } from "react";
import useResize from "./useResize";

type AppProps = {};

export const Main: React.FC<AppProps> = () => {
  const { size, type } = useResize();
  // const [size, setSize] = useState({
  //   width: document.documentElement.clientWidth,
  //   height: document.documentElement.clientHeight,
  // });
  // const handleResize = () => {
  //   setSize({
  //     width: document.documentElement.clientWidth,
  //     height: document.documentElement.clientHeight,
  //   });
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div>
      <h3>Auto Scale</h3>
      <div style={{
        color:type==='desktop'?'red':type==='pad'?'blue':'pink'
      }}>width*height:{size.width}x{size.height}</div>
    </div>
  );
};
export default Main;
