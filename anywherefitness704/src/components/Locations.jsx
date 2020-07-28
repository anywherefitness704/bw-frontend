import React, { useContext } from "react";
import { LocationsContext } from "../contexts/LocationsContext";

import Location from "./Location";
import styled from "styled-components";

export default function Locations() {
  const locationsListData = useContext(LocationsContext);

  return (
    <>
      <h2>Locations</h2>
      <StyledSection>
        {locationsListData &&
          locationsListData.map((location) => <Location location={location} />)}
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
