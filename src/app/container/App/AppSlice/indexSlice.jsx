import { createSlice } from '@reduxjs/toolkit';

// ایجاد یک slice
const mySlice = createSlice({
  name: 'appSlice',
  initialState: {},
  reducers: {
    updateState: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateState } = mySlice.actions;

// ایجاد یک store
export default mySlice.reducer;
