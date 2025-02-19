import { useRef, useState } from 'react';
import './App.css';
import ContentLists from "./ContentLists/ContentLists";
import InputUserInfo from "./InputUserInfo/InputUserInfo";

function App() {
  const [userList, setUserList] = useState([
    {
      serialNum: 2,
      userName: '김호준',
      subject: '괴물만들기',
      content: '야 ~ 밥목고 하자 ~',
    },
    {
      serialNum: 1,
      userName: '박성연',
      subject: '괴롭히기',
      content: '이 바보들아 왜 말을 안들어!!',
    },
  ]),
    [inputData, setInputData] = useState({
      inputSerialNum: 0,
      inputUserName: '',
      inputSubject: '',
      inputContent: '',
      toggleBtnValue: false,   // 링크 클릭 여부 및 버튼들에 대한 클릭 가능 상태를 지정.
      //                       // ( true : 링크 클릭,  false : 수정/취소 버튼을 눌렀을 때 다시 등록 상태로 복귀 )
    }),

    /*
        errMessage 의 경우 링크 클릭시 무조건 보이지 않게 하는 로직 처리를 위해
        App 컴포넌트에서 요소의 참조를 인지하여야 하는 이유로 App 컴포넌트에서
        참조를 유지해야함.
        따라서 모든 다른 요소들의 참조는 해당 컴포넌트(InputUserInfo)에 직접
        할당하는 것이 맞지만, 요소들의 모든 참조를 객체 useRef 로 통합하기 위한
        이유로 App 컴포넌트에 할당.
    */
    inputElements = useRef({
      serialNum: 3,
      inputUserName: null,
      inputSubject: null,
      inputContent: null,
      inputDelSerialNum: null,
      errMessage: null,
    });


  /*
      링크를 클릭했을 때 App 컴포넌트의 getLoadList 함수에서 inputData 에
      저장된 값을 inputUserName, inputSubject, inputContent 요소의 value
      속성에 값을 저장하는 로직을 바로 적용하면 아래와 같은 문제 발생.

      setInputData 함수가 함수내 동기식 처리후 나중에 업데이트하는 특성으로
      인해 inputUserName, inputSubject, inputContent 요소의 value 에는
      최초에는 빈 문자열 그대로 로드되고, 이후 링크 클릭시에는 직전 링크 클릭
      으로 실행된 setInputData 함수에 의해 변경되었던 값이 로드되는 문제점
      발생.
      따라서 setInputData 가 실행된 이후 InputUserInfo 컴포넌트가 리렌더링
      과정에서 요소들의 참조를 얻기 위해 자연스럽게 호출되는 getElements
      함수에서 링크를 클릭하고 모든 요소가 전역변수에 정상적으로 할당된 상태
      에서만 inputData 값이 해당 요소들의 value 속성에 할당되도록 설정.
  */
  function getLoadList(user) {
    inputElements.current.errMessage.classList.remove('visible');

    setInputData({
      inputSerialNum: user.serialNum,
      inputUserName: user.userName,
      inputSubject: user.subject,
      inputContent: user.content,
      toggleBtnValue: true,
    });
  }

  return (
    <div id='noticeboard'>
      <h1>게시판</h1>
      <ContentLists
        userList={userList}
        getLoadList={getLoadList}
      />
      <InputUserInfo
        setUserList={setUserList}
        inputData={inputData}
        inputElements={inputElements}
      />
    </div>
  );
}

export default App;