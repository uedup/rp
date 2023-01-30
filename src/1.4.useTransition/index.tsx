import React, { useTransition, useEffect, useState } from "react";
import Example from "./Example";
type AppProps = {};

const App: React.FC<AppProps> = (props) => {
  return (
    <div>
      <h3>useTransition</h3>
      <dl>
        <dt>useTransition 执行返回一个数组。数组有两个状态值：</dt>
        <dd>第一个是，当处于过渡状态的标志——isPending。</dd>
        <dd>
          第二个是一个方法，可以理解为上述的
          startTransition。可以把里面的更新任务变成过渡任务。
        </dd>
      </dl>
      <p>
        在 React v18
        中，有一种新概念叫做过渡任务，这种任务是对比立即更新任务而产生的，通常一些影响用户交互直观响应的任务，例如按键，点击，输入等，这些任务需要视图上立即响应，所以可以称之为立即更新的任务，但是有一些更新不是那么急迫，比如页面从一个状态过渡到另外一个状态，这些任务就叫做过渡任务。打个比方如下图当点击
        tab 从 tab1 切换到 tab2 的时候，本质上产生了两个更新任务。
      </p>
      <ul>
        <li>
          {" "}
          <p>第一个就是 hover 状态由 tab1 变成 tab2。</p>{" "}
        </li>
        <li>
          {" "}
          <p>第二个就是内容区域由 tab1 内容变换到 tab2 内容。</p>{" "}
        </li>
      </ul>
      <p>
        这两个任务，用户肯定希望 hover
        状态的响应更迅速，而内容的响应有可能还需要请求数据等操作，所以更新状态并不是立马生效，通常还会有一些
        loading 效果。所以第一个任务作为<strong>立即执行任务</strong>
        ，而第二个任务就可以视为<strong>过渡任务</strong>。
      </p>
      <p className="img-center">
        <img
          alt=""
          src="https://img-blog.csdnimg.cn/img_convert/bc114c4a324955aceec0c7065810778f.jpeg"
        />
      </p>
      <Example />
    </div>
  );
};

export default App;
