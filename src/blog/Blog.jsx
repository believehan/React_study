import { useSearchParams, useLocation } from 'react-router-dom';

export default function Blog({ users }) {
    const [searchParams] = useSearchParams(),
        query = searchParams.get("userId");

    /* 
        < useLocation Hook >

    -  현재 브라우저 경로 및 라우팅 관련 정보를 제공.

    ==================================================================

    - pathname: 쿼리 스트링을 제외한 현재 경로 부분을 나타내는 문자열을 반환.

    - search: 현재 경로의 쿼리 스트링을 나타내는 문자열 반환.
    */
    const location = useLocation();

    return (
        <div>
            <h2>{`${query} 의 블로그`}</h2>
            <p>{users.find(e => e.userId === query).contents}</p>
            <p>{location.pathname}</p>
            <p>{location.search}</p>
        </div>
    );
}