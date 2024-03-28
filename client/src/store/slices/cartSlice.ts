
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import  api  from '@/utils/api';



interface CartItem {
    id: number;      
    name: string;     
    price: number;    
    quantity: number; 
}

interface CartState {
    items: CartItem[];
    loading: boolean;
    error: string | null;
}

const initialState: CartState = {
    items: [],
    loading: false,
    error: null,
};

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async (item: CartItem) => {
        const response = await api.get("/cart");
        console.log(response);
        return item;
    }
);



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload as any;
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string 
            });

    },
});
export default cartSlice.reducer;