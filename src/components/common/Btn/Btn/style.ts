import styled from "styled-components";

export interface ButtonLayoutProps {
	backgroundColor? : string;
    textColor? : string
}

export const BtnComponent = styled.button<ButtonLayoutProps>`
    all: unset;
    background: ${({theme})=>theme.colors.primary};
    color: ${({textColor})=>(textColor ? textColor : "#fff")};
    font-size: 16px;
    width: 125px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border-radius: 4px;
    box-shadow: 2px 2px 4px rgba(000,000,000,0.25);
    position: relative;
    cursor: pointer;
    font-family: "Pretendard";
    font-weight: 500;
    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        transition: box-shadow .4s;
    }
    &:hover {
        &::after {
            box-shadow: 2px 2px 4px rgba(000,000,000,0.25) inset;
        }
    }
`;