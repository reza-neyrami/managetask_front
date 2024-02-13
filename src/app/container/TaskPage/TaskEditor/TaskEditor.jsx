import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { uploadBanner } from "./../../BannerSlice/bannerSlice";
import DashboardPage from "./../../DashboardPage/index";

import { fetchTasksUser } from "./../GetTaskUser/index";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  margin: auto;
`;

const StyledButton = styled(Button)`
  && {
    background-color: #1976d2;
    color: white;
  }
`;


const StyledTaskDiv = styled.div`
  margin: 1em;
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease-in-out;

  h3 {
    margin: 0;
    color: #333;
  }

  p {
    margin: 0.5em 0;
    color: #666;
  }

  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;

function TaskEditor({ task, onSave, onDelete, onUploadFile, onChangeStatus }) {
  const [editedTask, setEditedTask] = useState(task || {});
  const dispatch = useDispatch();
  const { bannerSlice } = useSelector((state) => state?.bannerSlice);
  const { tasks } = useSelector((state) => state?.getusertask);
  console.log(tasks);
  const handleInputChange = (event) => {
    setEditedTask({
      ...editedTask,
      [event.target.name]: event.target.value,
    });
  };

  const handleTaskClick = (task) => {
    setEditedTask(task);
  };

  const handleFileUpload = (event) => {
    dispatch(uploadBanner(event.target.files[0]));
  };

  const handleStatusChange = (event) => {
    // onChangeStatus(task?.id, event.target.value);

    console.log(event.target.value);
  };

  const handleSave = () => {
    onSave(editedTask);
  };

  const handleDelete = () => {
    onDelete(task?.id);
  };

  useEffect(() => {
    dispatch(fetchTasksUser());
  }, []);
  return (
    <DashboardPage>
      <StyledDiv>
        <TextField
          label="نام"
          name="name"
          value={editedTask?.name || ""}
          onChange={handleInputChange}
        />
        <TextField
          label="توضیحات"
          name="description"
          value={editedTask?.description || ""}
          onChange={handleInputChange}
          multiline
        />
        <FormControl>
          <InputLabel>وضعیت</InputLabel>
          <Select
            name="status"
            value={editedTask?.status || ""}
            onChange={handleStatusChange}
          >
            <MenuItem value="todo">برای انجام</MenuItem>
            <MenuItem value="doing">در حال انجام</MenuItem>
            <MenuItem value="done">انجام شده</MenuItem>
          </Select>
        </FormControl>
        <StyledButton variant="contained" component="label">
          آپلود فایل
          <input type="file" hidden onChange={handleFileUpload} />
        </StyledButton>
        <StyledButton variant="contained" color="primary" onClick={handleSave}>
          ذخیره
        </StyledButton>
        <StyledButton
          variant="contained"
          color="secondary"
          onClick={handleDelete}
        >
          حذف
        </StyledButton>
        <StyledDiv>
          {tasks &&
            tasks.map((task) => (
              <StyledTaskDiv
                key={task.id}
                onClick={() => handleTaskClick(task)}
              >
                <h3>{task.name}</h3>
                <p>{task.description}</p>
                <p>وضعیت: {task.status}</p>
              </StyledTaskDiv>
            ))}
        </StyledDiv>
      </StyledDiv>
    </DashboardPage>
  );
}

TaskEditor.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    status: PropTypes.oneOf(["todo", "doing", "done"]).isRequired,
    userId: PropTypes.number.isRequired,
  }),
  onSave: PropTypes.func,
  onDelete: PropTypes.func,
  onUploadFile: PropTypes.func,
  onChangeStatus: PropTypes.func,
};

export default TaskEditor;
