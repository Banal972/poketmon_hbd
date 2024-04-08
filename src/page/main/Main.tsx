import Footer from "../../components/common/Footer"
import Header from "../../components/common/Header"
import { Box, FullHeight, MainLayout } from "./style"
import Pokeball from "../../asset/image/pokeball/pokeball.jpg";
import CricleBtn from "../../components/common/Btn/CircleBtn";
import { useNavigate } from "react-router-dom";

function Main() {

  const navigate = useNavigate();

  return (
    <MainLayout>
      <Header/>
        <FullHeight>
        
          <Box>
            <img src={Pokeball} alt="몬스터볼" />
            <CricleBtn
              onClick={()=>navigate('/search')}
              label="난 무슨 포켓몬일까?"
            />
          </Box>

        </FullHeight>
      <Footer/>
    </MainLayout>
  )
}

export default Main