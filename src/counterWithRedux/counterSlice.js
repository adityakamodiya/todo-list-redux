import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counterExample",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: function (state, action) {
      state.counter = state.counter + 1;
    },
    decrement: function (state, action) {
      state.counter = state.counter - 1;
    },
  },
});

// export default counterSlice.reducer

export const { increment, decrement } = counterSlice.actions

const counterReducer = counterSlice.reducer
export default counterReducer
