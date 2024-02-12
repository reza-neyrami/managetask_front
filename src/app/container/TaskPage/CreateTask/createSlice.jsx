import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createTask } from './../../../api/auth';


export const submitTask = createAsyncThunk(
  "taskForm/submit",
  async (taskData, { rejectWithValue }) => {
    try {
      const response = await createTask({ params: taskData });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const createTaskSlice = createSlice({
  name: "createtask",
  initialState: { entities: [], error: "error", loading: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitTask.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(submitTask.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = null;
      })
      .addCase(submitTask.fulfilled, (state, action) => {
        state.loading = "idle";
        // بروزرسانی وظایف بر اساس پاسخ سرور
        const { taskId, userIds } = action.payload;
        const task = state.entities.find((task) => task.id === taskId);
        if (task) {
          task.userIds = userIds;
        }
      });
  },
});

export default createTaskSlice.reducer;
