import './App.css';
import bg1 from './assets/images/bg1.jpg';

/* 
  < src/assets 폴더 내 파일 구성 > - assets 은 관습적 표기

- 이미지, 아이콘, CSS 파일, JSON 등 전역 사용 리소스 저장.
  src/assets 폴더 내 파일들을 구성함으로써, 리액트 프로젝트 생성시 자동 포함되는
  Webpack(번들러) 이 이미지, CSS, JavaScript 파일 등을 번들링 및 최적화.
  이는 파일을 하나로 묶어 HTTP 요청을 줄이고 로딩 속도를 빠르게 하고 사용하지 않는
  코드나 리소스를 제거하여 앱 크기를 최적화하는 것을 의미.
  
  ※ public 폴더 내 구성되는 파일들은 외부에서 직접 접근이 필요한 파일들로
    구성함므로써, Webpack 의 대상이 되지 않음.

  ===============================================================================
  
  ※ 번들링 (Bundling)
    - 웹 애플리케이션을 구성하는 여러 개의 모듈(JavaScript, CSS, 이미지 등)을
      하나의 파일 또는 여러 개의 최적화된 파일로 묶는 과정.
*/
function App() {

    /*
        src 폴더 내 구성된 파일을 로드하기 위해서는 반드시 위와같이
        해당 리소스 파일을 import 해서 아래와같이 사용해야함에 주의.
    */
    return <img src={bg1} alt="img" />;
}

export default App;