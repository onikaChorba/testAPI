import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";


interface filmState {
isLoading: boolean;
data: any[] | null;
isError: boolean;
showDefaultObjects: boolean;
}

type Film = {
  show: {
    id: number;
    name: string;
    image: {
      medium: string;
      original: string;
    };
    summary: string;
  };
};
export const fetchFilms= createAsyncThunk <Film[], void>("fetchFilms", async () => {
  const responce = await fetch("https://api.tvmaze.com/search/shows?q=girls");
  return responce.json();
});

const filmsSlice = createSlice ({
  name: 'films',
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    showDefaultObjects: true,
  } as filmState,
  reducers: {
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchFilms.pending, (state)=>{
      state.isLoading = true;
    });
    builder.addCase(fetchFilms.fulfilled, (state, action: PayloadAction<any[]>) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchFilms.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError;
    });
  },
})
export default filmsSlice.reducer;