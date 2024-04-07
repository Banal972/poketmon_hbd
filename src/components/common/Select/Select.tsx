import styled from 'styled-components'
import { IoCaretDown } from "react-icons/io5";

const SelectLayout = styled.div`
    position: relative;
    .icon {
        position: absolute;
        right: 2.5%;
        top: 50%;
        transform: translateY(-50%);
        color: #fff;
    }
`;

const SelectComponent = styled.select`
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
    cursor: pointer;
`;

export default function Select() {
  return (
    <SelectLayout>
        <SelectComponent>
            <option value="">월을 선택해주세요.</option>
            <option value="">1월</option>
            <option value="">1월</option>
            <option value="">1월</option>
            <option value="">1월</option>
            <option value="">1월</option>
            <option value="">1월</option>
            <option value="">1월</option>
        </SelectComponent>
        <IoCaretDown className='icon'/>
    </SelectLayout>
  )
}
