/* eslint-disable no-debugger */
import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: {
      colors: [],
    },
  },
  reducers: {
    filterStatusChanged(state, action) {
      // if (!state.filter.colors.includes(action.payload)) {
      //   state.filter.colors.push(action.payload);
      //   return;
      // }
      // state.filter.colors = state.filter.colors.filter(
      //   (existingColor) => existingColor !== action.payload,
      // );
      console.log(action.payload);
      return {
        ...state,
        filter: { colors: action.payload },
      };
    },
  },
});

export const {
  filterStatusChanged,
} = filterSlice.actions;
export default filterSlice.reducer;
