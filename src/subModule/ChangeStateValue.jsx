import { useState } from "react";

export default function ChangeStateValue({ transValue }) {
    const [stateValue, setStateValue] = useState(0);

    // function setValue() {
    //     /* 
    //         함수 내에서 setStateValue 와 transValue 함수의 실행 순서는
    //         모두 동기적으로 호출. 
    //         반면 setStateValue 가 실제 호출되어 내부 콜백 호출이
    //         이루어지는 시점 또한 동기적으로 처리되지만, 실제 상태값이
    //         변화되어 반영되는 시점은 비동기적으로 처리됨에 주의.
    //         즉, 상태값 변환 함수(setStateValue)가 실행되어 상태값이
    //         반영되는 시점은 상태값 변환 콜백함수 내 모든 동기식 처리
    //         로직이 완료된 후 리렌더링 직전 시점에 처리되는 것을 확인
    //         가능.
    //         이러한 상태값 변환이 적용되는 시점의 차이로 인해 당 컴포
    //         넌트와 상위 및 다른 하위 컴포넌트간에 동기화가 실현되지
    //         않는 문제점 발생됨에 주의.
    //     */
    //     setStateValue(
    //         s => {
    //             console.log(`상태값 2 : ${stateValue}`);

    //             return s + 1;
    //         });

    //     console.log(`상태값 3 : ${stateValue}`);


    //     transValue(stateValue);
    // }

    /* 
        실제 배치 순서는 상관이 없지만 직관적인 동기화를 맞추기 위해서는
        set~ 함수를 가장 뒤에 배치하는 것이 논리적 이해가 편리.
        단, 아래와 같이 콜백함수 내에 상태 변경에 직결되는 내용만 포함
        되는 경우로 제한.
    */
    function setValue() {
        transValue(stateValue);
        setStateValue(s => s + 1);
    }

    console.log(`상태값 1 : ${stateValue}`);


    return (
        <>
            <button onClick={setValue}>ChangeStateValue</button>
            <div className="ChangeStateValue">
                {stateValue}
            </div>
        </>
    );
}