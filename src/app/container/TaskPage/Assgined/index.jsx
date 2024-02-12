import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import styled from "styled-components";

import { fetchUserTasks } from "./../TaskSlice/index";
import { assigniedTask, fetchUsers } from "./../TaskSlice/assigned";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  margin: auto;
`;

const StyledButton = styled(Button)`
  && {
    background-color: #4caf50;
    color: white;
    &:hover {
      background-color: #45a049;
    }
  }
`;

function Assgined() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks?.data);

  const users = useSelector((state) => state.assgnied?.entities);
  console.log(users);
  //   console.log(tasks);
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [selectedTaskId, setSelectedTaskId] = useState("");
  const [selectedRole, setSelectedRole] = useState("programmer"); // اضافه کردن نقش انتخاب شده

  useEffect(() => {
    dispatch(fetchUsers(selectedRole)); // ارسال نقش به fetchUsers
    dispatch(fetchUserTasks());
  }, [dispatch, selectedRole]); // اضافه کردن selectedRole به dependencies

  const handleSubmit = (event) => {
    event.preventDefault();

    // ارسال وظیفه انتخاب شده به کاربران انتخاب شده
    dispatch(
      assigniedTask({ taskId: selectedTaskId, userIds: selectedUserIds })
    );
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormControl>
        <InputLabel>نقش</InputLabel>
        <Select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <MenuItem value="programmer">برنامه نویس</MenuItem>
          <MenuItem value="tester">تستر</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>کاربر</InputLabel>
        {users && (
          <Select
            multiple
            value={selectedUserIds}
            onChange={(e) => setSelectedUserIds(e.target.value)}
          >
            {users?.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                {console.log(user.id)}
                {user.username}
              </MenuItem>
            ))}
          </Select>
        )}
      </FormControl>
      <FormControl>
        <InputLabel>وظیفه</InputLabel>
        {tasks && (
          <Select
            value={selectedTaskId}
            onChange={(e) => setSelectedTaskId(e.target.value)}
          >
            {tasks?.map((task) => (
              <MenuItem key={task.id} value={task.id}>
                {task.name}
              </MenuItem>
            ))}
          </Select>
        )}
      </FormControl>
      <StyledButton type="submit" variant="contained">
        اختصاص وظیفه
      </StyledButton>
    </StyledForm>
  );
}

Assgined.propTypes = {
  onAssign: PropTypes.func,
  tasks: PropTypes.any,
  users: PropTypes.any,
};

export default Assgined;
