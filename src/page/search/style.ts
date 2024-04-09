import styled from "styled-components";

export const SearchLayout = styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const Box = styled.div`
    text-align: center;
    h4 {
        font-size: 28px;
        margin-bottom: 10px;
    }
    dl {
        font-size: 28px;
        dt {
            font-size: 1em;
            margin-top: 10px;
        }
        dd {
            font-size: 16px;
            margin-top: 1em;
        }
    }

    input,select {
        margin-top: 48px;
    }

    button {
        margin-top: 36px;
    }

    .swiper-slide {
        box-sizing: border-box;
        padding: 0 20px;
    }
`;