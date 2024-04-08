import { IoCaretDown } from "react-icons/io5";
import { SelectComponent, SelectLayout, SelectStyleProps } from './style';

interface SelectProps extends SelectStyleProps {
  children : React.ReactNode;
}

export default function Select({children,backgroundColor,textColor} : SelectProps) {
  return (
    <SelectLayout>
        <SelectComponent
          backgroundColor={backgroundColor}
          textColor={textColor}
        >
          {children}
        </SelectComponent>
        <IoCaretDown className='icon'/>
    </SelectLayout>
  )
}
