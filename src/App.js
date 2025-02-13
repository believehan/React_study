import ChangeStateValue from "./subModule/ChangeStateValue";
import ChangeStateValue2 from "./subModule/ChangeStateValue2";
import { useState } from 'react';

function App() {
  const [aSyncValue, setAsyncValue] = useState(0);

  /* 
      컴포넌트간 통신에서 상위에서 하위 컴포넌트에 데이터를 전달할 때에는
      props 를 통해 참조 전달이 되고, 상위 컴포넌트에서의 상태값이 변화됨에
      따라 하위 컴포넌트도 연동되어 리렌더링이 일어나므로 하위 컴포넌트에서는
      별도의 동기나 비동기 변수의 선언이 불필요.
      반면, 하위에서 상위 컴포넌트로 데이터 전달시에는 상위 컴포넌트 함수의
      참조를 통한 호출로 매개변수 형태의 지역변수로 전달되어, 상위 컴포넌트
      에서 이를 리렌더링 하기 위해서는 리렌더링이 수반되는 비동기 변수에
      할당하는 작업이 반드시 필요.
      즉, 컴포넌트간 리렌더링이 전제되는 통신을 위해서는 상위에서 하위인지
      또는 하위에서 상위인지 방향에 따라 비동기 변수의 필요성이 가변적.
  */
  function transValue(value) {
    setAsyncValue(value);
  }

  return (
    <>
      <ChangeStateValue transValue={transValue} />
      <ChangeStateValue2 aSyncValue={aSyncValue} />
      {aSyncValue}
    </>
  );
}

export default App;