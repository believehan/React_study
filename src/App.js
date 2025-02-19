import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [resultMessage, setResultMessage] = useState(''),
        [queryData, setQueryData] = useState({});

    useEffect(() => {
        async function getClientData() {
            try {
                const getData = await axios.get('http://localhost:3001/clientData/1');

                setQueryData(getData.data);
                setResultMessage('데이터가 정상적으로 로드되었습니다.');
            } catch (err) {
                setResultMessage('경로 정보가 잘못되었거나 수신중에 오류가 발생되었습니다.');
            }
        }

        getClientData();
    }, []);

    async function delClientData() {
        const idsToDelete = [1, 3];

        /* 
            forEach 는 비동기 요청을 병렬로 실행하지만, for...of 는 순차 실행을 보장.
        */
        for (const i of idsToDelete) {
            try {
                const delData = await axios.delete(`http://localhost:3001/clientData/${i}`);

                setQueryData(delData.data);
                setResultMessage('데이터가 정상적으로 삭제 되었습니다.');
            } catch (err) {
                setResultMessage('경로 정보가 잘못되었거나 수신중에 오류가 발생되었습니다.');
            }
        }
    }

    return (
        <>
            <div>{resultMessage}</div>
            <hr />

            <div>고객명 : {queryData.name}</div>
            <div>고객번호 : {queryData.clientNumber}</div>
            <div>고객주소 : {queryData.address}</div>
            {queryData.phone && <div>연락처 : {queryData.phone}</div>}
            <hr />

            <div>
                <button onClick={delClientData}>고객 데이터 삭제</button>
            </div>
        </>
    );
}

export default App;