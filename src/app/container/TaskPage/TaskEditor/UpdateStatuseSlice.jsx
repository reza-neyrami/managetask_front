import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { updateStatus } from "./../../../api/auth";

// ایجاد یک اکشن غیر همزمان برای به‌روزرسانی وظیفه
export const updateUserStatusTask = createAsyncThunk(
  "tasks/updateTask",
  async ( taskId ) => {
    const response = await updateStatus({ params: taskId });
    return response.data;
  }
);

// ایجاد اسلایس
export const tasksStatuseSlice = createSlice({
  name: "tasks",
  initialState: { tasksup: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserStatusTask.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserStatusTask.fulfilled, (state, action) => {
        state.status = "succeeded";
        // state.tasksup = action.paylod;
        // به‌روزرسانی وظیفه در state
        const index = state.tasks.findIndex(
          (task) => task.id === action.payload.id
        );
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(updateUserStatusTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default tasksStatuseSlice.reducer;
