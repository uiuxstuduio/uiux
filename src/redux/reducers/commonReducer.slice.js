import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMenudata } from '../../services/pages.service';

const initialState = {
  menuData:[]
};

export const fetchMenuData = createAsyncThunk('fetchMenuData', async () => {
  const { data } = await getMenudata();
  return data.data;
});

const Common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setCommonData: (state, { payload }) => {
      state.menuData = payload;
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
      });
  }
});

export const { setCommonData } = Common.actions;
export default Common.reducer;
