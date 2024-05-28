import { BtnProps } from "./CircleBtn.stories"
import * as S from "./style"

function CricleBtn(
{
  type,onClick,label,backgroundColor,textColor
} : 
  BtnProps
) {
  return (
    <S.BtnComponent
      type={type}
      onClick={onClick}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      {label}
    </S.BtnComponent>
  )
}

export default CricleBtn