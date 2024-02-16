import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import PropTypes from "prop-types";
import { fetchCreateUsers } from './createSlice/index';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";


export function UserForm({ user: initialUser, onSubmit }) {
  const [user, setUser] = useState(initialUser);

  // Update the state when initialUser changes
  useEffect(() => {
    setUser(initialUser);
  }, [initialUser]);

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  const dispatch = useDispatch();
  // ...

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(fetchCreateUsers(user));
  }

  return (
    <form onSubmit={handleSubmit||""}>
      <TextField
        name="username"
        value={user?.username || ""}
        onChange={handleChange}
        label="نام کاربری"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        name="email"
        value={user?.email || ""}
        onChange={handleChange}
        label="ایمیل"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        name="password"
        value={user?.password || ""}
        onChange={handleChange}
        label="رمز عبور"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <FormControl variant="outlined" margin="normal" fullWidth>
        <InputLabel id="role-label">نوع کاربری</InputLabel>
        <Select
          labelId="role-label"
          id="role"
          name="role"
          value={user?.role || ""}
          onChange={handleChange}
          label="نوع کاربری"
        >
          <MenuItem value="admin">مدیر</MenuItem>
          <MenuItem value="programmer">برنامه‌نویس</MenuItem>
          <MenuItem value="tester">تستر</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        ثبت
      </Button>
    </form>
  );
}

UserForm.propTypes = {
  // users: PropTypes.object,
  onSubmit: PropTypes.func,
};

UserForm.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default UserForm;
