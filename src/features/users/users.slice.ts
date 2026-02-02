import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// types
import type { IUsersInitialState } from "../../defs/slices/users.defs";

// register
export const register = createAsyncThunk(
  "users/register",
  async (data: { email: string; password: string }) => {
    console.log("Register");
    console.log(data);
  },
);
// login
export const login = createAsyncThunk(
  "users/login",
  async (data: { email: string; password: string }) => {
    console.log("Login");
    console.log(data);
  },
);
// slice
// initial state
const initialState: IUsersInitialState = {
  user: null,
};
// users
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

// exports
// reducer
export default usersSlice.reducer;
