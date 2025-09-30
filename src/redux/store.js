import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice';
const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
