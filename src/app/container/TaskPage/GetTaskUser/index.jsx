import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTaskUser } from "./../../../api/auth";

// ایجاد یک اکشن غیر همزمان برای دریافت وظایف کاربر
export const fetchTasksUser = createAsyncThunk(
  "getTaskUser/fetchTaskUser",
  async () => {
    const response = await getTaskUser();
    return response.data;
  }
);

// ایجاد اسلایس
export const userTasksSlice = createSlice({
  name: "userTasks",
  initialState: { tasks: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasksUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        // اضافه کردن وظایف دریافت شده به state
        state.tasks = action.payload;
      })
      .addCase(fetchTasksUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userTasksSlice.reducer;
