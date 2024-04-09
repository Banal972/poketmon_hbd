import { FooterComponent, LinkBtn } from "./style"
import { IoLogoGithub } from "react-icons/io5";
import { SiTistory } from "react-icons/si";

function Footer() {
  return (
    <FooterComponent>
      <div>
        <LinkBtn 
          color="#FF5A4A" 
          href="https://banal7.tistory.com/"
          target="_blank"
        >
          <SiTistory style={{width : 10, color : "#fff"}}/>
        </LinkBtn>
        <LinkBtn 
          href="https://github.com/Banal972"
          target="_blank"
        ><IoLogoGithub/></LinkBtn>
      </div>
      <p>Copyright 2024. HBDPokemon. All Right Reserved.</p>
    </FooterComponent>
  )
}

export default Footer