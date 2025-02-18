import { useRef } from 'react';
export default function InputUserInfo({ setUserList }) {
    const inputUserName = useRef(),
        inputSubject = useRef(),
        inputContent = useRef(),
        inputDelSerialNum = useRef(),
        serialNum = useRef(3);

    function regident_del(e, action) {
        e.preventDefault();

        if (action === 'reg') {
            const userName = inputUserName.current.value,
                subject = inputSubject.current.value,
                content = inputContent.current.value;

            if (userName && subject && content) {
                setUserList(userList => [
                    ...userList,
                    {
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
        } else {
            const delSerialNum = inputDelSerialNum.current.value;

            if (delSerialNum) {
                setUserList(userList => userList.filter(user => user.serialNum !== +delSerialNum));
                inputDelSerialNum.current.value = '';
            }
        }
    }

    return (
        <>
            <form name='regidentUser' className="regidentUser" onSubmit={regident_del}>
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
                <button onClick={e => regident_del(e, 'reg')} >등록</button>

                <label className="delSerialNum">
                    삭제 등록번호
                    <input
                        type="text"
                        name='inputDelSerialNum'
                        ref={inputDelSerialNum}
                        placeholder='삭제할 등록번호 입력해봐라...'
                    />
                </label>
                <button onClick={e => regident_del(e, 'del')}>삭제</button>
            </form>
        </>
    );
}