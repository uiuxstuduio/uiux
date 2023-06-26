import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCartItems, removeCartItem } from '../../services/cart.service';

const initialState = {
  items: [],
  sessionKey: '',
  expiry: '',
  loading: false,
  error: null
};

export const getCart = createAsyncThunk('cart/fetchCart', async (payload) => {
  console.log('fetchCart payload',payload)
  const { data } = await getCartItems(payload);
  console.log('fetchCart data',data)
  return data.data;
});

export const removeItemFromCart = createAsyncThunk('cart/removeFromCart', async (payload) => {
  console.log('removeItemFromCart payload',payload)
  const { data } = await removeCartItem(payload);
  console.log('removeItemFromCart data',data)
  return payload;
});





const CartSlice = createSlice({
  name: 'cart',
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
        console.log('fulfilled', payload)
        state.loading = false;
        // state.items = payload.cart_item_box ?? initialState.items;
        state.items = payload && payload.cart_item_box ? payload.cart_item_box : initialState.items;
      })
      .addCase(getCart.rejected, (state) => {
        state.loading = false;
        state.message = 'failed';
      })
      .addCase(removeItemFromCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeItemFromCart.fulfilled, (state, { payload }) => {
        console.log('state fullfilled', state.items)
        console.log('removeItemFromCart payload', payload)
        state.loading = false;
        state.items = state.items.filter((item) => item?.key !== payload.key);
        state.sessionKey = state.items.length >=1 ? state.sessionKey : ''
      })
      .addCase(removeItemFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
});

export const { setCartSession } = CartSlice.actions;
export default CartSlice.reducer;
