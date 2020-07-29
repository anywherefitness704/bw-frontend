import React, { useEffect, useState, useContext } from "react";
import { CoursesContext } from "../contexts/CoursesContext";

// import { axiosWithAuth } from "../utils/axiosWithAuth";
import axiosWithAuth from "../utils/axiosWithAuth";

import Course from "../components/Course";
import styled from "styled-components";

export default function Courses() {
  const courseListData = useContext(CoursesContext);
  const [state, setState] = useState(courseListData);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/auth/users/classes")
      .then((res) => {
        console.log(res.data.data);

        setState({
          data: res.data.data,
        });
        courseListData.data = res.data.data;
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <StyledSection>
        {state.data &&
          state.data.map((course) => (
            <Course key={course.id} course={course} />
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
