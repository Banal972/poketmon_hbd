import { BtnComponent } from "./CricleBtn.style"

function CricleBtn({children} : {children : React.ReactNode}) {
  return (
    <BtnComponent>
      {children}
    </BtnComponent>
  )
}

export default CricleBtn