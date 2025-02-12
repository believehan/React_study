import { useState } from 'react';

function Counter({ spanStyle, btnStyle }) {
    const [count, setCount] = useState(0);

    // function plusCounter() {
    //     let point = 5;

    //     /*
    //         일반 업데이트 방식은 리렌더링시마다 setter 함수의 인자에 적용된
    //         식을 매번 함수로 재생성 하는 특성을 가지므로, 아래의 point
    //         변수에는 매번 5 의 값이 할당되어 연산 적용되는 것을 확인 가능.
    //     */
    //     setCount(count + point);

    //     point = 10; // 함수가 끝나면 재생성 되서 포인트 값 10이 반영안됨
    // }

    function plusCounter() {
        let point = 5;

        /*
            함수형 업데이트 방식은 setter 함수의 인자에 전달한 최초 정의 콜백함수를
            리렌더링시마다 재참조하는 특성을 가져, 아래의 경우 최초 콜백함수에
            적용된 point 값은 5 가 적용되지만 이후에 point 를 10 으로 변경하였으므로
            이후의 렌더링시에는 point 값에 10 이 적용된 최초 콜백함수의 참조를 그대로
            재활용하는 것을 확인 가능.
        */
        setCount(count => count + point); //최초에만 만들어지고 계속 남아있어 값이 유지된채로 리렌더링시 반복됨

        point = 10;
    }

    return (
        <>
            <div>COUNTER
                <span style={spanStyle}>{count}</span>
            </div>

            <button style={btnStyle} onClick={plusCounter}>+1</button>
        </>
    );
}

export default Counter;