import { IoChevronBack } from "react-icons/io5";
import { HeaderComponent } from "./Header.style";
import { useNavigate } from "react-router-dom";
function Header({prev} : {prev? : boolean}) {

  const navigate = useNavigate();

  const prevHanlder = ()=>{
    navigate(-1);
  }

  return (
    <HeaderComponent>
      {
        prev && <button onClick={prevHanlder}><IoChevronBack/></button>
      }
      <h4>HBD Poketmon</h4>
    </HeaderComponent>
  )

}

export default Header