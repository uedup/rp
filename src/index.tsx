import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Demo from './A01.promise/promise-手写';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Demo />
    {/* <Demo message='我是消息'>haha</Demo> */}
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
