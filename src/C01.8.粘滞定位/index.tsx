import React, { ReactNode, useEffect, useState } from "react";
import styled from 'styled-components';

const Inner = styled.div`
  height: 1000px;
  .header{
    width: 100%;
    height: 100px;
    background-color: aliceblue;
    margin-top: 200px;
    position:sticky;
    top:10px;
  }
`;
type AppProps = {

};

const App: React.FC<AppProps> = (props) => {

  return (
    <div>
      <p>
        absolute 属性开启相对定位，left、right、top、bottom  作用偏移 <br />
        <ul>
          <li>不设置偏移量则效果不变</li>
          <li>绝对定位会使元素脱离文档流</li>
          <li>绝对定位会改变元素的性质，行内变成块，块的宽高被内容撑开</li>
          <li>绝对定位提升元素的层级</li>
          <li>永远参照与视口</li>
        </ul>
      </p>
      <Inner>
        <div className="header">header</div>
        <div className="main">main</div>
        <div className="footer">footer</div>
      </Inner>
    </div>
  );
};

export default App;
