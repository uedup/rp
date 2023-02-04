import React, { ReactNode, useEffect, useState } from "react";
import styled from 'styled-components';

const Inner = styled.div`
  .header{
    width: 200px;
    height: 200px;
    background-color: aliceblue;
    float: left;
  }
  .main{
    width: 300px;
    height: 300px;
    background-color: #80dea1;
  }
  .footer{
    width: 400px;
    height: 200px;
    background-color: #d680de;
  }
`;
type AppProps = {

};

const App: React.FC<AppProps> = (props) => {

  return (
    <Inner>
      <div className="header">header</div>
      <div className="main">main</div>
      <div className="footer">footer</div>
    </Inner>
  );
};

export default App;
