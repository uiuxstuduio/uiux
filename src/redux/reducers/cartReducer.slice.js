import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCartItems, removeCartItem } from '../../services/cart.service';
const initialState = {
  items: [],
  sessionKey: '',
  expiry: '',
  loading: false,
  error: null
};

export const getCart = createAsyncThunk('fetchCart', async (payload) => {
  const { data } = await getCartItems(payload);
  return data.data;
});

export const removeItemFromCart = createAsyncThunk('removeFromCart', async (payload) => {
  console.log('removeFromCart payload', payload)
  const { data } = await removeCartItem(payload);
  console.log('removeFromCart data', data)
  return data;
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
        // console.log('fulfilled', payload)
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
        state.loading = false;
        state.items = state.items.filter((item) => item?.key !== payload.key);
      })
      .addCase(removeItemFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
});

export const { setCartSession } = CartSlice.actions;
export default CartSlice.reducer;
