import { configureStore } from "@reduxjs/toolkit";
import slicereducer from "./ProductSlice";
const str = configureStore({
  reducer:{
    slicered:slicereducer
  }  
})
export default str