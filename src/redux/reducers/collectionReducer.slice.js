import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCollections } from '../../services/collection.service';

const initialState = {
  collection: [],
  loading: false
};

export const fetchCollections = createAsyncThunk('fetchCollection', async (payload) => {
  const { data } = await getCollections(payload);
  return data.data;
});

const CollectionSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    setCollection: (state, { payload }) => {
      state.collection = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCollections.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCollections.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.collection = payload;
        state.isSuccess = true;
      })
      .addCase(fetchCollections.rejected, (state) => {
        state.loading = false;
        state.isSuccess = false;
        state.message = 'failed';
      });
  }
});

export const { setCollection } = CollectionSlice.actions;
export default CollectionSlice.reducer;
