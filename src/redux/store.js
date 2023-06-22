import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import authReducerSlice from './reducers/authReducer.slice';
import cartReducerSlice from './reducers/cartReducer.slice';
import collectionReducerSlice from './reducers/collectionReducer.slice';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  user: authReducerSlice,
  collections: collectionReducerSlice,
  cart: cartReducerSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store);
