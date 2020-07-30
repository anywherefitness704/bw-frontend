import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import Course from "../components/Course";
import styled from "styled-components";

const initialState = {
  isLoading: false,
  data: [],
};

export default function Courses() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/auth/users/classes")
      .then((res) => {
        console.log(res.data.data);

        setState({
          ...state,
          data: res.data.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      {!state.isLoading && (
        <>
          <h2>Courses</h2>
          <StyledSection>
            {state.data &&
              state.data.map((course) => {
                // console.log(course);
                return <Course key={course.id} course={course} />;
              })}
          </StyledSection>
        </>
      )}
    </>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
