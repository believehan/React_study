import NationBox from './NationBox';

function NationContainer({ imgList, selectIdx }) {

     // opacity 값을 결정하는 함수
  const getOpacity = (index) => {
    return selectIdx === index ? '1' : '0.5';
  };

  return (
    <div className='nation_container'>
      <NationBox opacity = {getOpacity(0)} imgList={1} isSelected={selectIdx === 0} />
      <NationBox opacity = {getOpacity(1)} imgList={2} isSelected={selectIdx === 1} />
      <NationBox opacity = {getOpacity(2)} imgList={3} isSelected={selectIdx === 2} />
      <NationBox opacity = {getOpacity(3)} imgList={4} isSelected={selectIdx === 3} />
      <NationBox opacity = {getOpacity(4)} imgList={5} isSelected={selectIdx === 4} />
    </div>
  );
}

export default NationContainer;