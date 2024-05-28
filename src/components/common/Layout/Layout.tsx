import { Outlet } from "react-router-dom"
import * as S from "./Layout.style";

function Layout() {
  return (
    <S.LayoutComponent>
      <Outlet/>
    </S.LayoutComponent>
  )
}

export default Layout