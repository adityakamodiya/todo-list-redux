import { createSlice } from "@reduxjs/toolkit";

   export const todoslice= createSlice({
name:'todoslice',
initialState:{
        input:[],
        // para:[]
},
reducers:{
    Printvalue : function (state,action){
     state.input =    [...state.input,action.payload]
    },
    Deleteval : function (state,action){
        state.input = state.input.filter((item,index)=>action.payload!=index)
    },
    edit: function (state,action) 
        {
            const {index,value} = action.payload
            state.input[index] = value
        }
    
}
});
export const { Deleteval,Printvalue ,edit} = todoslice.actions

const counterReducer = todoslice.reducer
export default counterReducer



