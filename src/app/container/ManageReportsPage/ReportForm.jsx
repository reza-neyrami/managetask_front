import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { fetchCreateUsers } from "./createSlice/index";

import {
  TextField,
  Button,
} from "@material-ui/core";

export function ReportForm({ report: initialReport, onSubmit }) {
  const [report, setReport] = useState(initialReport);

  // Update the state when initialReport changes
  useEffect(() => {
    setReport(initialReport);
  }, [initialReport]);

  function handleChange(e) {
    setReport({
      ...report,
      [e.target.name]: e.target.value,
    });
  }

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(onSubmit(report));
  }

  function handleFileChange(e) {
    setReport({
      ...report,
      filename: e.target.files[0],
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="name"
        value={report?.name || ""}
        onChange={handleChange}
        label="نام"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        name="description"
        value={report?.description || ""}
        onChange={handleChange}
        label="توضیحات"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <input type="file" name="filename" onChange={handleFileChange} />
      <Button type="submit" variant="contained" color="primary">
        ثبت
      </Button>
    </form>
  );
}

ReportForm.propTypes = {
  report: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default ReportForm;
