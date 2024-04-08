import { ButtonLayoutProps } from "../Btn/style"
import { BtnComponent } from "./style"

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,ButtonLayoutProps {
  label : string,
  onClick? : React.MouseEventHandler<HTMLButtonElement>
}

function CricleBtn({type,onClick,label,backgroundColor,textColor} : BtnProps) {
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

export default CricleBtn