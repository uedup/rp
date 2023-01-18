import React, { ReactElement, ReactNode } from "react";
import styled, { css, keyframes } from "styled-components";
import GS from "./global.style";
const Wrapper = styled.div`
  font-size: 1.5em;
  text-align: center;
`;

const TabBar = styled.section<{ size?: string; disabled?: boolean }>`
  color: palevioletred;
  height: ${(props) => props.size || "auto"};
  ${(props) =>
    props.disabled &&
    css`
      border: 3px dashed #777;
    `}
  &:hover {
    background-color: yellow;
  }
  span {
    color: red;
  }
  b {
    color: blue;
  }
  & ~ & {
    //同级相邻的
    margin-top: 10px;
  }
  & + & {
    //紧邻的
    background-color: pink;
  }
  &.big {
    font-size: 50px;
  }
`;
const Bigbtn = styled(TabBar)`
  background-color: antiquewhite;
`;

const rotate = keyframes`
  from{
    transform:rotate(0deg)
  }
  to{
    transform: rotate(360deg);
  }
`
const Rotate = styled.div`
  animation: ${rotate} 2s linear infinite;
`;

type AppProps = {};

export const Tabs: React.FC<AppProps> = () => {
  return (
    <Wrapper>
      <GS />
      goto the
      <TabBar>
        <span>hell</span>
        <Rotate>+++</Rotate>
        <b>I have a fun</b>
      </TabBar>
      <span>hell</span>
      <b>I have a fun</b>
      <TabBar>ABC</TabBar>
      <span>x</span>
      <span>x</span>
      <span>x</span>
      <TabBar>ABC</TabBar>
      <TabBar>ABC</TabBar>
      <TabBar className="big">ABC</TabBar>
      <TabBar size="200px">size</TabBar>
      <TabBar disabled>disabled</TabBar>
      <div>
        <Bigbtn disabled>disabled</Bigbtn>
      </div>
    </Wrapper>
  );
};
export default Tabs;
