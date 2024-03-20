import api from '@/utils/api';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface User {
  firstName: string;
  lastName: string;
  cart: [];
  wishlist: [];
  orders: [];
  email: string;
  role: string;
}

interface UserState {
  user: User | null;
  error: string | null;
}

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const initialState: UserState = { user: null, error: null };

export const loginUser = createAsyncThunk(
    'user/login',
    async (loginData: LoginData, thunkAPI) => {
      try {
        const response = await api.post('/auth/login', loginData);
        const { access_token, user } = response.data;
        return { access_token, user };
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );

  export const registerUser = createAsyncThunk(
    'user/register',
    async (registerData: RegisterData, thunkAPI) => {
      try {
        const response = await api.post('/auth/register', registerData);
        const { access_token, user } = response.data;
        return { access_token, user };
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.user = null;
                state.error = action.payload as string;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.user = null;
                state.error = action.payload as string;
            });
    },
});

export const { setUser } = userSlice.actions;
export const selectUser = (state: { user: UserState }) => state.user.user;
export default userSlice.reducer;