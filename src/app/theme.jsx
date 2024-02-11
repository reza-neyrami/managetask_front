import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#3bb78f", // رنگ سبز
    },
    secondary: {
      main: "#ffc107", // رنگ گل بهی
    },
    background: {
      default: "#fff", // رنگ پس‌زمینه
    },
  },
  typography: {
    fontFamily: "fateme,IRANSans, Roboto, Helvetica, Arial, sans-serif",
    fontSize: 12,
  },
  
  // استایل های شخصی سازی شده در MuiButton
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#07b0ff", // رنگ پس زمینه باتن ها
          color: "#dde7e9", // رنگ متن باتن ها
          "&:hover": {
            backgroundColor: "#e0a800", // رنگ پس‌زمینه باتن ها در حالت هاور
          },
        },
      },
    },
  },
});

export default theme;
