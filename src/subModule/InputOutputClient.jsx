import { useState } from "react";

export default function InputOutputClient() {
    const [inputName, setInputName] = useState(''),
        [clientName, setclientName] = useState(''),

        [inputValue, setInputValue] = useState(''),
        [clientNum, setclientNum] = useState('');

    function onChangeInput(e) {
        setInputName(e.target.value);
    }
    function onChangeInputA(e) {
        setInputValue(e.target.value);
    }

    function onEnter(e) {

        if (e.keyCode === 13) {
            if (inputName !== '' && inputValue !== '') {

                setclientName(inputName);
                setclientNum(inputValue);
            }
        }
    }

    function confirm() {
        if (inputName !== '' && inputValue !== '') {

            setclientName(inputName);
            setclientNum(inputValue);
        }
    }
    function tryAgain() {
        setInputName('');
        setInputValue('');
    }

    return (
        <div>
            <div>
                <label>고객명
                    <input
                        type="text"
                        value={inputName}
                        onChange={onChangeInput}
                        onKeyDown={onEnter}
                    />
                </label>
                <label>고객번호
                    <input
                        type="text"
                        value={inputValue}
                        onChange={onChangeInputA}
                        onKeyDown={onEnter}
                    />
                </label>
                <button onClick={confirm}>확인완료</button>
                <button onClick={tryAgain}>다시입력</button>
            </div>
            <div>
                {clientName}고객님의 고객번호는 {clientNum}입니다
            </div>
        </div>
    );
}