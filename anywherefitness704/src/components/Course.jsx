import React, { useContext } from "react";

import { UserContext } from "../contexts/UserContext";

import styled from "styled-components";
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

export default function Course(props) {
  const user = useContext(UserContext);
  const { course } = props;

  return (
    <StyledAccordion elevation={3}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <p>{course.name}</p>
      </AccordionSummary>
      <StyledAccordianDetails>
        <h5>{course.location}</h5>
        <p>{course.description}</p>
        <StyledButton>See course page</StyledButton>
        {user.userType === "instructor" && (
          <>
            <Button color="primary" variant="contained">
              Edit
            </Button>
            <Button color="secondary" variant="contained">
              Delete
            </Button>
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
