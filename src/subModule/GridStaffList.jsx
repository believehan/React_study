/* 
    상태 배열(staffList)에 JSX 요소를 직접 저장하는 것이 아닌, 직원명단만
    저장하여 이를 통해 map 메서드를 이용하여 렌더링시에만 JSX 요소들을 바로
    생성하여 표시함으로써, 메모리를 보다 효율적으로 관리 가능.
*/
export default function GridStaffList({ staffList }) {
    return (
        <>
            {staffList.map((v, i) => <div key={`staffList${i}`}>{v}</div>)}
        </>
    );
}