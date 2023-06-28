import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import authReducerSlice from './reducers/authReducer.slice';
import cartReducerSlice from './reducers/cartReducer.slice';
import collectionReducerSlice from './reducers/collectionReducer.slice';
import commonReducerSlice from './reducers/commonReducer.slice';

const persistConfig = {
  timeout: 2000, //Set the timeout function to 2 seconds
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  user: authReducerSlice,
  collections: collectionReducerSlice,
  cart: cartReducerSlice,
  commonData: commonReducerSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store,[persistConfig]);
