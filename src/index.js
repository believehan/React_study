import React from "react"; //안써도 됨
import ReactDOM from 'react-dom/client';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App />
);
//이곳에 조립하면 제약상황이 생김 그래서 이곳은 그냥 랜더하는 역할만 함