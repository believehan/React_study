import axios from 'axios';

export default function App() {
  async function getServletData() {
    const pubDelData = {
      pubTrueId_: [1, 2],
      pubFalseId_: [3, 4],
      pudDelBtn: '한글',
    };

    const servletData = await axios.post(`${process.env.REACT_APP_API_URL}test`, pubDelData);

    console.log(servletData.data);
  }

  return (
    <>
      <h1>React 와 스프링 부트 CORS 필터 설정 테스트</h1>
      <button onClick={getServletData}>테스트</button>
      <hr />
    </>
  );
}