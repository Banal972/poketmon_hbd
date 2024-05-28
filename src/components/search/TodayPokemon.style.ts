import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    h4 {
        font-size: 28px;
    }
    dl {
        font-size: 22px;
        dt {
            font-size: 1em;
        }
        dd {
            font-size: 16px;
            margin-top: 1em;
        }
    }
`;