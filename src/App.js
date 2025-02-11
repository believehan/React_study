/* 
  export 시 default 지정자를 지정함으로써 import 시 객체 참조 지정에 대한
  블럭{}(객체 구조분해 할당) 생략 가능.
  ( default 지정자는 모듈 내에서 오직 하나의 함수만 사용가능)

  또한 이경우 export 클래스 명이나 함수명은 import 시의 객체 참조명과 다르거나
  생략해도 무방. (권장되지는 않음)

  즉, default 지정자 지정 시에는 익명함수 형태의 객체로 내보내기가 가능하며
  import 시 객체명은 임의로 지정가능.
  
  단, 혼란을 방지하기 위해 이경우 default 컴포넌트명과 import 객체 참조명을 
  동일하게 사용하는 것이 바람직.

  ※ default 컴포넌트는 하나의 모듈에서 오직 하나만 사용가능하지만, default 가
  아닌 일반 컴포넌트도 해당 모듈에 포함하여 export하는것은 문제되지 않음
 */

export default function App() {
  return <h1>모듈 임포트1</h1>;
}

// export default function Appss() {
//   return <h1>모듈 임포트1</h1>;
// }

// export default function () {
//   return <h1>모듈 임포트1</h1>
// }

/*
  default 지정자가 생략 되었으므로, 임포트 시에는 반드시 블럭{}(객체 구조분해 할당)이
  필요하고 엑스포트 컴포넌트명과 임포트 명이 동일해야함에 주의
*/

export function App2() {
  return <h1>모듈 임포트2</h1>
}