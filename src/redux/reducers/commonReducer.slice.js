import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMenuCategories, getMenudata } from '../../services/pages.service';

const initialState = {
  menuData:[],
  categories:[]
};

export const fetchMenuData = createAsyncThunk('fetchMenuData', async () => {
  const { data } = await getMenudata();
  return data.data;
});

export const getCategories = createAsyncThunk('getCategories', async (payload) => {
  const { data } = await getMenuCategories(payload);
  return data.data;
});

const Common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setCommonData: (state, { payload }) => {
      state.menuData = payload;
      state.categories = payload;

    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenuData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.menuData = payload;
        state.isSuccess = true;
      })
      .addCase(fetchMenuData.rejected, (state) => {
        state.loading = false;
        state.isSuccess = false;
        state.message = 'failed';
      })
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categories = payload;
        state.isSuccess = true;
      })
      .addCase(getCategories.rejected, (state) => {
        state.loading = false;
        state.isSuccess = false;
        state.message = 'failed';
      });
  }
});

export const { setCommonData } = Common.actions;
export default Common.reducer;
