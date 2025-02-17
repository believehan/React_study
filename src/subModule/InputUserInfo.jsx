import { useRef } from 'react';
export default function InputUserInfo({ setUserList }) {
    const inputUserName = useRef(),
        inputSubject = useRef(),
        inputContent = useRef(),
        inputDelSerialNum = useRef(),
        serialNum = useRef(3);

    function addUserList(e) {
        const userName = inputUserName.current.value,
            subject = inputSubject.current.value,
            content = inputContent.current.value;

        e.preventDefault();

        /* 
            < 함수형 업데이트 방식 사용시 주의사항 >

        - setter 함수에 함수형 업데이트 방식을 적용시, 게시판에 등록하여 추가할 사용자, 제목, 내용을 위와
          같이 임시 변수로 받지않고, setter 함수에 useRef 참조를 통한 current.value 값을 그대로 적용하여
          추가를 하면, 함수형 업데이트 방식과 같이 최초 정의한 콜백함수의 참조를 그대로 재활용하는 특성으로
          인해, 최초 등록시에는 current.value 를 통해 읽은 값이 정상적으로 추가되지만, setter 함수 아래에
          적용한 current.value 에 빈 문자열을 할당하는 식에 의해, 이후 등록시에는 current.value 에 적용된
          빈 문자열만 지속적으로 추가될 수 있음에 주의.

        ======================================================================================================

            < current.value 형태로 직접 setter 함수에 할당한 경우 >

        - 최초 등록 버튼을 누른 경우( 정상적으로 입력상자의 값이 등록 )
            userName: inputUserName.current.value
            subject: inputSubject.current.value
            content: inputContent.current.value

        - 이후 등록 버튼을 누른 경우( 최초 등록 시 하단의 빈 문자열을 할당하는 식에 의해 빈 문자열 값이 등록 )
            userName: ''
            subject: ''
            content: ''

        - 결과적으로 최초 정의된 콜백함수를 참조하는 함수 업데이트 방식의 특징에 의해 아래와 같이 적용.
            userName: inputUserName.current.value = ''
            subject: inputSubject.current.value = ''
            content: inputContent.current.value = ''

        ======================================================================================================
        
            < 미리 조사한 current.value 값을 임시변수에 할당한후 setter 함수에 임시변수로 할당하는 경우 >

        const userName = inputUserName.current.value,
              subject = inputSubject.current.value,
              content = inputContent.current.value;

        - 위에 미리 할당한 임시변수에 의해 최초 정의된 콜백함수의 참조가 결과적으로 아래와 같이 항상
          적용되므로, 항상 입력상자의 최신 상태로 업데이트.
        
        userName: userName = inputUserName.current.value
        subject: subject = inputSubject.current.value
        content: content = inputContent.current.value

        */
        if (userName && subject && content) {
            setUserList(userList => [            // 함수형 업데이트 방식을 이용함으로써 상위
                ...userList,                  // 컴포넌트(App)로 부터 상태값(userList)을
                {                           // 별도의 props 로 받을 필요 없음.
                    serialNum: serialNum.current++,
                    userName,
                    subject,
                    content,
                },
            ]);

            inputUserName.current.value =
                inputSubject.current.value =
                inputContent.current.value = '';
        }
    }

    function removeUserList(e) {
        const delSerialNum = inputDelSerialNum.current.value;

        e.preventDefault();

        if (delSerialNum) {     // 불필요한 로직 방어를 위한 코드.
            setUserList(userList => userList.filter(user => user.serialNum !== +delSerialNum));
            inputDelSerialNum.current.value = '';
        }
    }

    return (
        <>
            <form name='regidentUser' className="regidentUser" onSubmit={addUserList}>
                {/* label 은 css 에서 block 처리 */}
                <label className="userName">
                    사용자
                    <input
                        type="text"
                        name='inputUserName'
                        ref={inputUserName}
                        placeholder='한글로만 입력해라'
                    />
                </label>

                <label className="subject">
                    제목
                    <input
                        type="text"
                        name='inputSubject'
                        ref={inputSubject}
                        placeholder='제목은 파격적으로...'
                    />
                </label>

                <label className="content">
                    글쓰기
                    <textarea
                        name='inputContent'
                        ref={inputContent}
                        placeholder='이쁘게 쓰시오...'
                    ></textarea>
                </label>
                <button>등록</button>
            </form>

            <form name='delUser' className="delUser" onSubmit={removeUserList}>
                <label className="delSerialNum">
                    삭제 등록번호
                    <input
                        type="text"
                        name='inputDelSerialNum'
                        ref={inputDelSerialNum}
                        placeholder='삭제할 등록번호 입력해봐라...'
                    />
                </label>
                <button>삭제</button>
            </form>
        </>
    );
}