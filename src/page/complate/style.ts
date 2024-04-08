import styled from "styled-components";

export const ComplateLayout = styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const FullHeight = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Box = styled.div`
    text-align: center;
    box-sizing: border-box;
    padding: 0 20px;

    h4 {
        font-size: 28px;
        margin-bottom: ${32/28}em;
    }
    p {
        margin-top: 1em;
        font-size: 20px;
    }
    button {
        margin-top: 28px;
    }

`;