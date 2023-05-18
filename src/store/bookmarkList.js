import { createSlice } from "@reduxjs/toolkit";

let bookmarkList = createSlice({
  name: "bookmarkList",
  initialState: [],
  reducers: {
    setBookmarkList(state, action1) {
      // console.log("state", current(state)); // 현재값
      // console.log("action.payload", action.payload); // 들어온값
      return action1.payload;
    },
  },
});
export let { setBookmarkList } = bookmarkList.actions;
export default bookmarkList;
