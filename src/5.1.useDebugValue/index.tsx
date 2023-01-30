import React, { ReactNode, useEffect, useState } from "react";
import useFriendStatus from "./useFriendStatus";

type AppProps = {
  message?: string;
  children?: ReactNode;
};

const App: React.FC<AppProps> = ({ message, children }) => {
  const [isOnline, setIsOnline, changeStatus] = useFriendStatus();
  // console.log(isOnline);
  // console.log(setIsOnline);
  // console.log(changeStatus);
  const switchStatus = () => {
    // setIsOnline(!isOnline);
    // changeStatus(!isOnline)
  };
  return (
    <div>
      <h3>useDebugValue</h3>
      <p>我们不推荐你向每个自定义 Hook 添加 debug 值。当它作为共享库的一部分时才最有价值。在某些情况下，格式化值的显示可能是一项开销很大的操作。除非需要检查 Hook，否则没有必要这么做。因此，useDebugValue 接受一个格式化函数作为可选的第二个参数。该函数只有在 Hook 被检查时才会被调用。它接受 debug 值作为参数，并且会返回一个格式化的显示值。</p>
      <p>useDebugValue 可用于在 React 开发者工具中显示自定义 hook 的标签。这个hooks目的就是检查自定义hooks。</p>
      <button onClick={switchStatus}>切换登录状态</button>
      <div>{isOnline ? "用户在线" : "用户离线"}</div>
    </div>
  );
};

export default App;
