import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getAllTasksApi} from './../../../../api/reports.jsx'

// ایجاد یک thunk برای دریافت گزارش‌ها از سرور
export const fetchAllTasksReports = createAsyncThunk(
  'reports/fetchReports',
  async () => {
    const response = await getAllTasksApi();
    return response.data;
  }
);

// ایجاد اسلایس
export const tasksallAllSlice = createSlice({
  name: 'tasksall',
  initialState: { entities: [], loading: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTasksReports.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchAllTasksReports.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.entities = action.payload;
      });
  },
});

export default tasksallAllSlice.reducer;
