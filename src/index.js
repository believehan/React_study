
import ReactDOM from 'react-dom/client';

/*
  <모듈에서 컴포넌트를 export 할 때 default 지정자를 포함한 경우의 import 형식
  - 모듈의 객체 참조명에 대한 블럭{}(객체 구조분해 할당) 생략 가능.
  단, 이는 모듈에서 객체 export 시 default 지정자를 지정한 경우만 가능.
  또한 이경우 임포트 컴포넌트 객체명(App)을 모듈의 디폴트 함수나 클래스명과
  다르게 적용하거나 모듈에서의 export 컴포넌트명(함수명) 생략해도 무방. (권장되지는 않음)
*/
import App from './App';
import App2 from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <App />
  <App2 />
  </>
)