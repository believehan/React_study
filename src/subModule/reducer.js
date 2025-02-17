/* 
    < reducer 함수의 모듈화 >

- 모듈화한 reducer 함수는 컴포넌트는 아니므로 파일명이나
  컴포넌트(함수)명 모두 소문자 이니셜 적용.
*/
export default function reducer(state, action) {
    switch (action.type) {
        case 'PLUS':
            return state + 1;
        case 'MINUS':
            return state - 1;
        default:
            return state;
    }
}