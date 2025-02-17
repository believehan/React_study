import { useReducer } from 'react';
import reducer from './subModule/reducer';

function init(initData) {
    if (initData >= 100) {
        return 100;
    } else {
        return initData;
    }
}

export default function App() {
    const inintData = 0;
    // const inintData = 250;

    /*
        < useReducer 의 3번째 인자 initializer >

    - useReducer 의 3번째 인자인 initializer 가 생략된 경우에는
      2번째 인자인 initializerArg 값으로 초기화가 되지만,
      initializer 에 함수의 참조를 전달하면 콜백 호출된 값으로
      초기화됨을 확인 가능.
    */
    const [state, dispatch] = useReducer(reducer, 0, () => init(inintData));

    function plus() {
        dispatch({ type: 'PLUS' });
    }

    function minus() {
        dispatch({ type: 'MINUS' });
    }

    return (
        <div>
            <h1>num : {state}</h1>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
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
//   );

//   function upload(userNum) {
//     userBord
//   }

//   return (
//     <div>
//       <h1>게시판</h1>
//       <div className='listTable'>
//         <form>
//           <label>
//             <li><div>1</div><div>괴롭히기</div><div>박성연</div></li>
//           </label>
//         </form>
//       </div>
//       <div>
//         사용자<input
//           className="regidentUser"
//           type="text"
//           placeholder='한글로만 입력해라'
//         />
//       </div>

//       <div>
//         제목<input
//           className="title"
//           type="text"
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