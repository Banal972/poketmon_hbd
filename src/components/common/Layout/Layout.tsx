import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import {BackGround, LayoutComponent} from "./Layout.style";
import Footer from "../Footer/Footer";
import CricleBtn from "../Btn/CircleBtn/CricleBtn";
import Btn from "../Btn/Btn/Btn";
import Input from "../Input/Input";
import Select from "../Select/Select";

function Layout() {
  return (
    <BackGround>
      <LayoutComponent>
        <Header/>
          <Input/>
          <Select/>
          <CricleBtn>난 무슨 포켓몬일까?</CricleBtn>
          <Btn>다음으로</Btn>
          <Outlet/>
        <Footer/>
      </LayoutComponent>
    </BackGround>
  )
}

export default Layout