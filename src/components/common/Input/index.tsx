import { InputComponent, InputStyleProps } from './style'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, InputStyleProps {}

export default function Input({id,value,defaultValue,placeholder,onChange,backgroundColor,textColor} : InputProps) {
  return (
    <InputComponent 
      backgroundColor={backgroundColor}
      textColor={textColor}
      id={id}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}