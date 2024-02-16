import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// ایجاد یک thunk برای حذف وظیفه از یک برنامه‌نویس
export const deassignTask = createAsyncThunk(
  'tasks/deassignTask',
  async (taskId,userId) => {
    const response = await axios.post(`/tasks/deassignuser/${taskId}`,userId);
    return response.data;
  }
);

// ایجاد اسلایس
export const tasksDeassignSlice = createSlice({
  name: 'tasks',
  initialState: { entities: [], loading: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deassignTask.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(deassignTask.fulfilled, (state, action) => {
        state.loading = 'idle';
        // حذف وظیفه از state
        state.entities = state.entities.filter(task => task.id !== action.payload.id);
      });
  },
});

export default tasksDeassignSlice.reducer;
