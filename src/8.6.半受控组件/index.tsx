import React, { ChangeEvent, useState } from "react";
import Rcc from "./封装帮助函数";
import Rcc2 from "./getDerivedStateFromProps";
import Rfc from "./函数组件通过封装过程函数实现";

export default function Demo() {
  const [txt, setTxt] = useState("Hello");
  const handleChange = (newTxt: string) => {
    setTxt(newTxt);
  };
  return (
    <div>
      <h3>封装函数处理props更新state</h3>
      <Rcc search={txt} onChange={handleChange} />
      <h3>使用getDerivedStateFromProps更直观</h3>
      <Rcc2 search={txt} onChange={handleChange} />
      <h3>函数组件通过一些帮助函数实现</h3>
      <Rfc search={txt} onChange={handleChange} />
    </div>
  );
}
