import ReactDOM from 'react-dom/client';
import TestReact from './TestReact';
import TestReact2 from './TestReact2';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  {/* 모듈화 된 컴포넌트 호출을 통한 렌더링 요소를 할당 */}
  <TestReact />
  <TestReact2 />
  </>
);