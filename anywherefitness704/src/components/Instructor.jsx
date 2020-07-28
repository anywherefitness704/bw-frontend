import React from "react";

import styled from "styled-components";
import { Button, Paper } from "@material-ui/core";

export default function Instructor(props) {
  const { instructor } = props;
  return (
    <StyledPaper elevation={3}>
      <Name>{instructor.name}</Name>
      <p>{instructor.location}</p>
    </StyledPaper>
  );
}
const Name = styled.p`
  font-weight: bold;
`;

const StyledPaper = styled(Paper)`
  width: 60%;
  margin: 1%;
  padding: 1%;
`;
