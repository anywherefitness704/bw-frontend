import React from "react";

import styled from "styled-components";
import { Button, Paper } from "@material-ui/core";

export default function Location(props) {
  const { location } = props.location;
  return <StyledPaper elevation={3}>{location}</StyledPaper>;
}

const StyledPaper = styled(Paper)`
  width: 60%;
  margin: 1%;
  padding: 1%;
`;
