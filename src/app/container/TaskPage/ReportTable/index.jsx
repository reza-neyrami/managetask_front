// سپس در کامپوننت مربوطه، از این اسلایس استفاده می‌کنیم
import { useSelector, useDispatch } from "react-redux";
import { fetchReport } from "./FetchReport/index.jsx";
import { useEffect } from "react";
import { PropTypes } from "prop-types";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
const DatePickerStyles = styled.div`
  text-align: left;
  margin: 10px;
  .marinesdate {
    margin: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
}
  }
  textarea {
    resize: vertical;
    width: 100%;
    border: 1px solid rgb(85, 85, 102);
    border-radius: 10px;
    font-family: fateme;
    height: 250px !important;
    overflow: auto !important;
    margin-left: 10px;
    margin-right: 10px;
    text-align: right;
    direction: ltr;
  }


`;
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  margi: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});
// If you are using date-fns v3.x, please import `AdapterDateFnsV3`
function ReportTable() {
  const dispatch = useDispatch();
  const report = useSelector((state) => state.report?.data);
  const loading = useSelector((state) => state.report?.loading);

  const [startDate, setStartDate] = useState(dayjs("2024-03-17"));
  const [endDate, setEndDate] = useState(dayjs("2024-03-17"));

  const classes = useStyles();

  const getReportAlluser = () => {
    dispatch(
      fetchReport({
        startDate: startDate.format("YYYY-MM-DD"),
        endDate: endDate.format("YYYY-MM-DD"),
      })
    );
  };
  const downloadCSV = () => {
    const times = Date.now();
    let csvContent = "data:text/csv;charset=utf-8,";
    // اضافه کردن عناوین ستون‌ها
    csvContent +=
      "ID,Username,Role,Total Tasks,Todo Tasks,Doing Tasks,Done Tasks\n";
    csvContent += report
      .map((item) => Object.values(item).join(","))
      .join("\n");
    const encodedUri = encodeURI(csvContent);

    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", times + "_" + "report.csv");
    document.body.appendChild(link);
    link.click();
  };

  if (loading === "loading") return <div>Loading...</div>;

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePickerStyles>
            <div className="marinesdate">
              <h3>start</h3>
              <DatePicker
                value={startDate || ""}
                onChange={setStartDate}
                defaultValue={dayjs("2024-04-17")}
                format="DD-MM-YYYY"
              />
              <h3>end</h3>
              <DatePicker
                value={endDate || ""}
                onChange={setEndDate}
                defaultValue={dayjs("2024-04-17")}
                format="DD-MM-YYYY"
              />
              <Button variant="outlined" onClick={getReportAlluser}>
                دریافت اطلاعات
              </Button>
            </div>
          </DatePickerStyles>
        </DemoContainer>
      </LocalizationProvider>
      <TableContainer component={Paper}>
        <Button onClick={downloadCSV}>Download CSV</Button>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right">Total Tasks</TableCell>
              <TableCell align="right">Todo Tasks</TableCell>
              <TableCell align="right">Doing Tasks</TableCell>
              <TableCell align="right">Done Tasks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {report?.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.id}
                </TableCell>
                <TableCell align="right">{item.username}</TableCell>
                <TableCell align="right">{item.role}</TableCell>
                <TableCell align="right">{item.total_tasks}</TableCell>
                <TableCell align="right">{item.todo_tasks}</TableCell>
                <TableCell align="right">{item.doing_tasks}</TableCell>
                <TableCell align="right">{item.done_tasks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

ReportTable.prop_type = {
  report: PropTypes.any,
};
export default ReportTable;
