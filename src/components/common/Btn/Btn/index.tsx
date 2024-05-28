import { BtnProps } from "./Btn.stories";
import { BtnComponent } from "./style";


function Btn(
  {
    type,onClick,label,backgroundColor,textColor
  } 
  : 
  BtnProps
) {
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