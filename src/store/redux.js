import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./Slices/counterSlice";
import loginSliceReducer from "./Slices/loginSlice";

const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    login: loginSliceReducer,
  },
});

export default store;
