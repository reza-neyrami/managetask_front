import React, { useState } from "react";
import {
  TextField,
  Button as MuiButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import styled from "styled-components";
import DashboardPage from "./../../DashboardPage/index";
import { submitTask } from "./createSlice";
import { useDispatch } from "react-redux";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled(TextField)`
  && {
    margin-bottom: 10px;
  }
`;

const SelectStyled = styled(Select)`
  && {
    margin-bottom: 10px;
  }
`;

const Button = styled(MuiButton)`
  && {
    background-color: #4caf50;
    color: white;
    &:hover {
      background-color: #45a049;
    }
  }
`;

function TaskForm() {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "todo",
  });

  const handleSetCreate = (key, value) => {
    setProductData({ ...productData, [key]: value });
  };

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(submitTask(productData));
    // اینجا شما می‌توانید داده‌های فرم را به سرور ارسال کنید
    console.log({ productData });
  };

  return (
    <DashboardPage>
      <Form onSubmit={handleSubmit}>
        <Input
          label="نام"
          value={productData.name || ""}
          onChange={(e) => handleSetCreate("name", e.target.value)}
        />
        <Input
          label="توضیحات"
          value={productData.description || ""}
          onChange={(e) => handleSetCreate("description", e.target.value)}
          multiline
        />
        <Input
          label="تاریخ شروع"
          type="date"
          value={productData.startDate || ""}
          onChange={(e) => handleSetCreate("startDate", e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <Input
          label="تاریخ پایان"
          type="date"
          value={productData.endDate || ""}
          onChange={(e) => handleSetCreate("endDate", e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <FormControl>
          <InputLabel>وضعیت</InputLabel>
          <SelectStyled
            value={productData.status || ""}
            onChange={(e) => handleSetCreate("status", e.target.value)}
          >
            <MenuItem value="todo">برای انجام</MenuItem>
            <MenuItem value="doing">در حال انجام</MenuItem>
            <MenuItem value="done">انجام شده</MenuItem>
          </SelectStyled>
        </FormControl>
        <Button type="submit" variant="contained">
          ایجاد وظیفه
        </Button>
      </Form>
    </DashboardPage>
  );
}

export default TaskForm;
