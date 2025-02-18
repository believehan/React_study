/* 
    재사용성이 없는 컴포넌트에 대하여 모듈화가 아닌 함수로 처리.
    ContentLists 에서 직접 포함하여 export 하므로 EachList 는
    별도의 export 구문 미필요.
*/
function EachList({ user }) {
    return (
        <li className="eachList">
            <div>{user.serialNum}</div>
            <div>{user.subject}</div>
            <div>{user.userName}</div>
        </li>
    );
}

export default function ContentLists({ userList }) {
    return (
        <ul className='listTable'>
            {
                userList.map(user =>
                    <EachList
                        key={'sn' + user.serialNum} // 고유한 키값을 만들기위해 문자열을 사용
                        user={user} 
                    />
                )
            }
        </ul>
    );
}