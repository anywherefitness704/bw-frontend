import React, { useState } from "react";

import styled from "styled-components";
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import axiosWithAuth from "../utils/axiosWithAuth";

export default function Course(props) {
  const { name, location, type, id } = props.course;
  const [state, setState] = useState({
    edit: false,
    name,
    location,
    type,
  });

  const toggleEdit = () =>
    setState({
      ...state,
      edit: !state.edit,
    });

  const submitChange = () => {
    const payload = {
      ...props.course,
      name: state.name,
      location: state.location,
      type: state.type,
    };
    console.log(props.id);
    axiosWithAuth()
      .put(`/api/auth/instructor/classes/${id}`, payload)
      .then((res) => {
        console.log(res);
        toggleEdit();
      })
      .catch((err) => {
        console.error(err);
      });
    // toggleEdit()
  };

  const editButton = () => {
    if (!state.edit) {
      toggleEdit();
    } else {
      submitChange();
    }
  };

  const changeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <StyledAccordion elevation={3}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        {!state.edit && <p>{state.name}</p>}
        {state.edit && (
          <TextField
            label="Course name:"
            name="name"
            value={state.name}
            onChange={changeHandler}
          />
        )}
      </AccordionSummary>
      <StyledAccordianDetails>
        {!state.edit && <h5>Location: {state.location}</h5>}
        {state.edit && (
          <TextField
            label="Course location:"
            name="location"
            value={state.location}
            onChange={changeHandler}
          />
        )}
        {!state.edit && <p>Exercise type: {state.type}</p>}
        {state.edit && (
          <TextField
            label="Excercise type:"
            name="type"
            value={state.type}
            onChange={changeHandler}
          />
        )}
        {/* <StyledButton>See course page</StyledButton> */}
        {localStorage.getItem("userType") === "instructor" && (
          <>
            <Button color="primary" variant="contained" onClick={editButton}>
              {!state.edit && <>Edit</>}
              {state.edit && <>Save Changes</>}
            </Button>

            {/* <Button color="secondary" variant="contained">
              Delete
            </Button> */}
          </>
        )}
      </StyledAccordianDetails>
    </StyledAccordion>
  );
}

const StyledAccordion = styled(Accordion)`
  width: 60%;
`;
const StyledAccordianDetails = styled(AccordionDetails)`
  flex-direction: column;
`;
const StyledButton = styled(Button)`
  &:hover {
    box-shadow: 1px 1px 3px black;
  }
`;
