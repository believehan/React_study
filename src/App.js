import { useState } from 'react';
import SetName from './subModule/SetName';

/* 
    < 하위 컴포넌트에서 상위 컴포넌트로 값 전달 >

- 하위 컴포넌트에서 상위 컴포넌트로 값을 전달하기 위해서는 상위 컴포넌트에서
  정의한 함수의 참조를 하위 컴포넌트에 전달하고, 하위 컴포넌트에서는 전달받은
  상위 컴포넌트 함수 호출을 위한 별도의 함수를 정의하여 그 내부에서 상위
  컴포넌트로 전달할 값을 상위 컴포넌트의 함수 참조를 통해 실인수와 함께 호출
  함으로써 상위 컴포넌트에서는 매개변수 형태로 전달된 값을 수신하고 이를
  set~ 함수를 이용 상태값에 저장하여 활용.
*/
function App() {
    const [yourName, setYourName] = useState('바보');

    /* 
        하위 컴포넌트에서 전달된 값을 매개변수 형태로 수신하기 위한 함수.        
    */
    function setName(transName) { // 값을 반환 받을 함수 미리 정의
        setYourName(transName); 
    }

    return (
        <>
            <SetName setName={setName} /> {/* 하위 컴포넌트에 부모함수 전달 */}
            <div>당신의 이름은 {yourName}입니다.</div>
        </>
    );
}

export default App;