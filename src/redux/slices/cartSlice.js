import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      const existingItem = state.find(ele => {
        return ele?.id == actions?.payload?.id;
      });
      if (!existingItem) {
        state.push(actions.payload);
      }
    },
    removeFromCart: (state, actions) => {
      return state.filter((ele, ind) => {
        return ele?.id !== actions?.payload;
      });
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart } = cartSlice.actions;
