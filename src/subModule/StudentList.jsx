import React from 'react';

function StudentList({ studentInfo }) {
    console.log('렌더링');

    return (
        <>
            {studentInfo.map(e =>
                <div key={e.stNum}>{e.stName}</div>
            )}
        </>
    );
}

/* 
    아래와 같이 export 할 대상 컴포넌트를 React.memo 함수의 인자로 넣어
    export 를 하면 해당 컴포넌트의 props 가 변경되는 경우에만 리렌더링
    되는 것을 확인 가능.

    리액트 개발자 도구에서는 버그로 인해 시각적 리렌더링이 일어나는 것으로
    보이나 콘솔로그를 확인해보면 등록시에만 리렌더링이 일어나는 것을 확인
    가능.

    ======================================================================

        < useMemo 와 React.memo 의 차이 >

    - useMemo 는 컴포넌트 내에서 계산 비용이 높은 연산의 결과나 데이터를
      재생산하지 않고 재활용하여 성능을 최적화하는 목적으로 활용.

    - React.memo 는 다른 컴포넌트 자체를 감싸는 고차 컴포넌트로써, 다른
      대상 컴포넌트의 렌더링에 대한 프롭스의 변화를 감지하고 이에 따른
      리렌더링 여부를 결정하여 성능 최적화에 기여하도록 설계된 함수.
*/
export default React.memo(StudentList);