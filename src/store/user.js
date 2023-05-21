import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoggedIn: false,
};

let user = createSlice({
  name: "user",
  initialState: sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : initialState,
  reducers: {
    setUser(state, action1) {
      // console.log("state", current(state)); // 현재값
      // console.log("action.payload", action.payload); // 들어온값
      return action1.payload;
    },
  },
});
export let { setUser } = user.actions;
export default user;
