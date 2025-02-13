import { useState } from "react";

export default function InputClient() {
    const [inputValue, setInputValue] = useState(''),
        [cnt, setCnt] = useState(0);

    /* 
        onKeyDown 과 onChange 이벤트가 동시 발생시
        onkeyDown 이 onChange 이벤트 보다 먼저 실행되는 것을 확인 가능.
    */
    function checkEnter(e) {
        console.log('onKeyDown 핸들러!!');
    }

    function onChangeInput(e) {
        console.log('onChange 핸들러!!');
    }

    /* ====================================================================== */

    /*
        동일 이벤트 핸들러 내에서 동일한 setState 함수의 연쇄적 갱신은 모두
        누적 반영되는 것이 아닌, 객체의 기존 속성에 대한 변경이 최종 변경값으로
        업데이트되어 처리되는 것과 같이, 최초 상태값에 변화를 주고 그 변화된 값에
        대한 누적처리를 하는 것이 아닌 가장 마지막 값으로 덮어져 처리되는 것을
        확인 가능.

        랜더링 두번 일어남
    */
    // function checkEnter(e) {
    //     setInputValue(e.key + 1);
    //     setInputValue("헤이!!" + 2); //앞에 내용 덮어씀
    // }

    // function onChangeInput(e) {
    //     console.log('onChange 핸들러!!');
    // }

    /*
        onKeyDown 이벤트 핸들러의 경우 핸들러 내의 모든 작업 처리가 종료된
        이후에야 입력상자 내에 onKeyDown 이벤트로 인해 입력된 키값(e.target.value)
        이 적용됨에 주의.
        즉, onKeyDown 핸들러에 의해 전달된 이벤트 객체를 통해 읽은 key 값은
        입력된 키값이 바로 읽히지만, 입력상자에 실제 표현되는 e.target.value 는
        onKeyDown 핸들러의 처리가 완료되야지만, 리렌더링에 의해 해당 입력상자에 입력된
        키값을 읽을 수 있으므로 입력이 잘못된 경우 핸들러 처리가 끝난 이후에야 입력상자에
        표시가되어 핸들러 내에서의 삭제, 수정등의 처리 불가.

        아래의 경우 처음의 setState 함수는 무시되고 두번째 setState 함수의
        값으로 덮어져 처리가 되는데, 그 상태에서 e.target.value 의 값을
        읽으면 아직 onKeyDown 핸들러 처리가 종료되지 않은 상태이므로
        빈 문자열값만 읽히는 상태가 되어 더하기 연산자로 결합한 2 값만 입력
        되는 것을 확인 가능.
    */
    // function checkEnter(e) {
    //     setInputValue(e.key + 1);
    //     setInputValue(e.target.value + 2);
    // }

    // function onChangeInput(e) {
    //     console.log('onChange 핸들러!!');
    // }

    /* ====================================================================== */

    /*
        각기 다른 이벤트 핸들러 내에서 동일한 setState 함수의 연쇄적 갱신은
        동일 이벤트 핸들러 내에서의 연쇄갱신과 달리 순차적으로 누적 처리되는
        것을 확인 가능.
        즉, 이벤트 실행 우선 순위에 의해 onKeyDown 핸들러 처리가 먼저 렌더링된후,
        다시 onChange 핸들러에 의해 리렌더링되지만 덮어쓰는 것이 아닌, 누적된
        결과를 확인 가능.
    */
   //값이 누적
    // function checkEnter(e) {
    //     setCnt(cnt + 1); 
    // }

    // function onChangeInput(e) {
    //     setCnt(cnt + 1);
    // }

    /*
        아래의 경우에도 먼저 우선 순위에 따라 onKeyDown 핸들러가 상태값을
        변경하고, 이후 onChange 핸들러가 실행되어 e.target.value 를 읽어
        덮어쓰는 것이 아닌, 누적 반영된 값이 입력상자에 표시되는 것을 확인 가능.
        단, 최초 이벤트 발생 시점에서의 값이 매 렌더링 시점에서의 인수 지정 대상
        값이되므로, e.key 의 값과 e.target.value 의 값이 동일한 값이 됨에 주의.
        따라서 최초에 "5" 를 입력하면 onKeyDown 핸들러에 의해 세터에 "51"이 저장되어
        렌더링되고, 다음 onChange 핸들러에서는 세터에 의해 "52" 값이 기존값을
        덮어쓰는 것이 아닌, 누적되어 리렌더링 시점에서 "5152" 의 결과를 확인 가능.
    */
   //값이 누적
    // function checkEnter(e) {
    //     setInputValue(e.key + 1);
    // }

    // function onChangeInput(e) {
    //     setInputValue(e.target.value + 2);
    // }

    /*
        아래의 경우에는 이벤트 핸들러 실행 우선순위에 따라 순서대로 실행이되데,
        각 핸들러간 연관되는 값이 없으므로 결과적으로 onChange 핸들러의 setState
        함수로 값이 덮이지는 것과 같은 결과 확인 가능.

        위의 코드와 달리 덮어쓰기됨
        이런특성이 있다로 알고있기
    */
    // function checkEnter(e) {
    //     setInputValue(e.key + 1);
    // }

    // function onChangeInput(e) {
    //     setInputValue("헤이!!" + 2);
    // }

    /* ====================================================================== */

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
                </div>
            </div>

            <div>{cnt}</div>
        </>
    );
}