import NationBox from './NationBox';
function NationContainer({ imgList, selectIdx }) {
    // 받아온 값p을 자식 객체로 받아온다
    return (
        <>
            <div className='nation_container'>
                <NationBox />
            </div>
        </>
    );
}

export default NationContainer;