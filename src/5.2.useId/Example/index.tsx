import { useId, useEffect, useState } from "react";

type TProps = {
};

const Example: React.FC<TProps> = () => {
  const rid0 = Math.random() + '_id_'  /* 生成一个随机id  */
  const rid1 = useId() // 生成稳定的 id  :r1:
  return (
    <div>
      <h4>Example</h4>
      <div id={rid0} >{rid0} </div>
      <div id={rid1} >{rid1} </div>
    </div>
  );
};

export default Example;
