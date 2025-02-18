import { useRef, useState } from 'react';
import StudentList from './subModule/StudentList';

/* 
   < immer 를 사용하기 위한 임포트 >

- vscode 에서는 자동완성이 지원되지 않으므로 직접 임포트문 작성 유의.
*/
import {produce} from 'immer';

export default function App() {
   const [studentInfo, setStudentInfo] = useState(
      [
         {
            stNum: 'st_' + 1,
            stName: '박성연',
         },
         {
            stNum: 'st_' + 2,
            stName: '홍길동',
         },
      ]
   ),
      inputBox = useRef(),
      stNum = useRef(3);

   function regidentSt(e) {
      e.preventDefault();

      const inputData = inputBox.current;

      if (inputData.value) {
         const addSt = {
            stNum: 'st_' + stNum.current,
            stName: inputData.value,
         }
         
         // setStudentInfo([...studentInfo, addSt]);

         
         /*
            < immer 를 이용한 용이한 불변성 관리 >

         - 리액트에서 배열이나 객체를 업데이트 해야 할 때에는 불변성을 지켜 업데이트를
           해야 하는데 immer 를 이용하면 좀 더 편리한 업데이트가 가능.
           당 예시의 경우에는 상태 객체의 구조가 단순해 기존의 업데이트 방식이 더 유리.
           또한 immer 를 이용하는 경우에는 라이브러리를 이용하다 보니 순수 js 보다는
           성능면에서 불리함에 유의.

         =============================================================================

            < 상태 변경 함수(setter) 내 produce 함수를 이용한 업데이트 형식 >

         형식   :    produce( 상태값, 사본_상태값_매개변수 => { 상태값 변경 로직 } )

         ※ 상태값 변경 로직의 경우 반환값(return)이 없어야 함에 주의.
         */
         setStudentInfo(produce(studentInfo, studentInfo => {
            studentInfo.push(addSt);
         }));


         /* 
            < 에러 코드 >

         - 아래 코드의 경우 {}블럭이 없는 람다식 적용으로 push 메서드에 호출에 의한
           반환값이 있어 오류 발생.
         */
         // setStudentInfo(produce(studentInfo, studentInfo=> studentInfo.push(addSt)));

         stNum.current++;
         inputData.value = '';
      }

      inputData.focus();
   }

   return (
      <>
         <form onSubmit={regidentSt}>
            <input
               name='inputBox'
               type="text"
               ref={inputBox}
            />
            <button>등록</button>
         </form>

         <StudentList
            studentInfo={studentInfo}
            setStudentInfo={setStudentInfo}
         />
      </>
   );
}