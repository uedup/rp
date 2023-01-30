import React, { useDeferredValue, useEffect, useState } from "react";
import styled from "styled-components";

const Tabs = styled.div`
  span {
    padding: 0 20px;
  }
  .active {
    background-color: #d0e6f8;
  }
`;

/* 模拟数据 */
const mockList1 = new Array(10000)
  .fill("tab1")
  .map((item, index) => item + "--" + index);
const mockList2 = new Array(10000)
  .fill("tab2")
  .map((item, index) => item + "--" + index);
const mockList3 = new Array(10000)
  .fill("tab3")
  .map((item, index) => item + "--" + index);

interface Itab {
  [key: string]: string[];
}
const tab: Itab = {
  tab1: mockList1,
  tab2: mockList2,
  tab3: mockList3,
};

export default function Index() {
  const [active, setActive] = useState("tab1"); //需要立即响应的任务，立即更新任务
  const deferActive = useDeferredValue(active); // 把状态延时更新，类似于过渡任务
  const handleChangeTab = (activeItem: string) => {
    setActive(activeItem); // 立即更新
  };
  const renderData = tab[deferActive]; // 使用滞后状态
  return (
    <div>
      <Tabs>
        {Object.keys(tab).map((item) => (
          <span key={item}
            className={active === item ? "active" : ""}
            onClick={() => handleChangeTab(item)}
          >
            {item}
          </span>
        ))}
      </Tabs>
      <ul className="content">
        {renderData.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
