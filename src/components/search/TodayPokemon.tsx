import moment from "moment";
import { useAppDispatch, useAppSelector } from "@store/store";
import { useEffect, useRef } from "react";
import { getToday } from "@store/feature/today/todaySlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as S from "./TodayPokemon.style";

function TodayPokemon(){

  const dispatch = useAppDispatch();
  const today = moment().format("MDD");
  const todayPokemon = useAppSelector(state=>state.todaySlice);
  const pokemonRef = useRef(null);

  useEffect(()=>{

    if(today){
      dispatch(getToday(today));
    }

  },[today,dispatch]);

  useGSAP(()=>{

    if(!pokemonRef.current) return;

    gsap.to(pokemonRef.current, {
      y : -10,
      yoyo:true,
      repeat:-1, 
      duration : 0.8,
      ease : "bounce.in"
    }); 

  },[pokemonRef])

  return (
    <S.Box>
      <h4>오늘의 포켓몬은?</h4>
      <div ref={pokemonRef}>
        <img src={todayPokemon.pokemon?.sprites.front_default} alt={todayPokemon.pokemon?.korean_name} />
      </div>
      <dl>
        <dt>
          {todayPokemon.pokemon?.korean_name}
        </dt>
        <dd>오늘의 포켓몬은 오늘날짜 기준으로 나타납니다.</dd>
      </dl>
    </S.Box>
  )
}

export default TodayPokemon;