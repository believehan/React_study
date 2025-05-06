function App() {
  function transData(e) {
      e.preventDefault();

      const { dataTrans } = document;

      dataTrans.action = `${process.env.REACT_APP_API_URL}test4`;
      dataTrans.submit();
  }

  return (
      <>
          <h1>필터를 이용한 한글 설정과 CORS 설정</h1>
          <hr />

          <form name="dataTrans" method="post">
              <div>
                  <div>
                      {/* 
                   리액트에서는 label 에 for 가 아닌, htmlFor 속성을 적용해야함에 주의.
                */}
                      <label htmlFor="content">전송 내용 입력 :</label>
                  </div>

                  <textarea rows="20" cols="100" name="content" id="content"></textarea>
              </div>

              <button name="submitBtn" onClick={transData}>전송</button>
          </form>
      </>

  );
}

export default App;