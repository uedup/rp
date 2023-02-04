import React, { ReactNode, useEffect, useState } from "react";
import styled from 'styled-components';

const Inner = styled.div`
  background-color: bisque;
  .header{
    width: 100px;
    height: 100px;
    background-color: aliceblue;
    float: left;
  }
  .main{
    width: 150px;
    height: 150px;
    background-color: #80dea1;
    float: left;
  }
  .footer{
    width: 200px;
    height: 200px;
    background-color: #d680de;
    float: left;
  }
  .clearfix{
    clear: both;
  }  
  ::after{
    clear: both;
    content: '';
    height: 0;
    display: block;//没有不能解决塌陷,table也可以，其他不行
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
        {/* <div className="clearfix"></div> */}
      </Inner>
      <p>
        加.clearfix或使用::after
      </p>
    </div>
  );
};

export default App;
