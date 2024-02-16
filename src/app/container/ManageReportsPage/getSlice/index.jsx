import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllReportApi } from '../../../api/reports';

// ایجاد یک thunk برای دریافت گزارش‌ها از سرور
export const fetchAllReports = createAsyncThunk(
  'reports/fetchReports',
  async () => {
    const response = await getAllReportApi();
    return response.data;
  }
);

// ایجاد اسلایس
export const reportsAllSlice = createSlice({
  name: 'reports',
  initialState: { entities: [], loading: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllReports.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchAllReports.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.entities = action.payload;
      });
  },
});

export default reportsAllSlice.reducer;
