import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../constants/index";

import styled from "styled-components";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const initialFormState = {
  username: "",
  password: "",
};

export default function Login(props) {
  const [state, setState] = useState(initialFormState);
  const history = useHistory();

  const handleChanges = (e) => {
    console.log(e.target.value);
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      username: state.username,
      password: state.password,
    };
    axios
      .post(BASE_URL + "/api/auth/login", payload)
      .then((res) => {
        console.log("Login successful bro!", res);
        // console.log(userData);
        localStorage.setItem("userType", res.data.role);

        localStorage.setItem("token", res.data.token);
        props.setTokenState(res.data.token);
        history.push("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <RegistrationContainer>
      <StyledForm>
        <h2>Login</h2>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          value={state.username}
          onChange={handleChanges}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          value={state.password}
          onChange={handleChanges}
          type="password"
        />
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Login
        </Button>
      </StyledForm>
    </RegistrationContainer>
  );
}

const RegistrationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;

  * {
    margin: 1% 0;
  }
`;
