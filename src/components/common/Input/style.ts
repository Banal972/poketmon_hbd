import styled from "styled-components";

export interface InputStyleProps {
    backgroundColor? : string;
    textColor? : string
}

export const InputComponent = styled.input<InputStyleProps>`
    all: unset;
    width: 100%;
    min-width: 0;
    background: ${({backgroundColor})=>(backgroundColor ? backgroundColor : "#73D6A6")};
    color: ${({textColor})=>(textColor ? textColor : "#fff")};
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 18px;
    font-family: "Pretendard";
    font-weight: 500;
`;
