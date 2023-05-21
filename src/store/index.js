import { configureStore, createSlice, current } from "@reduxjs/toolkit";
import sample from "./sample";
import bookmarkList from "./bookmarkList";
import user from "./user";
let product = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    setProduct(state, action) {
      // console.log("state", current(state)); // 현재값
      // console.log("action.payload", action.payload); // 들어온값
      return action.payload;
    },
  },
});
export let { setProduct } = product.actions;

export const store = configureStore({
  reducer: {
    product: product.reducer,
    sample: sample.reducer,
    bookmarkList: bookmarkList.reducer,
    user: user.reducer,
  },
});
