import { IoChevronBack } from "react-icons/io5";
import { HeaderComponent } from "./style";
import { useNavigate } from "react-router-dom";

export interface HeaderProps {
  prev? : boolean
}

function Header({prev} : HeaderProps) {

  const navigate = useNavigate();

  const prevHanlder = ()=>{
    navigate(-1);
  }

  return (
    <HeaderComponent>
      {
        prev && <button onClick={prevHanlder}><IoChevronBack/></button>
      }
      <h4>HBD Pokemon</h4>
    </HeaderComponent>
  )

}

export default Header