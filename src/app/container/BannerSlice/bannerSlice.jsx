import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {uploadAllBannerApis} from './../../api/auth.jsx';
import { toast } from "react-toastify"; 

export const uploadBanner = createAsyncThunk(
  "banner/upload",
  async (file, { rejectWithValue }) => {
    try {
      const response = await uploadAllBannerApis(file);
      toast.success("آپلود تصویر با موفقیت انجام شد");
      return response.data;
    } catch (error) {
      toast.error("مشکلی در آپلود تصویر به وجود آمد"); // نمایش پیام خطا
      return rejectWithValue(error.response.data);
    }
  }
);

const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    loading: false,
    error: null,
    uploadedImage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadBanner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadBanner.fulfilled, (state, action) => {
        state.loading = false;
        state.uploadedImage = action.payload;
      })
      .addCase(uploadBanner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bannerSlice.reducer;
