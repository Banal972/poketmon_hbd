import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PokeType, PokemonType } from "../../@types/PokeType";
import axios from "axios";
import { SpeciesType } from "../../@types/SpeciesType";

export const getPokemon = createAsyncThunk("pokemon/get",async (data : PokeType)=>{

    const getDay = data.month+data.day;

    if(Number(getDay) > 1025){
        throw Error('도감이 존재하지 않습니다.');
    }

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${getDay}`);
    const speciesResponse = await axios.get<SpeciesType>(`https://pokeapi.co/api/v2/pokemon-species/${getDay}`);
    const koreanName = speciesResponse.data.names.find(name=>name.language.name === "ko");
    const allData : PokemonType = {...response.data,korean_name : koreanName?.name};
    return {
        user_name : data.name,
        pokemon : allData,
    };

})

interface InitialType {
    loading : boolean;
    data? : {
        user_name : string,
        pokemon : PokemonType
    };
    error? : string;
}

const initialState :InitialType = {
    loading : false,
    data : undefined,
    error : undefined
}

const pokeSlice = createSlice({
    name : "poke",
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder
            .addCase(getPokemon.pending,(state)=>{
                state.loading = true;
            })
            .addCase(getPokemon.fulfilled,(state,action)=>{
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getPokemon.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export default pokeSlice.reducer;