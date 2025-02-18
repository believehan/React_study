import React from 'react';
import './App.css';
import InputUserInfo from './subModule/InputUserInfo';
import ContentLists from './subModule/ContentLists';
import { useState } from 'react';

function App() {
  const [userList, setUserList] = useState([      // 실제 데이터 저장을 위한 상태값.
    {
       serialNum: 1,
       userName: '박성연',
       subject: '괴롭히기',
       content: '이 바보들아 왜 말을 안들어!!',
    },
    {
       serialNum: 2,
       userName: '김호준',
       subject: '괴물만들기',
       content: '야 ~ 밥목고 하자 ~',
    },
 ]);

 return (
    <div id='noticeboard'>
       <h1>게시판</h1>
       <ContentLists userList={userList} />
       <InputUserInfo
          setUserList={setUserList}
       />
    </div>
 );
}

export default App;