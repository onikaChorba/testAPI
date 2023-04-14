import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuoteState {
  quote: string;
  author: string;
}

const initialState: QuoteState ={
  quote: "",
  author: ""
};

const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    setQuote: (state, action: PayloadAction<{quote: string, author: string}>) => {
      state.quote = action.payload.quote;
      state.author = action.payload.author;
    },
  },
});

export const { setQuote } = quoteSlice.actions;
export default quoteSlice.reducer;