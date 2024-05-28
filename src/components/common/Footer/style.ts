import styled from "styled-components";

export const FooterComponent = styled.footer`
    bottom: 0;
    width: 100%;
    height: 100px;
    background: ${({theme})=>theme.colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: none;
    gap: 15px;
    p {
        font-family: "Pretendard";
        font-size: 12px;
        font-weight: 500;
        color: #fff;
    }
    div {
        display: flex; 
        gap: 10px;
    }
`;

export const LinkBtn = styled.a`
    width: 20px;
    height: 20px;
    background: ${prop=>prop.color ? prop.color : "#fff"};
    border-radius: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
`;