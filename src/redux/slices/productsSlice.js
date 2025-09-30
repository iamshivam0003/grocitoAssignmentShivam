import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'fetchProducts/products',
  async () => {
    const productList = await axios.get('https://fakestoreapi.com/products');
    return productList.data;
  },
);

const initialState = {
  productList: [],
  searchProductList: [],
  loading: false,
  error: false,
};
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    searchProductByName: (state, action) => {
      const keyword = (action.payload || '').toLowerCase().trim();

      if (keyword === '') {
        state.searchProductList = state.productList;
      } else {
        state.searchProductList = state.productList.filter(item =>
          item.title.toLowerCase().includes(keyword),
        );
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productList = action.payload;
        state.searchProductList = action.payload;
        state.error = false;
      })
      .addCase(fetchProducts.rejected, state => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { searchProductByName } = productsSlice.actions;

export default productsSlice.reducer;
