import { createSlice } from "@reduxjs/toolkit";

const loginInitialState = {
  userName: "lol@lol.com",
  password: "lol",
  loginBool: false,
};
const loginSlice = createSlice({
  name: "login",
  initialState: loginInitialState,
  reducers: {
    login(state, action) {
      console.log(action);
      if (
        state.userName === action.payload.userName &&
        state.password === action.payload.password
      ) {
        state.loginBool = true;
      }
    },
    logout(state) {
      state.loginBool = false;
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
