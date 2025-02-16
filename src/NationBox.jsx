function NationBox({ opacity, imgList, isSelected }) {
    return (
      <a
      style={{ opacity: opacity }}
        href="#"
        className={`nationBox ${isSelected ? 'selected' : ''}`}
        data-value={imgList} // 클릭된 요소에서 value 가져오기
        onClick={(e) => e.preventDefault()} // 기본 링크 동작 방지
      >
        {imgList}
      </a>
    );
  }
  
  export default NationBox;
  