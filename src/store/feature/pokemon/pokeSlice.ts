import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PokeType } from "../../@types/PokeType";

const initialState : PokeType = {
    name : "",
    month : "",
    day : ""
}

const pokeSlice = createSlice({
    name : "poke",
    initialState,
    reducers : {
        onChange : (_,action : PayloadAction<PokeType>)=>{
            return action.payload;
        }
    }
});

export const {onChange} = pokeSlice.actions

export default pokeSlice.reducer;