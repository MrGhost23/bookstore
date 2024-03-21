import api from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    books: [],
    error: null,
    loading: false,
    book: null,
};

export const fetchBook = createAsyncThunk('book/fetchBook', async () => {
    const response = await api.get('/book');
    console.log(response)
    return response.data;
});

const bookSlice = createSlice({
    'name': 'book',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBook.fulfilled, (state, action) => {
              console.log(action.payload)
              state.books = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchBook.pending, (state) => {
                  state.loading = true;
                  state.error = null;
              })
              .addCase(fetchBook.rejected, (state, action) => {
                  state.loading = false;
                  state.error = action.payload as string;
              })
    },
});

export default bookSlice.reducer;
    
