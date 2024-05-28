import { IoCaretDown } from "react-icons/io5";
import { SelectComponent, SelectLayout } from './style';
import { SelectProps } from "./Select.stories";

export default function Select(
  {name,register,children,backgroundColor,textColor} 
  : 
  SelectProps
) {
  return (
    <SelectLayout>
        <SelectComponent
          backgroundColor={backgroundColor}
          textColor={textColor}
          {...register?.(name)}
        >
          {children}
        </SelectComponent>
        <IoCaretDown className='icon'/>
    </SelectLayout>
  )
}
