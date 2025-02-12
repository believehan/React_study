/* 
    /* 
    < Page nation 구현 > - 태그간 종속 관계

- 아래 HTML 구조와 같은 형태로 구성되도록 리액트 구현.

=============================================================================
    
    < 조건 >

1) NationBox 컴포넌트는 NationContainer 에 컴포넌트 태그간 종속 관계가 되도록 구현.

2) NationBox 의 클래스 넘버링(nation1 ~ nation5)을 삭제하고 CSS 파일의 opacity 도
   삭제하되, 이를 대체하여 컴포넌트 태그에서 직접 프로퍼티를 전달하는 방식으로 구현.
   단, 디폴트 파라미터나 defaultProps 필드 활용.

=============================================================================

    < HTML 구조 >

<div id="main_container">
    <img src="./images/bg1.jpg" alt="img">

    <div class="nation_container">
        <a href="#" class="nationBox nation1">1</a>
        <a href="#" class="nationBox nation2">2</a>
        <a href="#" class="nationBox nation3">3</a>
        <a href="#" class="nationBox nation4">4</a>
        <a href="#" class="nationBox nation5">5</a>
    </div>
</div>

*/

import './App.css'
import Img from './Img';
import NationContainer from './NationContainer';
import NationBox from './NationBox';

function App() {
  return (
    <div id="main_container">
      <Img src="bg1" alt='a' />
      <NationContainer>
        <NationBox opacity = "1" value='1' />
        <NationBox opacity = "0.5" value='2' />
        <NationBox opacity = "0.5" value='3' />
        <NationBox opacity = "0.5" value='4' />
        <NationBox opacity = "0.5" value='5' />
      </NationContainer>
    </div>
  );
}
// 모듈간 종속관계
export default App;