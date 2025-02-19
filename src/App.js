import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Product1 from './Product1';
import Product2 from './Product2';
import NotFound from './NotFound';

function App() {
   const helpText = '도움말'; //element요소로 페이지 생성됨
   function help() {
      return (
         <div>
            <h1>도움말</h1>
            <div>
               <p> 무엇을 도와드릴까요?</p>
               <form>
                  <select>
                     <option value="0">한식</option>
                     <option value="1">중식</option>
                     <option value="2">일식</option>
                  </select>
               </form>
            </div>
         </div>
      )
   }

   return (
      <div className='App'>
         <BrowserRouter>
            <Header />

            <Routes>

               {/* 
                  element 속성을 이용하므로써 라우트 대상을 컴포넌트 형태로
                  지정해야하며, 그에 따라 별도의 프롭스 전달도 가능.
               */}
               <Route path="/" element={<Main />} ></Route>

               <Route path="/Product1" element={<Product1 helpText={helpText} />}></Route>
               <Route path="/Product2" element={<Product2 helpText={helpText} />}></Route>

               {/* 
                  element 속성을 이용하므로써 아래와 같이 직접 HTML 요소도 직접 지정 가능.
               */}
               <Route path="/Help" element={help()} ></Route>

               <Route path="*" element={<NotFound />}></Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
};

export default App;