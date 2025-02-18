import styled from 'styled-components';
import DivStyle from '../styledJs/css_App';

/* 
    스타일 컴포넌별 모듈화를 통해 필요한 부분에서 위와 같이 부모 스타일
    컴포넌트 모듈을 임포트한후 아래와 같이 전역 선언으로 스타일 상속을
    받으면 되므로 전역 선언에 의한 모듈 임포트 순서 영향을 회피.
*/
const DivStyle2 = styled(DivStyle)`
    color: blue;
    border:1px solid;
`;

export default DivStyle2;