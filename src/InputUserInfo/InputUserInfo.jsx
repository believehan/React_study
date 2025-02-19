export default function InputUserInfo({ setUserList, inputData, inputElements }) {
    const errText = '데이터가 모두 입력되어야 합니다.';

    let inputUserName,      // 요소들에 대한 접근 편의성을 위해 getElements 함수에서의
        inputSubject,       // 요소 할당을 위한 복잡한 로직에도 불구하고 객체가 아닌,
        inputContent,       // 일반 변수들로 선언.
        inputDelSerialNum,
        errMessage;

    function getElements(ele) {
        if (ele) {
            /* 
                name 속성은 input, select, textarea 요소 등과 같은 폼 컨트롤
                요소에만 적용 가능.
                errMessage 를 적용한 div 와 같은 일반 컨테이너 요소에 name
                속성을 지정하면 인지하지 못함에 주의.
                따라서 아래와 같이 모든 요소에 공통적인 처리를 위해 name 이
                아닌 className 속성을 활용.
            */
            inputElements.current[ele.className] = ele;

            const eleRef = inputElements.current[ele.className];

            switch (ele.className) {
                case 'inputUserName':
                    inputUserName = eleRef;
                    break;
                case 'inputSubject':
                    inputSubject = eleRef;
                    break;
                case 'inputContent':
                    inputContent = eleRef;
                    break;
                case 'inputDelSerialNum':
                    inputDelSerialNum = eleRef;
                    break;

                /* 
                    inputSubject 와 inputContent 가 모두 입력되지 않은 상태에서는
                    errMessage 요소의 클래스 'visible' 이 추가되어 클래스명이
                    'errMessage visible' 가 됨으로써 전역적으로 사용되는 errMessage
                    변수에 값이 할당되지 않는 문제점 발생.
                    따라서 아래와 같이 default 로 빠지는 경우에도 할당이 되도록 설정.
                    결과적으로 inputElements 객체에는 'errMessage visible' 필드가
                    추가되는 결과.
                */
                case 'errMessage':
                default:
                    errMessage = eleRef;
            }

            /* 
                링크를 클릭했을 때 요소들을 할당하는 getElements 함수가 렌더링 과정에서
                순차적으로 호출됨으로써 컴포넌트 내 전역변수에 모든 요소가 한꺼번에 할당
                되지는 않아, 아래와 같이 링크를 클릭한 시점에서 모든 요소가 전역변수에
                정상적으로 로드된 경우에만 각 요소의 value 속성에 해당 링크 요소의 데이터가
                전달되도록 설정.
            */
            if (
                inputData.toggleBtnValue &&
                inputUserName && inputSubject && inputContent
            ) {
                /* 
                    링크를 클릭했을 때 App 컴포넌트의 getLoadList 함수에서 inputData 에
                    저장된 값을 inputUserName, inputSubject, inputContent 요소의 value
                    속성에 값을 저장하는 로직을 바로 적용하면 아래와 같은 문제 발생.

                    setInputData 함수가 함수내 동기식 처리후 나중에 업데이트하는 특성으로
                    인해 inputUserName, inputSubject, inputContent 요소의 value 에는
                    최초에는 빈 문자열 그대로 로드되고, 이후 링크 클릭시에는 직전 링크 클릭
                    으로 실행된 setInputData 함수에 의해 변경되었던 값이 로드되는 문제점
                    발생.
                    따라서 아래와 같이 setInputData 가 실행된 이후 리렌더링 과정에서
                    요소들의 참조를 얻기 위해 자연스럽게 호출되는 getElements 함수에서
                    링크를 클릭하고 모든 요소가 전역변수에 정상적으로 할당된 상태에서만
                    inputData 값이 해당 요소들의 value 속성에 할당되도록 설정.
                */
                inputUserName.value = inputData.inputUserName;
                inputSubject.value = inputData.inputSubject;
                inputContent.value = inputData.inputContent;
            }
        }
    }

    function editData(e) {
        const userName = inputUserName.value,
            subject = inputSubject.value,
            content = inputContent.value;

        e.preventDefault();

        switch (e.target.name) {
            case 'regidentBtn':
                if (userName && subject && content) {
                    setUserList(userList => [
                        {
                            serialNum: inputElements.current.serialNum++,
                            userName,
                            subject,
                            content,
                        },
                        ...userList,
                    ]);

                    errMessage.classList.remove('visible');
                } else {
                    errMessage.classList.add('visible');
                }
                break;

            case 'editUserBtn':
                setUserList(userList =>
                    userList.map(user => {
                        if (user.serialNum === inputData.inputSerialNum) {
                            if (subject && content) {
                                inputData.toggleBtnValue = false;
                                errMessage.classList.remove('visible');

                                return {
                                    ...user,
                                    subject,
                                    content,
                                }
                            } else {
                                errMessage.classList.add('visible');
                            }
                        }
                        
                        return user;
                    })
                );

                break;

            case 'cancelBtn':
                setUserList(userList => [
                    ...userList,
                ]);
                inputData.toggleBtnValue = false;
                errMessage.classList.remove('visible');

                break;

            default:
        }

        inputUserName.value = inputSubject.value = inputContent.value = '';
    }

    function removeUserList(e) {
        const delSerialNum = inputDelSerialNum.value;

        e.preventDefault();

        if (delSerialNum) {
            setUserList(userList =>
                userList.filter(
                    user => user.serialNum !== +delSerialNum
                )
            );
            inputDelSerialNum.value = '';
        }
    }

    return (
        <>
            <form name='regidentUser' className="regidentUser" onSubmit={editData}>
                <label className="userName">
                    사용자
                    <input
                        type="text"
                        name='inputUserName'
                        className="inputUserName"
                        ref={getElements}
                        placeholder='한글로만 입력해라'
                        disabled={inputData.toggleBtnValue}
                    />
                </label>

                <label className="subject">
                    제목
                    <input
                        type="text"
                        name='inputSubject'
                        className="inputSubject"
                        ref={getElements}
                        placeholder='제목은 파격적으로...'
                    />
                </label>

                <div className='errMessage' ref={getElements} >
                    {errText}
                </div>

                <label className="content">
                    글쓰기
                    <textarea
                        name='inputContent'
                        className="inputContent"
                        ref={getElements}
                        placeholder='이쁘게 쓰시오...'
                    ></textarea>
                </label>
                <button name='regidentBtn' onClick={editData} disabled={inputData.toggleBtnValue}>등록</button>
                <button name='editUserBtn' onClick={editData} disabled={!inputData.toggleBtnValue}>수정</button>
                <button name='cancelBtn' onClick={editData} disabled={!inputData.toggleBtnValue}>취소</button>
            </form>

            <form name='delUser' className="delUser" onSubmit={removeUserList}>
                <label className="delSerialNum">
                    삭제 등록번호
                    <input
                        type="text"
                        name='inputDelSerialNum'
                        className="inputDelSerialNum"
                        ref={getElements}
                        placeholder='삭제할 등록번호 입력해봐라...'
                    />
                </label>
                <button disabled={inputData.toggleBtnValue}>삭제</button>
            </form>
        </>
    );
}