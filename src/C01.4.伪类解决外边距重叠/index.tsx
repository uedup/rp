import React, { ReactNode, useEffect, useState } from "react";
import styled from 'styled-components';

const Inner = styled.div`
  background-color: bisque;
  .header{
    width: 200px;
    height: 200px;
    background-color: aliceblue;
    margin-top: 20px;
  } 
  ::before{
    content: '';
    /* display: block;//不解决高度塌陷 */
    /* display: inline-block; // 可解决，但有兼容问题，有浏览器header超出区域 */
    display: table;
  }
  .clearfix::before,
  .clearfix::after{
    display: block;//即解决高度塌陷、也解决外边距重叠
    content: '';
    display: table;
  }
`;
type AppProps = {

};

const App: React.FC<AppProps> = (props) => {

  return (
    <div>
      <Inner>
        <div className="header">header</div>
      </Inner>
      <textarea 
      className="code" 
      wrap="physical"
      rows={24}
      cols={72}
      >
        content: '';
        /* display: block;//不解决高度塌陷 */
        /* display: inline-block; // 可解决，但有兼容问题，有浏览器header超出区域 */
        display: table;
      </textarea>
    </div>
  );
};

export default App;
