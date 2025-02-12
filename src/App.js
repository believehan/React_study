import "./App.css"
import Img from "./Img";
import NationContainer from "./NationContainer";
import NationBox from "./NationBox";

function App() {
    /* 
      배열에 JSX 로 구성된 요소들을 나열하고 이를 렌더링시 표현식블럭{}
      내에 참조값을 전달함으로써 다중 JSX 요소를 한꺼번에 렌더링 가능.
    */
    let nationBox = [];

    /* 
      루프 형태의 반복적인 JSX 요소 생성시에는 각 요소를 식별할 수
      있는 고유한 key 프로퍼티를 반드시 할당해야함에 주의.
      반복문을 적용치 않더라도 배열에 유사한 JSX 요소를 추가하는 경우
      에도 추적 효율을 위해 key 프로퍼티를 추가하는 것을 권장.
  
      JSX props 에 Template literals 지정시에는 Template literals 을
      기본적으로 문자열 형식이 아닌 동적 표현식으로 인식하여 반드시
      표현식 블럭{} 내에서 구현해야함에 주의.
    */
    for (let i = 0; i < 5; i++) {

        /* 
          JSX 표현식 블럭{} 내의 값은 기본적으로 모두 문자열 형식으로
          인식되므로 opacity 할당시 별도의 문자열 구분자 지정 불필요.
        */
        // nationBox[i] = <NationBox
        //     key={`nation${i}`}// 반복되는 요소가 들어가면 key프록스 사용하기 
        //                       // 단, key={`{i}`} 이렇게 사용하면 안됨
        //     nationNum={i + 1}
        //     opacity={i !== 0 ? .5 : undefined}
        // />;

        /* 배열 내장함수(push)를 활용한 요소 추가 */
        nationBox.push(
            <NationBox
                key={`nation${i}`}
                nationNum={i + 1}
                opacity={i !== 0 ? .5 : undefined}
            />
        );
    }

    return (
        <div id="main_container">
            <Img src="./images/bg1.jpg" alt="img" />
            <NationContainer>
                {nationBox}
            </NationContainer>
        </div>
    );
}

export default App;