import { Meta, StoryObj } from "@storybook/react";
import Header from ".";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "../../../utils/GlobalStyles";

export interface HeaderProps {
    /**
     * Prev 버튼을 활성화 합니다.
     */
    prev? : boolean,
    /**
     * Prev버튼의 onClick이벤트를 넣습니다.
     */
    onClick? : React.MouseEventHandler<HTMLButtonElement>
}

const meta : Meta<typeof Header> = {
    title : "레이아웃/Header",
    component : Header,
    tags : ['autodocs'],
    decorators : [
        (Story)=>(
            <BrowserRouter>
                <GlobalStyles/>
                <Story/>
            </BrowserRouter>
        )
    ]
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
    args : {
        prev : false
    }
}