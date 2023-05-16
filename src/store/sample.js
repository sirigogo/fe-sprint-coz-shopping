import { createSlice } from "@reduxjs/toolkit";

let sample = createSlice({
  name: "sample",
  initialState: [],
  reducers: {
    setSample(state, action1) {
      // console.log("state", current(state)); // 현재값
      // console.log("action.payload", action.payload); // 들어온값
      return action1.payload;
    },
  },
});
export let { setSample } = sample.actions;
export default sample;
