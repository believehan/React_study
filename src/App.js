
import NationContainer from './NationContainer';
import { useState } from 'react';
import './App.css'

function App() {
  // 이미지 목록을 상태로 관리 (필요에 따라 나중에 업데이트 가능)
  const imgList = [
    './images/bg1.jpg',
    './images/bg2.jpg',
    './images/bg3.jpg',
    './images/bg4.jpg',
    './images/bg5.jpg'
  ];

  // 현재 선택된 이미지 인덱스를 상태로 관리 (초기값 0)
  const [selectIdx, setSelectIdx] = useState(0);

  const clickNation = (event) => {
    const value = event.target.dataset.value; // 클릭된 요소의 value 값 가져오기
    if (value) {
      setSelectIdx(Number(value) - 1); // 1부터 시작하는 숫자를 0부터 시작하는 인덱스로 변환
    }
  };


  return (
    <div className="main_container">
      <img src={imgList[selectIdx]} alt="imgBox" />

      <div className='nation_container' onClick={clickNation}>
        <NationContainer
          imgList={imgList}
          selectIdx={selectIdx}
        />
      </div>
    </div>
  );
}

export default App;

/* 이미지 불러오는 함수, 클릭이벤트,  

nation_container안에 네이션 박스클릭하면
 
*/