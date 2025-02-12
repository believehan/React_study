import { useState } from "react";
import ChangeStateValue from "./subModule/ChangeStateValue";
import ChangeStateValue2 from './subModule/ChangeStateValue2';

function App() {
  const [aSyncValue, setAsyncValue] = useState(0);
  /* 
    하위 컴포넌트에서 변경된 데이터를 상위와 다른 하위 컴포넌트에서 데이터
    동기화를 맞추기 위해, 렌더링 특성을 이용하여 데이터를 조작하여 전달할
    하위 컴포넌트에서 직접 상태값을 생성하는 것이 아닌, 상위 컴포넌트에서
    상태값을 생성하여 해당 하위 컴포넌트에 set 변경함수의 참조만 전달하므로써,
    해당 하위 컴포넌트에서 데이터를 직접 생성하여 상위에 전달하면 동기화
    문제가 발생되므로, 상/하위 모든 컴포넌트가 동기화가 매칭되기 위해서는 
    데이터를 공유 할 수 있는 상위에서 상태값을 생성하여 하위에 조작 함수의
    참조만 전달함으로써 하우에서 상위 또는 다른 하위 컴포넌트에 동기화된
    데이터를 전달하는 효과를 볼 수 있음.
  */
  return (
    <>
      <ChangeStateValue aSyncValue={aSyncValue} setAsyncValue={setAsyncValue} />
      <ChangeStateValue2 aSyncValue={aSyncValue} />
      {aSyncValue}
    </>
  );
}

export default App;