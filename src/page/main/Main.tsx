
import * as S from "./style";
import Pokeball from "@asset/image/pokeball/pokeball.jpg";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Header from "@components/common/Header";
import Footer from "@components/common/Footer";
import CricleBtn from "@components/common/Btn/CircleBtn";

function Main() {

  const navigate = useNavigate();
  const pokeballRef = useRef(null);

  useGSAP(()=>{

    if(!pokeballRef.current) return;

    gsap.fromTo(pokeballRef.current, {
      rotate : 5,
    },{
      rotate : -5,
      yoyo:true, 
      repeat:-1, 
      ease : "power1.inOut" 
    }); 

  },[pokeballRef])

  return (
    <S.MainLayout>
      <Header/>
        <S.FullHeight>
          <S.Box>
            <S.Ball ref={pokeballRef}>
              <img src={Pokeball} alt="몬스터볼" />
            </S.Ball>
            <CricleBtn
              onClick={()=>navigate('/search')}
              label="난 무슨 포켓몬일까?"
            />
          </S.Box>
        </S.FullHeight>
      <Footer/>
    </S.MainLayout>
  )
}

export default Main