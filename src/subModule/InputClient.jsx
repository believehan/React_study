import { useState } from "react";

export default function InputClient() {
    const [inputValue, setInputValue] = useState(''),  // 입력값.
        [clientName, setclientName] = useState('');    // 입력 확인을 했을 때의 출력값.

    function onChangeInput(e) {
        setInputValue(e.target.value);
    }

    /*
            < onKeyDown >

    - 키를 눌렀을 때의 이벤트.
      해당 요소에 대한 이벤트 객체를 통해 keyCode 나 key 필드를 반환 가능.

    keyCode : 해당 키에 대한 정수형태의 유니코드값을 반환.
    key : 해당 키에 대응되는 문자열 형식의 키값을 반환하며, 해당 키가
          특수키인 경우 해당 예약 키워드값 반환.

    ==========================================================================

        < onKeyDown 이벤트에 대한 콜백 함수 >

    - 임의 키가 눌렸을 때 해당 키값이 엔터(Enter) 키로 감지되면 해당
      요소(input 태그)의 value 값을 반환받아 출력값 변수(clientName)에 할당.
    */
    function checkEnter(e) {
        /* 
            유니코드 키값과 예약된 키워드값 조사.
        */
        console.log(e.keyCode); //키값 뽑아내 출력
        console.log(e.key);     // 어떤키 인지 출력

        /* 
            onKeyDown 핸들러의 이벤트 객체를 통해서도 target 속성을
            이용하여 이벤트가 발생하는 해당 요소의 참조 수신 가능.
        */
        console.log(e.target)

        // if (e.keyCode === 13) { // 엔터를 정수로 바꾸면 13이 찍힘
        //     setclientName(e.target.value);
        //     // setclientName(inputValue);
        // }

        if (e.key === 'Enter') {
            setclientName(e.target.value);
        }
    }

    function confirm() {
        setclientName(inputValue);
    }

    function tryAgain() {
        setInputValue('');
    }

    return (
        <>
            <div>
                <div>
                    <label>고객명
                        <input
                            type="text"
                            value={inputValue}
                            onChange={onChangeInput}
                            onKeyDown={checkEnter}
                        />
                    </label>
                    <button onClick={confirm}>확인완료</button>
                    <button onClick={tryAgain}>다시입력</button>
                </div>
                <div>
                    {clientName} 고객님 안녕하세요
                </div>
            </div>
        </>
    );
}