import { useState } from 'react';
import './App.css';
import ContentLists from "./ContentLists/ContentLists";
import InputUserInfo from "./InputUserInfo/InputUserInfo";

function App() {
  const [userList, setUserList] = useState([ // 배열
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
    /* 
        링크 클릭시의 해당 사용자의 정보를 입력상자에
        할당하기 위한 상태값.
    */
    [inputData, setInputData] = useState({
      inputSerialNum: 0,
      inputUserName: '',
      inputSubject: '',
      inputContent: '',
      toggleBtnValue: false,   // 링크 클릭 여부 및 버튼들에 대한 클릭 가능 상태를 지정.
      //                       // ( true : 링크 클릭,  false : 수정/취소 버튼을 눌렀을 때 다시 등록 상태로 복귀 )
    }),
    /*
        데이터가 모두 채워지지 않은 상태에서 데이터를 등록 시 에러메시지가 출력되고,
        이때 링크를 클릭하면 errMessage 가 보이지 않아야함.
        그런데 errMessage 를 InputUserInfo 컴포넌트에 상태값으로 할당하면, 링크 클릭시에는
        해당 InputUserInfo 에서 이벤트가 발생되는 상황이 아님으로, 비동기 처리 불가.
        또한 동기 처리를 하게되면 동기에서의 상태값 변환은 무한루프에 빠지게 됨으로
        errMessage 를 InputUserInfo 컴포넌트에 상태값으로 할당하는 것은 불가.
        따라서 errMessage 를 상위 App 컴포넌트에 할당함으로써 링크 클릭시의 App 컴포넌트의
        비동기 처리 함수(getLoadList)에서 상태값을 변경 처리함으로써 해결.
    */
    [errMessage, setErrMessage] = useState('');

  /* 링크 클릭시의 해당 사용자의 정보를 입력상자에 할당하기 위한 비동기 함수. */
  function getLoadList(user) {
    setInputData({
      /* 
          inputSerialNum 은 링크 클릭 시의 입력상자에 대한 렌더링 업데이트 시에는
          불필요한 데이터지만 '수정' 버튼을 클릭했을 때는 해당 고유 serialNum 에
          해당하는 데이터를 매칭시켜 데이터를 수정해야 하므로 반드시 필요.
      */
      inputSerialNum: user.serialNum,
      inputUserName: user.userName,
      inputSubject: user.subject,
      inputContent: user.content,
      toggleBtnValue: true,
    });

    setErrMessage('');
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
        /* 
            링크를 클릭 시에만 InputUserInfo 컴포넌트에서 inputData 를 할당
            받음으로써 조건부 리렌더링을 통해 링크를 클릭한 사용자의 정보가
            입력상자에 로드되도록 설정.
        */
        inputData={inputData.toggleBtnValue ? inputData : ''}
        errMessage={errMessage}
        setErrMessage={setErrMessage}
      />
    </div>
  );
}

export default App;