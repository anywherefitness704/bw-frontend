import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { backgroundColor } from "../Styles";
import { Card, Button } from "@material-ui/core";

export default function Dashboard() {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("token")) history.push("/login");
  }, []);

  return (
    <>
      <h2>Dashboard</h2>
      <StyledSection>
        <StyledCard elevation={3}>
          <h3>Courses</h3>
          <p>
            Come check out our collection of exercise class courses from
            cultures around the world.
          </p>
          <StyledButton
            variant="outlined"
            color="primary"
            onClick={() => history.push("/courses")}
          >
            See courses
          </StyledButton>
        </StyledCard>
        <StyledCard elevation={3}>
          <h3>Instructors</h3>
          <p>
            Meet our best in class instructors, who are prepared to bring you
            the highest quality service available.
          </p>
          <StyledButton
            variant="outlined"
            color="primary"
            onClick={() => history.push("/instructors")}
          >
            See instructors
          </StyledButton>
        </StyledCard>
        <StyledCard elevation={3}>
          <h3>Locations</h3>
          <p>See all our our locations in the globe.</p>
          <StyledButton
            variant="outlined"
            color="primary"
            onClick={() => history.push("/locations")}
          >
            See locations
          </StyledButton>
        </StyledCard>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;
const StyledCard = styled(Card)`
  width: 25%;
  padding: 1%;
`;
const StyledButton = styled(Button)`
  &:hover {
    box-shadow: 1px 1px 3px black;
  }
`;
