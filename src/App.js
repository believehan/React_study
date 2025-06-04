import axios from 'axios';

export default function App() {
   async function getServletData() {
      const pubDelData = {
         pubTrueId_: [54, 53],
         pubFalseId_: [52, 51],
         pudDelBtn: 'batchPubBtn',
      };

      const servletData = await axios.post(`${process.env.REACT_APP_API_URL}view/admin/notice/list`, pubDelData);

      console.log(servletData.data);
   }

   return (
      <>
         <h1>React 와 스프링 CORS 필터 설정 테스트</h1>
         <button onClick={getServletData}>테스트</button>
         <hr />
      </>
   );
}