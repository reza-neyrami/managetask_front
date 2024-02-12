import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserTask } from "./../../../api/auth";

export const fetchUserTasks = createAsyncThunk(
  "users/fetchUserTasks",
  async () => {
    const response = await getUserTask();
    return response.data;
  }
);
// ایجاد اسلایس کاربران
export const taskSlice = createSlice({
  name: "assgnied",
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



export default taskSlice.reducer;
