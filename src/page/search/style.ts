import styled from "styled-components";

export const SearchLayout = styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const Box = styled.div`
    text-align: center;
    input,select {
        text-align: left;
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