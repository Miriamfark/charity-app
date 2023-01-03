import { configureStore } from "@reduxjs/toolkit";
import { recipientsSlice } from "./recipientsSlice";
import { usersSlice } from "./usersSlice";

const store = configureStore({
  reducer: {
    recipients: recipientsSlice.reducer,
    users: usersSlice.reducer
  },
});

export default store;