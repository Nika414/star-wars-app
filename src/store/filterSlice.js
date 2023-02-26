import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    colors: [],
  },
  reducers: {
    filterStatusChanged(state, action) {
      return {
        ...state,
        colors: action.payload,
      };
    },
  },
});

export const {
  filterStatusChanged,
} = filterSlice.actions;
export default filterSlice.reducer;
