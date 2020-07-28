import React, { useContext } from "react";
import { InstructorsContext } from "../contexts/InstructorsContext";

import Instructor from "./Instructor";
import styled from "styled-components";

export default function Instructors() {
  const instructorsListData = useContext(InstructorsContext);

  return (
    <>
      <h2>Instructors</h2>
      <StyledSection>
        {instructorsListData &&
          instructorsListData.map((instructor) => (
            <Instructor instructor={instructor} />
          ))}
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
