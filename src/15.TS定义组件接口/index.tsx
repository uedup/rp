import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Button1 = ({ color }: { color?: string }) => {
  return (
    <div>
      <button style={{ color }}>按钮1</button>
    </div>
  );
};
const Button2 = (props: { color?: string }) => {
  return (
    <div>
      <button style={{ color: props.color }}>按钮2</button>
    </div>
  );
};
interface BtnProps {
  color?: string;
  disabled?: boolean;
}
const Button3 = (props: BtnProps) => {
  return (
    <div>
      <button style={{ color: props.color }}>按钮3</button>
    </div>
  );
};
const Button4: React.FC<BtnProps> = ({ color, disabled }) => {
  return (
    <div style={{ border: `1px solid ${color}` }}>
      <button disabled={disabled} style={{ color }}>
        按钮4
      </button>
    </div>
  );
};

//继承标签属性
interface BtnProps5 extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}
const Button5: React.FC<BtnProps> = (props) => {
  return (
    <div style={{ border: `1px solid ${props.color}` }}>
      <button style={{ color: props.color }} {...props}>
        按钮5
      </button>
    </div>
  );
};

//继承标签属性
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: string;
}
const Input: React.FC<InputProps> = (props) => {
  return (
    <div>
      <input type="text" {...props} />
    </div>
  );
};

const IconA = () => {
  return <i>x</i>;
};
const IconB = () => {
  return <i>$</i>;
};
interface TabsProps {
  color?: string;
  IconX?: ReactElement; //可以自己使用<>定义类型
  IconL?: ReactNode; //包括ReactElement,还有string | number | boolean
  children?: ReactNode; //ReactElement 传字符串会报错
}
const Tabs: React.FC<TabsProps> = (props) => {
  const { color, IconX, IconL, children } = props;
  return (
    <div>
      <ul>
        <li style={{ borderBottom: `1px solid ${color}` }}>
          <span>{IconX} 001</span>
        </li>
        <li>
          <span>{IconL} 002</span>
        </li>
      </ul>
      {children}
    </div>
  );
};

interface BoxProps {
  children?: ReactNode;
}
const Box: React.FC<BoxProps> = (props) => {
  const { children } = props;

  return <div>{children}</div>;
};

type AppProps = {};

export const App: React.FC<AppProps> = () => {
  return (
    <Wrapper>
      <Button1 color={"red"}></Button1>
      <Button2 color="blue"></Button2>
      <Button3 color={"yellow"}></Button3>
      <Button4 color={"pink"} disabled={false}></Button4>
      <Button5 color={"#ccc"} disabled></Button5>
      <Input placeholder="xxx" />
      <Tabs color="red" IconX={IconA()} IconL={IconB()}>
        <span>I am span</span>
      </Tabs>
      <Tabs color="blue" IconX={<IconB />} IconL={<IconA />}>
        xxxx
        <Button3 color={"yellow"}></Button3>
      </Tabs>
      <Box children='abc'></Box>
    </Wrapper>
  );
};
export default App;
