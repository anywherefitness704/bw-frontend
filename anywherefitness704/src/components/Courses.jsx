import React, { useEffect, useState, useContext } from "react";
import { CoursesContext } from "../contexts/CoursesContext";

import Course from "../components/Course";
import styled from "styled-components";

export default function Courses() {
  const courseListData = useContext(CoursesContext);

  return (
    <>
      <h2>Courses</h2>
      <StyledSection>
        {courseListData &&
          courseListData.map((course) => <Course course={course} />)}
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
