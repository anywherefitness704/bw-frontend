import React, { useEffect, useState } from "react";
import { courseListData } from "../resources/dummyData";

import Course from "../components/Course";
import styled from "styled-components";

const initialCourseList = [];

export default function Courses() {
  const [courseList, setCourseList] = useState(initialCourseList);

  useEffect(() => {
    // throw network stuff here later
    setCourseList(courseListData);
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <StyledSection>
        {courseList && courseList.map((course) => <Course course={course} />)}
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
