import styled from "styled-components";

export const FooterComponent = styled.footer`
    bottom: 0;
    width: 100%;
    height: 80px;
    background: #73D6A6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: none;
    p {
        font-family: "Pretendard";
        font-size: 14px;
        margin-top: 0.5em;
        font-weight: 500;
        color: #fff;
    }
    div {
        display: flex; gap: 5px;
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