import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

let i = 1;
export const fetchapi = createAsyncThunk('takelink', async (currentstat) => {

    const response = await axios.get("https://dummyjson.com/products/" + currentstat)

    // console.log(response.data)
    return response.data

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