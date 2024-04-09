import { Outlet } from "react-router-dom"
import {BackGround, LayoutComponent} from "./Layout.style";

function Layout() {
  return (
    <BackGround>
      <LayoutComponent>
        <Outlet/>
      </LayoutComponent>
    </BackGround>
  )
}

export default Layout