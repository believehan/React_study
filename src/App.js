import { useState } from 'react';

/* 
    스타일 컴포넌트의 상속은 상위에서 하위 컴포넌트로 전이되는 것이   자연스러우므로
    전역 선언으로 인한 로직 실행 순서의 문제점을 회피 하고자 스타일 컴포넌트들을
    모두 모듈화시키고, 상속받고자 하는 스타일 컴포넌트 모듈에서 직접 부모 스타일
    컴포넌트를 임포트한 후 상속을 받음으로써 전역 선언으로 발생하는 로직 순서에
    의한 문제점을 간편히 해결 가능.

    아래 예시에서는 css_App 모듈을 먼저 임포트하여 그 내부에 있는 DivStyle 스타일
    컴포넌트의 전역 선언이 먼저 이루어지고, 이후 ChangeStateValue2 모듈을 임포트함
    으로써 그 내부에서 다시 css_ChangeStateValue2 모듈을 임포트하여 그 내부에 있는
    상속을 위한 DivStyle2 스타일 컴포넌트 전역 선언이 이루어지므로 선언 순서로 인한
    문제점을 간단히 해결.
    결과적으로 스타일 컴포넌트들을 모두 모듈화시킴으로써 상속으로 받고자 하는 스타일
    모듈에 직접 부모 스타일 컴포넌트 모듈을 임포트함으로써 앞에서와 같은 전역 선언으로
    인한 실행 순서에 신경을 필요가 없어짐. 따라서 아래의 경우에도 스타일 컴포넌트
    모듈간에 직접 필요한 모듈들을 임포트하여 사용함으로써, 아래의 모듈간 임포트 순서가
    영향을 받지않아 css_App 모듈과 ChangeStateValue2 모듈의 임포트 순서를 바꿔도 실행에
    전혀 문제가 발생치 않는 것을 확인 가능.
*/
import DivStyle from './styledJs/css_App';
import ChangeStateValue from "./changeStateValue/ChangeStateValue";
import ChangeStateValue2 from "./changeStateValue2/ChangeStateValue2";

function App() {
    const [aSyncValue, setAsyncValue] = useState(0);

    function transValue(value) {
        setAsyncValue(value);
    }

    return (
        <>
            <ChangeStateValue transValue={transValue} />
            <ChangeStateValue2 aSyncValue={aSyncValue} />
            <DivStyle>
                {aSyncValue}
            </DivStyle>
        </>
    );
}

export default App;