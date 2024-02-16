import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getReportByTaskIdApi } from "./../../../../api/auth.jsx";

// ایجاد یک thunk برای ارسال درخواست GET
export const reportFetchTask = createAsyncThunk(
  "getreport/fetchReportTask",
  async (taskId, { rejectWithValue }) => {
    try {
      const response = await getReportByTaskIdApi(taskId);
      toast.success("درخواست با موفقیت انجام شد.");
      return response.data;
    } catch (error) {
      toast.error("درخواست رد شد.");
      return rejectWithValue(error.message);
    }
  }
);

// ایجاد اسلایس
export const getReportByTaskSlice = createSlice({
  name: "tasksReport",
  initialState: { entities: [], loading: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(reportFetchTask.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(reportFetchTask.fulfilled, (state, action) => {
        state.loading = "idle";
        state.entities = action.payload;
      })
      .addCase(reportFetchTask.rejected, (state) => {
        state.loading = "error";
      });
  },
});

export default getReportByTaskSlice.reducer;
