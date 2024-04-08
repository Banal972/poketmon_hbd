import { IoChevronBack } from "react-icons/io5";
import { HeaderComponent } from "./style";
import { useNavigate } from "react-router-dom";

export interface HeaderProps {
  prev? : boolean,
  onClick? : React.MouseEventHandler<HTMLButtonElement>
}

function Header({prev,onClick} : HeaderProps) {
  
  return (
    <HeaderComponent>
      {
        prev && <button onClick={onClick}><IoChevronBack/></button>
      }
      <h4>HBD Pokemon</h4>
    </HeaderComponent>
  )

}

export default Header