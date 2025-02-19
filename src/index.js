import React from "react"; //안써도 됨
import ReactDOM from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from 'react-router-dom'; //이거 추가하고

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  // <BrowserRouter> {/* App.js 감쌈 */}
    <App />
  // </BrowserRouter>
);
//이곳에 조립하면 제약상황이 생김 그래서 이곳은 그냥 랜더하는 역할만 함