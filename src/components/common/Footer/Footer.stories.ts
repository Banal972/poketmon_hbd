import { Meta, StoryObj } from "@storybook/react";
import Footer from ".";

const meta : Meta<typeof Footer> = {
    title : "레이아웃/푸터",
    component : Footer,
}

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default : Story = {}