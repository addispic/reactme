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
export { store };
