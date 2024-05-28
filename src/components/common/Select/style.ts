import styled from "styled-components";

export interface SelectStyleProps {
    backgroundColor? : string;
    textColor? : string;
}

export const SelectLayout = styled.div`
    position: relative;
    .icon {
        position: absolute;
        right: 2.5%;
        top: 50%;
        transform: translateY(-50%);
        color: #fff;
    }
`;

export const SelectComponent = styled.select<SelectStyleProps>`
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
    cursor: pointer;
`;