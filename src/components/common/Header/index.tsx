import { IoChevronBack } from "react-icons/io5";
import * as S from "./style";
import { HeaderProps } from "./Header.stories";

function Header(
  {
    prev,
    onClick
  }
  : 
  HeaderProps
) {
  
  return (
    <S.HeaderComponent>
      {
        prev && <button onClick={onClick}><IoChevronBack/></button>
      }
      <h4>내 생일은 어떤 포켓몬일까?</h4>
    </S.HeaderComponent>
  )

}

export default Header