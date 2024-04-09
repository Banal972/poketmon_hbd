import { Meta, StoryObj } from "@storybook/react";
import Btn from ".";
import { fn } from "@storybook/test";

const meta : Meta<typeof Btn> = {
    title : "레이아웃/버튼/Btn",
    component : Btn,
    tags : ['autodocs'],
    args: { label : "Button",onClick: fn() },
}

export default meta;
type Story = StoryObj<typeof Btn>;

export const Default : Story = {}