import React, { Component } from "react";
import Child from "./Child";
import Child2 from "./Child2.jsx";
import Child3 from "./Child3.jsx";

export default class index extends Component {
  state = {
    hasError: false,
  };
  static componentDidMount() {
    console.log("componentDidMount");
  }
  static getDerivedStateFromError(error: any) {
    console.log(error);
    return { hasError: true };
  }
  componentDidCatch() {
    console.log("统计错误，记录并反馈");
  }
  render() {
    return (
      <>
        <h3>Main Component</h3>
        {this.state.hasError ? "函数组件有错误" : <Child />}
        <p>
          只能捕获后代组件生命周期产生的错误，不能捕获组件自身、其他组件的合成事件、定时器中产生的错误
        </p>
        <p>
          static getDerivedStateFromError：在出错后有机会修改 state
          触发最后一次错误 fallback 的渲染
          componentDidCatch：用于出错时副作用代码，比如错误上报等
        </p>

        {this.state.hasError ? (
          "函数组件有错误"
        ) : (
          <Child2 />
        )}
        <p></p>
        {this.state.hasError ? (
          "函数组件有错误"
        ) : (
          <Child3 a={{ b: () => {} }} />
        )}
        <p><a href="https://www.zhihu.com/question/426336743/answer/2390432815">React单页面应用如何捕获错误？防止整个页面的崩溃？</a></p>
      </>
    );
  }
}