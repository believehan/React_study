import styled from 'styled-components';
import { darken, lighten } from 'polished';

const BtnStyle = styled.button`
    font:${props => props.theme.fontStyle};
    color:${props => props.theme.fontColor};
    border:${props => props.theme.borderStyle};
    background-color:${props => props.theme.bgColor};

    border-radius: 10%/30%;
    
    &:hover {
        cursor: pointer;
        background-color:${props => darken(.2, props.theme.bgColor)};
    }

    &:active {
        background-color:${props => lighten(.2, props.theme.bgColor)};
    }
`;

export default function EditBtn() {
    return (
        <BtnStyle>수정버튼</BtnStyle>
    );
}