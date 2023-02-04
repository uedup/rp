import React, { ReactNode, useEffect, useState } from "react";
import styled from 'styled-components';

const Inner = styled.div`
  background-color: bisque;
  .header{
    width: 100px;
    height: 100px;
    background-color: aliceblue;
  }
  .main{
    /* width: 150px; */
    height: 150px;
    background-color: #80dea1;
    position: absolute;
    left: 10px;
    top:200px;
    /* bottom:-50px; */
  }
  .footer{
    width: 200px;
    height: 200px;
    background-color: #d680de;
  }
`;
type AppProps = {

};

const App: React.FC<AppProps> = (props) => {

  return (
    <div>
      <Inner>
        <div className="header">header</div>
        <div className="main">main</div>
        <div className="footer">footer</div>
      </Inner>
      <p>
        fixed 属性开启相对定位，left、right、top、bottom  作用偏移 <br />
        <ul>
          <li>不设置偏移量则效果不变化</li>
          <li>绝对定位会使元素脱离文档流</li>
          <li>绝对定位会改变元素的性质，行内变成块，块的宽高被内容撑开</li>
          <li>绝对定位提升元素的层级</li>
          <li>绝对定位参照原点为最近的开启定位的父级，没有则为body</li>
        </ul>
      </p>
    </div>
  );
};

export default App;
