import { BtnComponent, ButtonLayoutProps } from "./style";

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,ButtonLayoutProps {
  label : string,
  onClick? : React.MouseEventHandler<HTMLButtonElement>
}

function Btn({type,onClick,label,backgroundColor,textColor} : BtnProps) {
  return (
    <BtnComponent
      type={type}
      onClick={onClick}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      {label}
    </BtnComponent>
  )
}

export default Btn