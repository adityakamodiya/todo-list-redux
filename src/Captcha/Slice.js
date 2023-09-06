import { createSlice } from "@reduxjs/toolkit";
 
 export const slice =  createSlice({
    name:'captcha',
    initialState:{
        input:''
    },
    reducers:{
        setinput: function(state,action){
            state.input = action.payload;
        }
    }
});
const sliceReducer =  slice.reducer
export default   sliceReducer
export const {setinput}  =slice.actions
