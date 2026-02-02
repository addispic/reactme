import { configureStore } from "@reduxjs/toolkit";

// reducers
// users
import users from "./features/users/users.slice";

// store
const store = configureStore({
  reducer: {
    users,
  },
});

// exports
// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
