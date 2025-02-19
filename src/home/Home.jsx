import { Navigate, Route, Routes } from 'react-router-dom';
import WelcomeToPage from '../welcomeToPage/WelcomeToPage';


export default function Home({ firstVisit }) {
    return (
        <>
            <h1>홈 페이지</h1>

            {firstVisit && <Navigate to="/WelcomeToPage" />}

            {/* 
                컴포넌트간 종속 관레를 이용한 서브라우팅 구현시에는 아래와같이
                새로운 서브 Routes 안에 Route 구현.
            */}
            <Routes>
                <Route path='/WelcomeToPage' element={<WelcomeToPage />} />
            </Routes>
        </>
    );
}