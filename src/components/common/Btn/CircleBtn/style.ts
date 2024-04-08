import styled from "styled-components";
import { ButtonLayoutProps } from "../Btn/style";

export const BtnComponent = styled.button<ButtonLayoutProps>`
    all: unset;
    background: ${({backgroundColor})=>(backgroundColor ? backgroundColor : "#1BDC7F")};
    color: ${({textColor})=>(textColor ? textColor : "#fff")};
    font-size: 24px;
    width: ${200/24*1}em;
    height: ${45/24*1}em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border-radius: 1000px;
    box-shadow: 2px 2px 4px rgba(000,000,000,0.25);
    cursor: pointer;
`;