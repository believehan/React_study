import React, { useReducer } from 'react';
import reducer from './subModule/reducer';
import Plus from './subModule/Plus';
import Minus from './subModule/Minus';

export const RefDispatch = React.createContext();
const initData = 0;

export default function App() {
   const [state, dispatch] = useReducer(reducer, initData);

   /* 
      상태관리를 위한 Reducer 의 dispatch 메서드의 참조를 전역 데이터 참조로 전달.
   */
   return (
      <RefDispatch.Provider value={dispatch}>
         <h1>num : {state}</h1>
         <Plus />
         <Minus />
      </RefDispatch.Provider>
   );
}



// import './App.css'
// import { useState } from 'react';
// export default function App() {
//   const [userBord, setUserBord] = useState(
//     [
//       {
//         userNum: 'st_' + 1,
//         userTitle: '괴롭히기',
//         userName: '박성연',

//       },
//       {
//         userNum: 'st_' + 2,
//         userTitle: '괴롭히기',
//         userName: '박성연',
//       },

//     ]
//   ),
//     { userNum, userTitle, userName } = userBord;

//   function inputUserValue(e) {
//     setUserBord({
//       ...userBord,
//       userNum: e.target.value,
//     });
//   }


//   function upload(userNum) {
//     if (userNum) {
//       setUserBord(value =>{
//         return {
//           ...value,

//         }
//       })
//     }
//   }

//   return (
//     <div>
//       <h1>게시판</h1>
//       <form>
//         <label>
//           <div className='listTable'>
//             <li><div>1</div><div>괴롭히기</div><div>박성연</div></li>
//           </div>
//         </label>
//       </form>
//       <div>
//         사용자<input
//           className="regidentUser"
//           type="text"
//           onChange={inputUserValue}
//           placeholder='한글로만 입력해라'
//         />
//       </div>

//       <div>
//         제목<input
//           className="title"
//           type="text"
//           onChange={inputUserValue}
//           placeholder='제목은 파격적으로'
//         />
//       </div>

//       <div className='content'>
//         글쓰기
//         <div className='regidentUser'>
//           <textarea cols="30" rows="10" placeholder='이쁘게 쓰시오...'></textarea>
//         </div>
//       </div>
//       <button onClick={upload}>등록</button>

//       <div className='delSerialNum'>
//         삭제 등록번호
//         <div>
//           <input
//             type="text"
//             placeholder='삭제할 등록번호 입력해봐라'
//           />
//         </div>
//         <button>삭제</button>
//       </div>

//     </div>
//   );
// }