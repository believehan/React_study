import { useRef, useState } from 'react';

function PersonalInfo() {
    const inputEle = useRef({
        name: null,
        phoneNum: null,
    });

    const [data, setData] = useState({
        data1: '',
        data2: '',
    });

    /* 
        컴포넌트(PersonalInfo) 내 useRef 참조를 전역적으로 사용하고
        getElement 함수의 로직을 단순화 시키기 위해 inputEleRef 객체
        형태로 선언.
        단, getElement 함수의 로직은 단순화되지만 객체 형태로 접근해야
        하는 불편함이 있어, 요소에 대한 접근이 많은 경우에는 다소 접근
        편의성이 떨어져, 기존 useRef 의 current 를 통해 참조하는 것
        보다는 편하지만 큰 차이가 없어짐.
    */
    const inputEleRef = {
        name: null,
        phoneNum: null,
    };

    function getElement(ele) { //방어코드
        if (ele) {
            inputEle.current[ele.name] = ele;

            inputEleRef[ele.name] = inputEle.current[ele.name]; //이 문법이 맞음
        }
    }

    function registeredName() {
        inputEleRef.phoneNum.focus();

        setData({
            ...data,
            data1: inputEleRef.name.value,
        });
    }

    function registeredPhoneNum() {
        inputEleRef.name.focus();

        setData({
            ...data,
            data2: inputEleRef.phoneNum.value,
        });
    }

    return (
        <>
            <div>
                <label>
                    이름
                    <input type="text" ref={getElement} name='name' />
                </label>
                <button onClick={registeredName}>등록</button>
            </div>

            <div>
                <label>
                    전화번호
                    <input type="text" ref={getElement} name='phoneNum' />
                </label>
                <button onClick={registeredPhoneNum}>등록</button>
            </div>

            <div>{data.data1} {data.data2}</div>
        </>
    );
}

export default PersonalInfo;