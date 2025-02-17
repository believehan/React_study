import { useState, useEffect } from 'react';

export default function App() {
   const [num, setNum] = useState(0),
      [cnt, setCnt] = useState(0);

   function plus() {
      setNum(num => num + 1);
   }

   function count() {
      setCnt(cnt + 1);
   }

   /* 
         < useEffect >   -   효과
						(비동기)
      - 함수나 컴포넌트의 실행 시점을 제어할 수 있는 Hook 로써, 컴포넌트의 특정 렌더링 시점
      또는 effect 실행 시점과 다음 effect 가 실행되기 직전 시점 및 특정 값이 변하는 시점등의
      다양한 실행 시점을 제어 가능.
      다음 effecct 가 실행되기 직전의 시점에 대한 구문은 effect 의 인수로 전달된 익명객체
      내에서 명시적 return 문에 적시한 반환값 또는익명객체 형태로 명시.
      다음 effecct 가 실행되기 직전의 시점이란 현재 effect 가 실행된 후 특정 조건(cnt)에 의한
      렌더링이 완료되면 다음 모든 비동기 effect 들이 실행되는 직전의 상태가 되는 즉, 현재
      effect 가 실행된 후 컴포넌트가 언마운트 되는 시점마다 실행 예약됨을 의미하고 이를 이용해
      컴포넌트의 언마운트 시점마다 해당 컴포넌트에 대한 리소스 정리 작업을 지정함에 있어 유용.

      따라서 세부 기능적으로는 특정 이벤트에 의한 변화가 아닌 동기적 처리로는 불가한 컴포넌트
      자체의 내부적 변동에 의한 변화를 감지하여 처리해야하는 상황이나 비동기 값들에 대한
      동기화를 실현 하기 위한 상황에 유용.
      또한 큰 흐름에서는 사이드 이펙트를 처리하는 데 사용되는 Hook 로써 사이드 이펙트란,
      렌더링과 관련이 없는 작업을 의미하고, 이를 통해 렌더링과 관련된 작업들과 분리함으로써
      코드의 가독성과 유지보수성을 증대시키는데 기여.

      ※ 언마운트(Unmount) : 컴포넌트의 렌더링이 완료된 후 해당 컴포넌트가 DOM 에서 제거되는 작업.
   */
   useEffect(() => console.log('렌더링할 때마다 실행한다'));
   /* 동기식으로 호출해야함 하지만 비동기로 작동  */
   useEffect(() => console.log('최초 렌더링시에만 실행한다'), []);     // 빈 배열을 인수로 추가.

   useEffect(() => console.log('최초 렌더링시와 cnt 가 변할때만 실행한다'), [cnt]);    // 배열의 인수에 실행을 위한 조건값을 할당.
                                                                      // 종속변수가 변할때만 랜더링
   /*
      return 문에 적시한 익명함수의 동작이 렌더링이 완료된 후 컴포넌트가 언마운트되는 시점에서
      실행 예약되어 실행 조건이 되는 cnt 의 변화가 감지될 때마다 리렌더링이 완료된후 다음 비동기
      직전에 먼저 실행됨을 확인 가능.
   */
   useEffect(() => {
      console.log('현재 effect'); //맨 마지막에 실행
      return () => console.log('직전 effect');
   }, [cnt]); 

   console.log('동기 코드'); //처음 실행됨 그 이후 useEffect실행됨

   return (
      <div>
         <h1>num : {num}</h1>
         <button onClick={plus}>+</button>
         <div>
            <button onClick={count}>COUNT : {cnt}</button>
         </div> {/* 다음 랜더링 직전에 useEffect 실행됨*/}
      </div>
   );
}