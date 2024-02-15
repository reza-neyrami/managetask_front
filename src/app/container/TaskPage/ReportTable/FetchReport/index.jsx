import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { reportsUserApi } from "./../../../../api/auth.jsx";                    
// Async action
export const fetchReport = createAsyncThunk(
  "report/fetchReport",
  async (dates ) => {
    const response = await reportsUserApi(dates);
    return response.data;
  }
);

// Redux Slice
const reportSlice = createSlice({
  name: "report",
  initialState: { data: null, status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReport.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchReport.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchReport.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default reportSlice.reducer;
