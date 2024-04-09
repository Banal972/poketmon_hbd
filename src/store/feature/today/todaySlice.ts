import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import { PokemonType } from "../../@types/PokeType";
import { SpeciesType } from "../../@types/SpeciesType";

export const getToday = createAsyncThunk("pokemon/today", async (number : string)=>{

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`);
    const speciesResponse = await axios.get<SpeciesType>(`https://pokeapi.co/api/v2/pokemon-species/${number}`);
    const koreanName = speciesResponse.data.names.find(name=>name.language.name === "ko");
    const {data} = response;
    const allData : PokemonType = {...data,korean_name : koreanName?.name};
    return allData;

});

interface InitialType {
    loading : boolean;
    pokemon : PokemonType | null;
    error : boolean;
}

const initialState : InitialType = {
    loading : true,
    pokemon : null,
    error : false
};

const todaySlice = createSlice({
    name : "today",
    initialState,
    reducers :{},
    extraReducers : (builder)=>{
        builder
            .addCase(getToday.pending,(state)=>{
                state.loading = false;
            })
            .addCase(getToday.fulfilled,(state,action)=>{
                state.pokemon = action.payload;
            })
            .addCase(getToday.rejected,(state)=>{
                state.error = true;
            })
    }
});

export default todaySlice.reducer;