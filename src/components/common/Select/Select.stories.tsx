import { Meta, StoryObj } from "@storybook/react";
import Select from ".";

const meta : Meta<typeof Select> = {
    title : "레이아웃/셀렉트",
    component : Select,
    tags : ['autodocs'],
    args : {
        children : 
        <>
            <option value="">월을 선택해주세요.</option>
            <option value="">1월</option>
            <option value="">1월</option>
            <option value="">1월</option>
            <option value="">1월</option>
            <option value="">1월</option>
            <option value="">1월</option>
            <option value="">1월</option>
        </>
    },
    argTypes : {
        children : {control : false }
    }
}

export default meta;
type Story = StoryObj<typeof Select>;

export const Default : Story = {}