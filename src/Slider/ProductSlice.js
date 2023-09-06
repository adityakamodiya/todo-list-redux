import axios from 'axios'
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

let i =1;
   export const fetchapi =  createAsyncThunk('takelink',async()=>{
    
     const response =     await   axios.get("https://dummyjson.com/products")
            
                // console.log(response)
                return response.data.products
            
})
export const sliderSlice = createSlice({
    name: 'products',
    initialState: {
       currentstat:0,
        // backImg :'',
        loader:true,
        // arr1:[],
        arr:[]
    },
    reducers: {
        
        nextproduct: function(state,action){
            state.loader = false
            console.log(state.loader)
            state.currentstat = state.currentstat +1
            state.loader = true
            console.log(state.loader)
            // console.log(state.currentstat)



         },
         previousproduct:function(state,action){
            state.currentstat = state.currentstat -1
            console.log(state.currentstat)
        }
    },

    extraReducers:{
        [fetchapi.pending]:function (state,action){
            // state.loader = false
            // console.log(state.loader)
        },
        [fetchapi.fulfilled]:function (state,action){
            // state.loader = false        
            // console.log(state.loader)
            state.arr = action.payload
                
                    // state.loader = true
                            
            // console.log(state.loader)
        },
        [fetchapi.rejected]:function (state,action){
            // state.loader = false
            // console.log(state.loader)
        }
    }
    
})

const slicereducer = sliderSlice.reducer;
export const { nextproduct,previousproduct } = sliderSlice.actions
export default slicereducer