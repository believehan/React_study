import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

/* ========================================================================================================= */

function TestReact(props) {
    return <h1>테스트 {props.value1}</h1>;      // JSX 형식.
}

root.render( 
  // 함수 호출과 동일하지만 객체형태로 묶어서 전달
    <TestReact value1='1' />     // 컴포넌트에 임의 프로퍼티와 값을 지정함으로써 객체 형태로 전달되고
    //                           // 이를 매개변수(props)의 참조를 통해 컴포넌트의 프로퍼티를 필드 형식
    //                           // 으로 JSX 표현식 내에서 참조 가능.
);

/* ========================================================================================================= */

/*
    다중 JSX 식을 구현하는 경우 소괄호로 묶어서 반환해야 하며 반드시
    하나의 부모 컨테이너 태그가 있어야함.
    하기의 경우 부모가 2개 이므로 컴파일 에러.
*/
// function TestReact(props) {
//     return (
//         <h1>테스트 {props.value1}</h1 >
//         <h2>테스트 {props.value2}</h2 >
//     );
// }

// root.render(
//     <TestReact value1='1' value2='2' />
// );

/* ========================================================================================================= */

// function TestReact(props) {
//     return (
//         <div>
//             <h1>테스트 {props.value1}</h1 >
//             <h2>테스트 {props.value2}</h2 >
//         </div>
//     );
// }

// root.render(
//     <TestReact value1='1' value2='2' />
// );
//단점: 값을 동적으로 구성하지 못한다
/* ========================================================================================================= */
// props 의 Destructuring assignment(구조분해할당)

// function TestReact({value1, value2}) {
//     return (
//         <div>
//             <h1>테스트 {value1}</h1 >
//             <h2>테스트 {value2}</h2 >
//         </div>
//     );
// }

// root.render(
//     <TestReact value1='1' value2='2' />
// );