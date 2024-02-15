import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllUserApi } from './../../../api/auth.jsx';


// ایجاد یک اکشن غیر همزمان برای فراخوانی API
export const fetchUsers = createAsyncThunk('getusers/fetchUsers', async () => {
  const response = await getAllUserApi();
  return response.data;
});

// ایجاد اسلایس
export const getusersSlice = createSlice({
  name: 'getusers',
  initialState: { entities: [], loading: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.entities = action.payload;
      });
  },
});

// اکسپورت کردن ریدیوسر برای استفاده در استور
export default getusersSlice.reducer;
