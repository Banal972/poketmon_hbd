import styled from "styled-components";

export const HeaderComponent = styled.header`
    display: flex;
    align-items: center;
    position: relative;
    height: 45px;
    flex: none;
    button {
        all: unset;
        left: 2.5%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
    h4 {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        font-size: 24px;
        font-weight: bold;
    }
`;