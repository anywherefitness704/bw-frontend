import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const initialState = {
  name: "",
  instructor_name: "",
  type: "",
  intensity: "",
  location: "",
  date: "",
  max_size: "",
  duration: "",
  signedUp: "",
};

export default function AddCourse() {
  const [state, setState] = useState(initialState);
  const history = useHistory();

  const handleChanges = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const addCourse = () => {
    axiosWithAuth()
      .post("/api/auth/instructor/classes", state)
      .then((res) => history.push("/courses"))
      .catch((err) => console.error(err));
  };

  return (
    <CourseContainer>
      <StyledForm>
        <h2>Add Course</h2>
        <TextField
          onChange={handleChanges}
          label="Name"
          name="name"
          value={state.name}
        />
        <TextField
          onChange={handleChanges}
          label="Instructor name"
          name="instructor_name"
          value={state.instructor_name}
        />
        <TextField
          onChange={handleChanges}
          label="Type"
          name="type"
          value={state.type}
        />
        <TextField
          onChange={handleChanges}
          label="Intensity"
          name="intensity"
          value={state.intensity}
        />
        <TextField
          onChange={handleChanges}
          label="Location"
          name="location"
          value={state.location}
        />
        <TextField
          onChange={handleChanges}
          label="Date"
          name="date"
          value={state.date}
        />
        <TextField
          onChange={handleChanges}
          label="Max Size"
          name="max_size"
          value={state.max_size}
        />
        <TextField
          onChange={handleChanges}
          label="Duration"
          name="duration"
          value={state.duration}
        />
        <TextField
          onChange={handleChanges}
          label="Signed Up"
          name="signedUp"
          value={state.signedUp}
        />
        <Button onClick={addCourse} color="primary" variant="outlined">
          Add
        </Button>
        <Button onClick={() => history.push("/courses")} variant="outlined">
          Cancel
        </Button>
      </StyledForm>
    </CourseContainer>
  );
}

const CourseContainer = styled.div`
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
