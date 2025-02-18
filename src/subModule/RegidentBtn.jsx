import styled from 'styled-components';
import {darken, lighten} from 'polished';

/* 
    ThemeProvider 를 이용함으로써 하위 컴포넌트에 별도의 프롭스를 전달하지
    않아도 매개변수로 전달받은 props 객체의 theme 속성을 통해 상위에서
    전달된 테마 객체의 필드값들을 수신 가능.

===============================================================================

    ※ 버튼(button)의 경우 border 속성 값을 none 을 지정하거나 border-style
       값을 변경하면 기본 버튼이 가지는 특성을 읽어 버림에 주의.
       버튼이 가지는 기본 특성이라 함은 클릭효과나 호버시의 명도 변화등을 의미.
*/
const BtnStyle = styled.button`
    margin:0 50px;
    font:${props => props.theme.fontStyle};
    color:${props => props.theme.fontColor};
    border:${props => props.theme.borderStyle};
    background-color:${props => props.theme.bgColor};
    
    &:hover {
        cursor: pointer;
        background-color:${props => darken(.2, props.theme.bgColor)};
    }

    &:active {
        background-color:${props => lighten(.2, props.theme.bgColor)};
    }
`;

export default function RegidentBtn() {
    return (
        <BtnStyle>등록버튼</BtnStyle>
    );
}