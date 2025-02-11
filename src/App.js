function App() {
  return <h1>모듈 임포트1</h1>;
}

function TestReact() {
  return <h1>모듈 임포트2</h1>;
}

function TestReact2() {
  return <h2>모듈 임포트3</h2>
}

function DefaultCom() {
  return (
    <div>DefaultCom</div>
  )
}

/*
  export 시에는 * 적용불가
*/

export {App, TestReact, TestReact2};
export default DefaultCom;