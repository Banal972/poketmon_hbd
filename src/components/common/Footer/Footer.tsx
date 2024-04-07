import { FooterComponent, LinkBtn } from "./Footer.style"
import { IoLogoGithub } from "react-icons/io5";
import { SiTistory } from "react-icons/si";

function Footer() {
  return (
    <FooterComponent>
      <div>
        <LinkBtn color="#FF5A4A" href="https://banal7.tistory.com/">
          <SiTistory style={{width : 10, color : "#fff"}}/>
        </LinkBtn>
        <LinkBtn color="" href="https://github.com/Banal972"><IoLogoGithub/></LinkBtn>
      </div>
      <p>Copyright 2024. HBDPoketmon. All Right Reserved.</p>
    </FooterComponent>
  )
}

export default Footer