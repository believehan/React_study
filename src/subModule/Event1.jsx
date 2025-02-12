let test;

export function Event1({ style }) {
    /* 
        함수 표현식은 아래와 같이 전역변수에 할당이 가능함으로써, 외부의
        다른 컴포넌트에서도 참조 가능함을 확인가능.

       ※ 리액트는 상태값(state) 의 변경에 의해 리렌더링이 발생하지만,
       이벤트 헨들러를 사용하여 직접 DOM을 조작하는 경우에는 React의
       상태관리와 는 별개로, 직접 DOM 요소의 스타일 변경이 가능.
    */
   test = e => {
    e.preventDefault();
    e.target.style.backgroundColor = 'green'
   };

   return (
    <div>
        <a href="." style={style} onClick={test}>첫 번째 요소</a>
    </div>
   )
}

export function Event2({style}) {
    return (
        <div>
             <a href="." style={style} onClick={test}>두 번째 요소</a>
        </div>
    );
}