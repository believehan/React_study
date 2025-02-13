
import NationContainer from './NationContainer';
const imgList = ['./images/bg1.jpg', './images/bg2.jpg', './images/bg3.jpg','./images/bg4.jpg'];
const selectIdx = [];
function clickNation() {

}
function App() {
  return (
    <div className="main_container">
      <img src={imgList[selectIdx]} alt="imgBox" />

      <div className='nation_container' onClick={clickNation}>
        <NationContainer
          imgList={imgList}
          selectIdx={selectIdx}
        />
      </div>
    </div>
  );
}//함수는 다지웠음 

export default App;