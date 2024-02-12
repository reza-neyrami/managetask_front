import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userSkileApi,assignTask } from "./../../../api/auth";



export const assigniedTask = createAsyncThunk(
    "tasks/assignTask",
    async ({ taskId, userIds }) => {
      const response = await assignTask({ taskId, userIds });
      return response.data;
    }
  );
  
  export const fetchUsers = createAsyncThunk("users/fetchUsers", async (role) => {
    const response = await userSkileApi(role);
    return response.data;
  });
  
  // ایجاد اسلایس وظایف
  // ایجاد اسلایس وظایف
  export const assigenSlice = createSlice({
    name: "tasksass",
    initialState: { entities: [], loading: "idle" },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUsers.pending, (state) => {
          state.loading = "loading";
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
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

  export default assigenSlice.reducer;