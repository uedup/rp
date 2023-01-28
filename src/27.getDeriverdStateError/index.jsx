import React, { Component } from "react";
import Child from "./Child";

export default class index extends Component {
  state = {
    hasError:false
  }
  static componentDidMount(){
    console.log('componentDidMount')
  }
  static getDerivedStateFromError(error){
    console.log(error)
    return {hasError:true}
  }
  componentDidCatch(){
    console.log('统计错误，记录并反馈')
  }
  render() {
    return (
      <>
        <h3>Main Component</h3>
        {this.state.hasError?'有错误':<Child />}
        <p>
          只能捕获后代组件生命周期产生的错误，不能捕获组件自身、其他组件的合成事件、定时器中产生的错误
        </p>
      </>
    );
  }
}
