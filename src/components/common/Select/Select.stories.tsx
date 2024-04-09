import { Meta, StoryObj } from "@storybook/react";
import Select from ".";

const meta : Meta<typeof Select> = {
    title : "레이아웃/Select",
    component : Select,
    tags : ['autodocs'],
    args : {
        children : [
            <>
                <option value="">월을 선택해주세요.</option>
                {
                    Array.from({length : 12},(_,index)=>12-index).map((e,i)=><option key={i} value={e}>{`${e}월`}</option>)
                }
            </>
        ],
        name : "abc",
    },
    argTypes : {
        children : {control : false },
        register : {
            description : "useForm의 register를 보내줍니다.",
        },
        name : {
            description : "register 안에 넣어줄 name을 적습니다."
        }
    }
}

export default meta;
type Story = StoryObj<typeof Select>;


/* const SelectHooks = ()=>{

    const {register} = useForm();

    return (
        <Select name="abc" register={register}>
            <>
                <option value="">월을 선택해주세요.</option>
                {
                    Array.from({length : 12},(_,index)=>12-index).map((e,i)=><option key={i} value={e}>{`${e}월`}</option>)
                }
            </>
        </Select>
    )

} */

export const Default : Story = {};