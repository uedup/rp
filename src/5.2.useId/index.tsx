import React, { useId, useEffect, useState } from "react";
import Example from "./Example";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <h3>useId</h3>
      <p>
        useId 也是 React v18 产生的新的 hooks , 它可以在 client 和 server
        生成唯一的 id , 解决了在服务器渲染中，服务端和客户端产生 id
        不一致的问题，更重要的是保障了 React v18 中 streaming renderer
        （流式渲染） 中 id 的稳定性。
      </p>
      <h4>低版本 React ssr 存在的问题：</h4>
      <p>
        比如在一些项目或者是开源库中用 Math.random() 作为 ID
        的时候，可以会有一些随机生成 id 的场景：
      </p>
      <p>useId 生成的ID稳定，刷新页面、重启服务都不变</p>
      <Example />
    </div>
  );
};

export default App;
