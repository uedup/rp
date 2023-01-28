import React, { ReactNode, useState } from "react";

export default function Demo() {
  return (
    <>
      <h3>children props:如果子组件需要父组件数据，无法满足</h3>
      <A>
        <B></B>
      </A>
      <h3>render props:通过组件便签属性传入结构，一般用render函数属性。</h3>
      <AA render={(name: string) => <B name={name} />} />
    </>
  );
}
interface AProps {
  children: ReactNode;
}

const A = (props: AProps) => {
  return (
    <div>
      <h3>组件A</h3>
      {props.children}
    </div>
  );
};

interface BProps {
  name?: string;
}
const B = ({ name }: BProps) => {
  return (
    <div>
      <h4>组件B</h4>
      {name ? name : "没有传props"}
    </div>
  );
};

interface AAProps {
  render: Function;
}
const AA = ({ render }: AAProps) => {
  const [name, setName] = useState("Tom");
  return (
    <div>
      <h3>组件AA</h3>
      {render(name)}
    </div>
  );
};
