import { IoCaretDown } from "react-icons/io5";
import { SelectComponent, SelectLayout, SelectStyleProps } from './style';
import { FieldValues, UseFormRegister } from "react-hook-form";

interface SelectProps extends SelectStyleProps {
  children : React.ReactNode;
  register? : UseFormRegister<FieldValues>;
  name : string;
}

export default function Select({name,register,children,backgroundColor,textColor} : SelectProps) {
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
