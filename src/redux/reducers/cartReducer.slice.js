import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCartItems } from '../../services/cart.service';
const initialState = {
  items: [],
  sessionKey: '',
  expiry: '',
  loading: false
};

export const getCart = createAsyncThunk('fetchCart', async (payload) => {
  console.log('payload',payload)
  const { data } = await getCartItems(payload);
  return data.data;
});

const CartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    setCartSession: (state, { payload }) => {
      state.sessionKey = payload.sessionKey;
      state.expiry = payload.expiry;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload.cart_item_box ?? initialState.items;
      })
      .addCase(getCart.rejected, (state) => {
        state.loading = false;
        state.message = 'failed';
      });
  }
});

export const { setCartSession } = CartSlice.actions;
export default CartSlice.reducer;
