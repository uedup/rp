import React, { Component } from "react";

export default class Child extends Component {
  state = {
    book: [
      {
        id: "001",
        title: "前端开发指南",
      },
      {
        id: "002",
        title: "CSS3指南",
      },
    ],
  };
  // test()//非生命周期的错误，无法被祖先组件的getDerivedStateFromError捕获
  render() {
    return (
      <>
        <h4>Child Component</h4>
        {this.state.book.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </>
    );
  }
}
