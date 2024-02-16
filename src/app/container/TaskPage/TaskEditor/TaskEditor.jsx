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
import { updateUserStatusTask } from "./UpdateStatuseSlice";
import { reportFetchTask } from "./../ReportTable/getReportByTask/index";
import { deassignTask } from '../../../api/auth';
import { Card, CardContent, Typography, Avatar } from "@mui/material";

const StyledDiv = styled.div`
  .editor {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 400px;
    margin: auto;
  }
  .data_editor {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    margin: auto;
  }
  .views {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  .btn-logs {
    width: 150px;
  }
`;

const StyledButton = styled(Button)`
  && {
    background-color: #1976d2;
    color: white;
  }
`;

const StyledTaskDiv = styled.div`
  margin: 10px;
  padding: 10px;
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

const StyledCard = styled(Card)`
  margin: 20px;
  background-color: #f5f5f5;
`;

const StyledDivs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function TaskEditor({ task, onDelete }) {
  const [editedTask, setEditedTask] = useState(task || {});
  const dispatch = useDispatch();
  const { uploadedImage } = useSelector((state) => state?.bannerSlice);
  const { tasks } = useSelector((state) => state?.getusertask);
  const entities = useSelector((state) => state?.tasksReport?.entities);

  const handleInputChange = (event) => {
    setEditedTask({
      ...editedTask,
      [event.target.name]: event.target.value,
    });
  };

  const handleTaskClick = (task) => {
    dispatch(reportFetchTask(task?.taskId));
    setEditedTask(task);
  };

  const handleFileUpload = (event) => {
    dispatch(uploadBanner(event.target.files[0]));
  };

  const handleSave = () => {
    dispatch(updateUserStatusTask(editedTask));
  };

  const handleDelete = (task) => {
    //TODO  بایستی متد دیتچ از اساین تسک رو پیاده سازی کنیم
    dispatch(deassignTask({ taskId: task.taskId, userIds: task.userId }))

  };

  useEffect(() => {
    dispatch(fetchTasksUser());
  }, []);

  useEffect(() => {
    setEditedTask({ ...editedTask, banner: uploadedImage });
  }, []);
  return (
    <DashboardPage>
      <StyledDiv>
        <StyledDivs>
          {entities &&
            entities.map((report) => (
              <StyledCard
                key={`${report.id}/${report?.taskId}_${report.userId}`}
              >
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {report?.name}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {report?.description}
                  </Typography>
                  <StyledDivs>
                    <Avatar src={report?.filename} variant="rounded" />
                  </StyledDivs>
                </CardContent>
              </StyledCard>
            ))}
        </StyledDivs>
        <div className="editor">
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
              onChange={handleInputChange}
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
          <StyledButton
            variant="contained"
            color="primary"
            onClick={handleSave}
          >
            ذخیره
          </StyledButton>
          <StyledButton
            variant="contained"
            color="secondary"
            onClick={handleDelete}
          >
            حذف
          </StyledButton>
        </div>
        <StyledDiv>
          <div className="data_editor">
            {tasks &&
              tasks.map((task) => (
                <StyledTaskDiv key={task.id}>
                  <div className="views">
                    <Button
                      variant="outlined"
                      className="btn-logs"
                      onClick={() => handleTaskClick(task)}
                    >
                      دریافت گزارشات
                    </Button>
                    <h3>{task.name}</h3>
                    <p>{task.description}</p>
                    <p>وضعیت: {task.status}</p>
                    <Button
                      variant="outlined"
                      className="btn-logs"
                      onClick={() => handleDelete(task)}
                    >
                     حذف اساین
                    </Button>
                  </div>
                </StyledTaskDiv>
              ))}
          </div>
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
  onDelete: PropTypes.func,
  onUploadFile: PropTypes.func,
  onChangeStatus: PropTypes.func,
};

export default TaskEditor;
