// fileSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllManageFilesApi } from './../../../api/reports';

// ایجاد یک thunk برای دریافت فایل‌ها از سرور
export const fetchFiles = createAsyncThunk('files/fetchFiles', async () => {
  const response = await getAllManageFilesApi();
  return response.data;
});

// ایجاد یک slice برای نگهداری وضعیت فایل‌ها
export const fileSlice = createSlice({
  name: 'files',
  initialState: { files: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFiles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFiles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.files = action.payload;
      })
      .addCase(fetchFiles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default fileSlice.reducer;
