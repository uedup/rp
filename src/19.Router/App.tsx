import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Main from "./Pages/Main";
import MainUsers from "./Pages/MainUsers";
import MainUsersIndex from "./Pages/MainUsersIndex";
import TheUser from "./Pages/TheUser";
import MainBooks from "./Pages/MainBooks";
import TheBook from "./Pages/TheBook";

const AppWrapper = styled.div`
  width: 600px;
  margin: 20px auto;
  nav{
    font-size: 20px;
    a{
      display: inline-block;
      border: 1px solid #f47171;
      border-bottom: 0;
      border-right:0 ;
      padding: 5px 15px;
    }
    a:last-child{
      border-right: 1px solid #f47171;
    }
  }
  }
  .route-page {
    border: 1px solid #f47171;
    padding: 20px;
    h2{
      text-align: center;
      border-bottom: 3px solid #4377e8;
    }
  }
`;

type AppProps = {};

export const App: React.FC<AppProps> = () => {
  return (
    <AppWrapper className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/main">Main</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="main" element={<Main />}>
          <Route path="users" element={<MainUsers />}>
            <Route index element={<MainUsersIndex />} />
            <Route path="peter" element={<TheUser user="peter" />} />
            <Route path="paul" element={<TheUser user="paul" />} />
            <Route path="*" element={<TheUser />} />
          </Route>
          <Route path="books" element={<MainBooks />}>
            <Route
              index
              element={
                <div>
                  <h1>Book</h1>
                </div>
              }
            />
            <Route path=":id" element={<TheBook />} />
          </Route>
        </Route>
        <Route path="*" element={<div className="route-page"><h1>Error:no match</h1></div>} />
      </Routes>
    </AppWrapper>
  );
};
export default App;
