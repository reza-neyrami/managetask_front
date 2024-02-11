import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loginUserAction } from "./../actions";
const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 300px;
  width: 100%;
`;

function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleset = (key, value) => {
    setUser({ ...user, [key]: value });
    // e.preventDefault();
    // Perform login logic here with email and password
    console.log("Email:", user);
  };
  const handleLogin = () => {
    // e.preventDefault();
    dispatch(loginUserAction(user));

  };

  return (
    <LoginPageContainer>
      <h3>Login</h3>
      <LoginForm>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          value={user.email}
          onChange={(e) => handleset('email',e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={user.password}
          onChange={(e) => handleset('password',e.target.value)}
        />
        <Button
          type="submit"
          onClick={handleLogin}
          variant="contained"
          color="primary"
          fullWidth
        >
          Login
        </Button>
      </LoginForm>
    </LoginPageContainer>
  );
}

export default LoginPage;
