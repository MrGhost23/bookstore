import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
    name: "counter",
    initialState:{
    counter:0
    },
    reducers:{
        changeCounter:(state,actions)=>{
            state.counter = actions.payload
            console.log('hello')
        }
    }

})


let counterReducer =cartSlice.reducer

export default counterReducer

export let {changeCounter} = cartSlice.actions