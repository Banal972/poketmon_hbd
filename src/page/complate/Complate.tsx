import { useNavigate } from "react-router-dom";
import CricleBtn from "../../components/common/Btn/CircleBtn";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { useAppSelector } from "../../store/store"
import { Box, ComplateLayout, FullHeight } from "./style";

function Complate() {

  const pokeData = useAppSelector(state=>state.pokeSlice);
  const navigate = useNavigate();

  return (
    <ComplateLayout>
      <Header/>
      <FullHeight>
        <Box>
          <h4>4월 7일은</h4>
          이미지
          <p>꼬부기</p>
          <CricleBtn 
            type="button" 
            label="다시하기"
            onClick={()=>navigate('/')}
          />
        </Box>
      </FullHeight>
      <Footer/>
    </ComplateLayout>
  )
}

export default Complate