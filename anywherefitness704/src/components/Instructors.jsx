import React from "react";
import { CoursesContext } from "../contexts/CoursesContext";

import styled from "styled-components";

export default function Instructors() {
  return (
    <>
      <h2>Instructors</h2>
    </>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
