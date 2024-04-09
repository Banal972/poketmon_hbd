import styled from "styled-components";

export const CompleteLayout = styled.main`
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
    position: relative;

    p {
        font-size: 30px;
    }

    h4 {
        font-size: 28px;
        margin-bottom: 10px;
        span {
            font-weight: bold;
        }
    }
    dl {
        dt {
            margin-top: 0;
            font-size: 24px;
            font-weight: bold;
        }
        dd {
            font-size: 20px;
            margin-top: 10px;
        }
    }
    button {
        margin-top: 28px;
    }

`;


export const LoadingLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;