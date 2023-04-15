import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice.tsx";
import quoteSlice from "./quotesSlice";
import filmsSlice from "./filmsSlice.tsx";
export const store = configureStore({
  reducer: {
    users: usersSlice,
    quote: quoteSlice,
    films: filmsSlice,
  },
});
