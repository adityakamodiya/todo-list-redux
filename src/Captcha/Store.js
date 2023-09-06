import { configureStore } from "@reduxjs/toolkit";
// import {sliceReducer}  from "./Slice";
import sliceReducer from "./Slice";
   export default    configureStore({
      reducer:{
         capreducer: sliceReducer}
})