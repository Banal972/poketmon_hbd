import { Meta, StoryObj } from "@storybook/react";
import Btn from ".";
import { fn } from "@storybook/test";
import { ButtonLayoutProps } from "./style";

export interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,ButtonLayoutProps {
    label : string,
    onClick? : React.MouseEventHandler<HTMLButtonElement>
}

const meta : Meta<typeof Btn> = {
    title : "레이아웃/버튼/Btn",
    component : Btn,
    tags : ['autodocs'],
    args: { label : "Button",onClick: fn() },
}

export default meta;
type Story = StoryObj<typeof Btn>;

export const Default : Story = {}