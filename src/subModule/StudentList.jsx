export default function StudentList({ studentInfo, setStudentInfo }) {
    function removeSt(event, ele) {
        event.preventDefault();
        setStudentInfo(studentInfo.filter(e => e.stNum !== ele.stNum));
    }

    return (
        <form onSubmit={removeSt}>
            {studentInfo.map(ele =>
                <div key={ele.stNum}>
                    {ele.stName}
                    <button onClick={event => removeSt(event, ele)}>등록취소</button>
                </div>
            )}
        </form>
    );

    // function removeSt(stNum) {
    //     setStudentInfo(studentInfo.filter(e => e.stNum !== stNum));
    // }

    // return (
    //     <form onSubmit={removeSt}>
    //         {studentInfo.map(ele =>
    //             <div key={ele.stNum}>
    //                 {ele.stName}
    //                 <button onClick={
    //                     event => {
    //                         event.preventDefault();
    //                         removeSt(ele.stNum)
    //                     }
    //                 }>등록취소</button>
    //             </div>
    //         )}
    //     </form>
    // );
}