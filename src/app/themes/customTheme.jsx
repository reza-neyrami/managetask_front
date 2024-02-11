import { createTheme } from "@mui/material";


const customTheme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50", // رنگ اصلی به سبز تغییر پیدا کرده است.
      light: "#81c784",
      dark: "#388e3c",
    },
    light: {
      main: "#e43509b0", // رنگ اصلی به سبز تغییر پیدا کرده است.
      light: "rgb(242 181 141)",
      dark: "#23b9ff",
    },
    secondary: {
      main: "#FFC107",
      light: "#ffecb3",
      dark: "#ffb300",
    },
    error: {
      main: "#B00020",
      light: "#e57373",
      dark: "#d32f2f",
    },
    background: {
      default: "#e4e1e1",
    },
  },
  shadows: [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.12),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.2)",
    "none",
  ],
  shape: {
    borderRadius: 8,
  },
  spacing: 2,
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#FF69B4", // رنگ پس‌زمینه باتن‌ها تغییر کرده است.
          color: "#FFC107", // رنگ متن باتن‌ها به رنگ گل بهی تغییر کرده است.
          "&:hover": {
            backgroundColor: "#FF1493",
          },
          marginBottom: "10px",
          marginTop: "3px",
        },
      },
    },
    MuiPaper: {
      marginBottom: "10px",
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#000",
        },
      },
    },
    shadows: [
      "none",
      "0px 1px 2px rgba(0, 0, 0, 0.24), 0px 1px 4px rgba(0, 0, 0, 0.12)",
      "0px 4px 8px rgba(0, 0, 0, 0.24), 0px 3px 4px rgba(0, 0, 0, 0.12)",
      "0px 8px 16px rgba(0, 0, 0, 0.24), 0px 6px 6px rgba(0, 0, 0, 0.12)",
    ],
  },
});

export default customTheme;
