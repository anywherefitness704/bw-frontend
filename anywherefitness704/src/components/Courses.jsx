import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

import Course from "../components/Course";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const initialState = {
  isLoading: false,
  data: [],
};

export default function Courses() {
  const [state, setState] = useState(initialState);
  const history = useHistory();

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

  const deleteCourse = (id) => {
    console.log("Gonna do it!");
    axiosWithAuth()
      .delete(`/api/auth/instructor/classes/${id}`)
      .then((res) => {
        console.log(`Deleted course with id: ${id}`);
        setState({
          ...state,
          data: state.data.filter((course) => course.id !== id),
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      {!state.isLoading && (
        <>
          <h2>Courses</h2>
          <StyledSection>
            {state.data &&
              state.data.map((course) => (
                <Course
                  key={course.id}
                  course={course}
                  deleteCourse={() => deleteCourse(course.id)}
                />
              ))}

            <StyledButton
              onClick={() => history.push("/courses/add")}
              variant="contained"
            >
              Add Course
            </StyledButton>
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
const StyledButton = styled(Button)`
  margin-top: 1% !important;
`;
