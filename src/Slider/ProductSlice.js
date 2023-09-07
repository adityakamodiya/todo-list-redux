import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

let i = 1;
export const fetchapi = createAsyncThunk('takelink', async (currentstat) => {
    if(currentstat==1){
    const response = await axios.get("https://dummyjson.com/products/1" )
    return response.data}
if(currentstat>1){
    const response = await axios.get("https://dummyjson.com/products/" + currentstat)
    return response.data}

    // console.log(response.data)
    

})

export const sliderSlice = createSlice({
    name: 'products',
    initialState: {
        currentstat: 1,
       
        loader: false,
        
        arr: []
    },
    reducers: {

        nextproduct: function (state, action) {
            state.loader = false
            
            state.currentstat = state.currentstat + 1
            

    

            // console.log(state.arr)
        },
        previousproduct: function (state, action) {
            state.currentstat = state.currentstat - 1
            console.log(state.loader)
        }
    },

    extraReducers: {
        [fetchapi.pending]: function (state, action) {
            state.loader = true
            // console.log('pending')
        },
        [fetchapi.fulfilled]: function (state, action) {
            

            state.arr = action.payload

            state.loader = false
            // console.log('fullfilled')
            // console.log(state.arr)
        },
        [fetchapi.rejected]: function (state, action) {
            state.loader = true
            
        }
    }

})

const slicereducer = sliderSlice.reducer;
export const { nextproduct, previousproduct } = sliderSlice.actions
export default slicereducer