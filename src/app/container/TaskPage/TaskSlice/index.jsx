import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userSkileApi, getUserTask,assignTask } from "./../../../api/auth";

// ایجاد thunk ها
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (skils) => {
    const response = await userSkileApi(skils);
    return response.data;
  }
);

export const fetchUserTasks = createAsyncThunk(
  "users/fetchUserTasks",
  async () => {
    const response = await getUserTask();
    return response.data;
  }
);

export const assigniedTask = createAsyncThunk(
  "tasks/assignTask",
  async ({ taskId, userIds }) => {
    const response = await assignTask({taskId, userIds});
    return response.data;
  }
);

// ایجاد اسلایس کاربران
export const usersSlice = createSlice({
  name: "usersskile",
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// ایجاد اسلایس وظایف
// ایجاد اسلایس وظایف
export const tasksSlice = createSlice({
  name: "tasksass",
  initialState: { entities: [], loading: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserTasks.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchUserTasks.fulfilled, (state, action) => {
        state.loading = "idle";
        state.entities = action.payload;
      })
      .addCase(assigniedTask.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(assigniedTask.fulfilled, (state, action) => {
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

export default usersSlice.reducer



