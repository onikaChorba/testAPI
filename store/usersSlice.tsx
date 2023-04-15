import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
isLoading: boolean;
data: any[] | null;
isError: boolean;
}

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  return responce.json();
});

const usersSlise = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  } as UserState,
    reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<any[]>) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError;
    });
  },
});

// export const { getFilteredList } = productSlise.actions;
export default usersSlise.reducer;
