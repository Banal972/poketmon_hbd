import styled from "styled-components";
import { InputStyleProps } from "./Input.stories";

export const Input = styled.input<InputStyleProps>`
    all: unset;
    width: 100%;
    min-width: 0;
    background: ${({theme})=>theme.colors.primary};
    color: ${({textColor})=>(textColor ? textColor : "#fff")};
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 14px;
    font-family: "Pretendard";
    font-weight: 500;

    &::placeholder {
        color: #fff;
    }

`;
