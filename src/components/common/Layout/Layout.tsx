import { Outlet } from "react-router-dom"
import Header from "../Header"
import {BackGround, LayoutComponent} from "./Layout.style";
import Footer from "../Footer";
import Input from "../Input";
import Select from "../Select";
import CricleBtn from "../Btn/CircleBtn";
import Btn from "../Btn/Btn";

function Layout() {
  return (
    <BackGround>
      <LayoutComponent>
        <Header/>
          <Input/>
          <Select>
            <option value="">월을 선택해주세요.</option>
            <option value="">1월</option>
            <option value="">1월</option>
            <option value="">1월</option>
            <option value="">1월</option>
            <option value="">1월</option>
            <option value="">1월</option>
            <option value="">1월</option>
          </Select>
          <CricleBtn label="테스트"/>
          <Btn label="테스트"/>
          <Outlet/>
        <Footer/>
      </LayoutComponent>
    </BackGround>
  )
}

export default Layout