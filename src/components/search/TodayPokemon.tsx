import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect } from "react";
import { getToday } from "../../store/feature/today/todaySlice";

function TodayPokemon(){

  const dispatch = useAppDispatch();
  const today = moment().format("MDD");
  const todayPokemon = useAppSelector(state=>state.todaySlice);

  useEffect(()=>{

    if(today){
      dispatch(getToday(today));
    }

  },[today]);

  return (
    <>
      <h4>오늘의 포켓몬은?</h4>
      <img src={todayPokemon.pokemon?.sprites.front_default} alt={todayPokemon.pokemon?.korean_name} />
      <dl>
        <dt>
          {todayPokemon.pokemon?.korean_name}
        </dt>
        <dd>오늘의 포켓몬은 오늘날짜 기준으로 나타납니다.</dd>
      </dl>
    </>
  )
}

export default TodayPokemon;