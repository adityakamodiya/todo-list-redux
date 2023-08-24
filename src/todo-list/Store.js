import { configureStore } from "@reduxjs/toolkit";
// import { configure } from "@testing-library/react";
import counterReducer from "./Todoslice";

export const store= configureStore({
    reducer:{
        list : counterReducer
    }
})