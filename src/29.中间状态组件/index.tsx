import React, { ChangeEvent, useState } from "react";
import Rcc from "./封装帮助函数";
import Rcc2 from "./getDerivedStateFromProps";
import Rfc from "./函数组件通过ref";

export default function Demo() {
  const [txt, setTxt] = useState("Hello");
  const handleChange = (newTxt: string) => {
    setTxt(newTxt);
  };

  return (
    <div>
      <h3>封装函数处理props更新state</h3>
      <Rcc value={txt} onChange={handleChange} />
      <h3>使用getDerivedStateFromProps更直观</h3>
      <Rcc2 value={txt} onChange={handleChange} />
      <Rfc value={txt} onChange={handleChange} />
    </div>
  );
}
