import styled from "styled-components";

export const MainLayout = styled.main`
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
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Ball = styled.div`
    img {
        width: 100px;
    }
`;