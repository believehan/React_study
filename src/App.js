import { useRef, useState } from 'react';
import StudentList from './subModule/StudentList';

export default function App() {
    const [studentInfo, setStudentInfo] = useState(
        [
            {
                stNum: 'st_' + 1,
                stName: '박성연',
            },
            {
                stNum: 'st_' + 2,
                stName: '홍길동',
            },
        ]
    ),
        inputBox = useRef(),
        stNum = useRef(3);

    /* ========================================================================= */

    /*
        SPA 기반의 리액트에서는 form 태그에 action 속성이 아닌,
        onSubmit 핸들러를 이용하여 데이터 처리 및 업데이트 관리를 하고
        form 요소의 데이터를 서버로 전송할 때도 AJAX 나 Fetch API와 같은
        비동기 요청을 통해 처리하는 방식이 일반적.
        - 리액트를 빌드하면 결과적으로 일반 HTML 과 JS 로 빌드되므로
          action 속성을 사용하지 못하는 것은 아님.
          axios 와 같은 비동기 통신을 사용한다면, 일반적인 input 상태 관리
          방식을 사용하여 객체 형태로 데이터를 전송(post)하면 되므로 굳이
          <form> 태그나 onSubmit 핸들러를 사용할 필요가 없음.
          또한, onSubmit 핸들러를 이용하거나 form.submit()을 호출하면 페이지가
          새로고침될 수 있지만, axios 와 같은 비동기 통신을 이용함으로써, 이를
          방지하기 위한 추가적인 로직 불필요.

        버튼에 대한 type="submit" 설정은 브러우저로 하여금 기본 제출 동작
        으로 인한 페이지 새로 고침 현상을 유발하는데 이를 방지하기 위해서는
        반드시 preventDefault 메서드를 적용해야함에 유의.
    */
    function regidentSt(e) {
        e.preventDefault();         // 등록 버튼에 대한 기본 제출 동작 제거.

        const inputData = inputBox.current;

        if (inputData.value) {
            const addSt = {
                stNum: 'st_' + stNum.current,
                stName: inputData.value,
            }

            setStudentInfo([...studentInfo, addSt]);
            stNum.current++;
            inputData.value = '';
        }

        inputData.focus();
    }

    return (
        <>
            {/*
                등록 버튼을 클릭했을 때의 동작처리를 action 속성이 아닌,
                onSubmit 핸들러에 할당하기 위해 해당 동작처리 함수의 참조를
            핸들러에 전달.
            form 태그 내에서 버튼에 대한 onSubmit 핸들러를 등록하면
            별도의 Enter 키   입력에 대한 제어처리가 필요없이 Enter 키를
            눌렀을 때에도 제출 버튼을 누르는 것과 동일하게 처리.
            */}
            <form onSubmit={regidentSt}>
                <input
                    name='inputBox'
                    type="text"
                    ref={inputBox}
                />
                <button>등록</button>
            </form>

            <StudentList
                studentInfo={studentInfo}
                setStudentInfo={setStudentInfo}
            />
        </>
    );
}