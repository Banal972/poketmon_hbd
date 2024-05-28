import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./style";

export interface InputStyleProps {
    /**
     * 텍스트컬러를 넣습니다. 기본 흰색
     */
    textColor? : string
}

const meta : Meta<typeof Input> = {
    title : "레이아웃/Input",
    component : Input,
    tags : ["autodocs"],
    args : {
        placeholder : "입력창"
    }
}

export default meta;
type Story = StoryObj<typeof Input>;

export const Default : Story = {}