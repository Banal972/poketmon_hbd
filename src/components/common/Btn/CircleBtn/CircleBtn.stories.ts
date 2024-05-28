import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import CricleBtn from ".";
import { ButtonLayoutProps } from "../Btn/style";

export interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,ButtonLayoutProps {
    /**
     * 버튼안에 내용을 입력합니다.
     */
    label : string,
    /**
     * onClick 이벤트를 넣습니다.
     */
    onClick? : React.MouseEventHandler<HTMLButtonElement>
}

const meta : Meta<typeof CricleBtn> = {
    title : "레이아웃/버튼/CircleBtn",
    component : CricleBtn,
    tags : ['autodocs'],
    args: { label : "Button",onClick: fn() },
}

export default meta;
type Story = StoryObj<typeof CricleBtn>;

export const Default : Story = {}