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
    width: 150px;
    height: 150px;
    background-color: #80dea1;
    position: relative;
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
        relative 属性开启相对定位，left、right、top、bottom  作用偏移 <br />
        其宽高不会发生变化
        <ul>
          <li>不设置偏移量则效果不变</li>
          <li>相对定位是参照于元素的文档流中的位置进行定位</li>
          <li>相对定位不会使元素脱离文档流</li>
          <li>相对定位提升元素的层级</li>
          <li>相对定位不会改变元素的性质，块还是块，行内还是行内</li>
          <li></li>
        </ul>
      </p>
    </div>
  );
};

export default App;
