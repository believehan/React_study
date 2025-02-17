import { useState } from 'react';
import './App.css';
import ContentLists from './subModule/ContentLists';
import InputUserInfo from './subModule/InputUserInfo';

// 게시판의 등록번호는 고유해야함에 주의. 즉, 삭제된 번호는 다시 생성 불가.
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