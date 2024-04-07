import styled from 'styled-components'

const InputComponent = styled.input`
    all: unset;
    width: 100%;
    min-width: 0;
    background: #73D6A6;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 18px;
    color: #fff;
    font-family: "Pretendard";
    font-weight: 500;
`;

export default function Input() {
  return (
    <InputComponent placeholder="테스트"/>
  )
}
