import { BtnComponent } from "./Btn.style";

function Btn({children} : {children :React.ReactNode}) {
  return (
    <BtnComponent>
        {children}
    </BtnComponent>
  )
}

export default Btn