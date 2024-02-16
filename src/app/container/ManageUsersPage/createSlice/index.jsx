import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUser } from "./../../../api/auth";

// ایجاد یک اکشن غیر همزمان برای دریافت کاربران از سرور
export const fetchCreateUsers = createAsyncThunk(
  "createusers/fetchCreateUsers",
  async (params) => {
    const response = await createUser(params);
    const data = await response.json();
    return data;
  }
);

// ایجاد اسلایس
const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    // اضافه کردن یک کاربر جدید
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCreateUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// صادر کردن اکشن‌ها و reducer
export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
