import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import quoteSlice from "./quotesSlice";
export const store = configureStore({
  reducer: {
    users: usersSlice,
    quote: quoteSlice,
  },
});
