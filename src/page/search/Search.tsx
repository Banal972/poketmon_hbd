import { useRef, useState } from "react"
import Btn from "../../components/common/Btn/Btn"
import Footer from "../../components/common/Footer"
import Header from "../../components/common/Header"
import Select from "../../components/common/Select"
import TodayPokemon from "../../components/search/TodayPokemon"
import { FullHeight } from "../main/style"
import { Box, SearchLayout } from "./style"
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Input } from "../../components/common/Input/style"
import { useAppDispatch } from "../../store/store"
import { getPokemon } from "../../store/feature/pokemon/pokeSlice"

function Search() {

  const dispatch = useAppDispatch();
  const {register,handleSubmit,watch} = useForm();
  const nameInput = watch('name',"");
  const monthInput = watch('month',"");
  const dayInput = watch('day',"");
  const slideRef = useRef<SwiperRef>(null);

  const navigate = useNavigate();
  const [step,setStep] = useState(0);
  const prevHandler = ()=>{
    if(!slideRef.current) return;
    const {swiper} = slideRef.current;
    if(swiper.realIndex === 0){
      return navigate('/');
    }
    setStep(step-1);
    slideRef.current.swiper.slidePrev();
  }
  const nextHandler = ()=>{
    if(!slideRef.current) return;
    const {swiper} = slideRef.current;

    if(step === 0){
      if(nameInput === "") return alert('성함을 입력해주세요.');
      setStep(1);
    }
    else if(step === 1){
      if(monthInput === "") return alert('월을 선택해주세요.');
      setStep(2);
    }
    swiper.slideNext();
  }

  const onSubmit = (data : any)=>{
    if(!slideRef.current) return;
    if(dayInput === "") return alert('일을 선택해주세요.');
    const getDay = data.month+data.day;
    if(Number(getDay) > 1025){
      slideRef.current.swiper.slideTo(1);
      setStep(1);
      return alert('지금은 10월25일까지만 지원합니다.');
    }

    dispatch(getPokemon(data));
    navigate('/complate');
  }

  return (
    <SearchLayout>
      <Header 
        prev={true}
        onClick={prevHandler}
      />
      <FullHeight>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Swiper
              ref={slideRef}
            >
              <SwiperSlide>
                <TodayPokemon/>
                <Input
                  placeholder="성함을 입력해주세요"
                  {...register(
                      "name",
                      {
                      maxLength : 80
                      }
                    )
                  }
                />
                <Btn 
                  type="button"
                  label="다음으로"
                  onClick={nextHandler}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TodayPokemon/>
                <Select
                  register={register}
                  name={"month"}
                >
                  <option value="">월을 선택해주세요.</option>
                  {
                    Array.from({length : 12},(_,index)=>index+1).map((e,i)=><option key={i} value={e}>{`${e}월`}</option>)
                  }
                </Select>
                <Btn 
                  type="button"
                  label="다음으로"
                  onClick={nextHandler}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TodayPokemon/>
                <Select
                  register={register}
                  name={"day"}
                >
                  <option value="">일을 선택해주세요.</option>
                  {
                    Array.from({length : 31},(_,index)=>index+1).map((e,i)=><option key={i} value={e}>{`${e}일`}</option>)
                  }
                </Select>
                <Btn 
                  type="submit"
                  label="결과확인"
                />
              </SwiperSlide>
            </Swiper>
          </form>
        </Box>
      </FullHeight>
      <Footer/>
    </SearchLayout>
  )
}

export default Search