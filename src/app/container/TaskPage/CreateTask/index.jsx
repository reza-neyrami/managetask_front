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
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("todo");

  const handleSubmit = (event) => {
    event.preventDefault();

    // اینجا شما می‌توانید داده‌های فرم را به سرور ارسال کنید
    console.log({ name, description, startDate, endDate, status });
  };

  return (
    <DashboardPage>
      <Form onSubmit={handleSubmit}>
        <Input
          label="نام"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="توضیحات"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
        />
        <Input
          label="تاریخ شروع"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <Input
          label="تاریخ پایان"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <FormControl>
          <InputLabel>وضعیت</InputLabel>
          <SelectStyled
            value={status}
            onChange={(e) => setStatus(e.target.value)}
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
