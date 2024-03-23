import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Wrapper from './views/WrapperView';
import reportWebVitals from './reportWebVitals';
import HomeView from './views/HomeView/HomeView';
import WrapperView from './views/WrapperView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WrapperView />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
