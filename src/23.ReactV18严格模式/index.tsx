import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 200px;
  height: 200px;
  line-height: 100px;
`;
const DemoWrapper = styled.div``;
type DemoProps = {
  color?: string;
};
const Demo: React.FC<DemoProps> = ({ color }) => {
  const [num, setNum] = useState(1);

  useEffect(() => {// 使用setInterval，useEffect第二个参数为[],需要清理计数器
    console.log("Demo mounted");
    const ref = setInterval(() => {
      setNum((num) => num + 1);
      // setNum(num+1);
    }, 500);
    return () => {
      // if (!!ref) clearInterval(ref); //不清理时，在严格模式因为render两次，形成两个计数器
      console.log('Demo unmounted')
    };
  }, []);
  // useEffect(() => {// 使用setTimeOut，useEffect第二个参数为空，不需要清理计数器
  //   console.log("Demo mounted");
  //   setTimeout(() => { 
  //     setNum(num + 1);
  //   }, 500);
  // });
  console.log('Demo render')
  return (
    <Wrapper style={{ backgroundColor: color }}>
      <h1 style={{ textAlign: "center" }}>
        <div>
          Hello <br /> {num}
        </div>
      </h1>
    </Wrapper>
  );
};

type AppProps = {};

const COLOR: string[] = ["#f2acac", "#b9ea79", "#86d6ee", "#ecaaeb", ""];

export const Main: React.FC<AppProps> = () => {
  const [counter, setCounter] = useState(0);
  const color = COLOR[counter % COLOR.length];
  console.log("App render");
  return (
    <>
      {!!color && <Demo color={color} />}
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        更换颜色
      </button>
    </>
  );
};

export default Main;
