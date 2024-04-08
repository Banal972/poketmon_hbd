import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import CricleBtn from ".";

const meta : Meta<typeof CricleBtn> = {
    title : "레이아웃/버튼/동그란버튼",
    component : CricleBtn,
    tags : ['autodocs'],
    args: { label : "Button",onClick: fn() },
}

export default meta;
type Story = StoryObj<typeof CricleBtn>;

export const Default : Story = {}