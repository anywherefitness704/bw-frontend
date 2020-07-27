import React, { useEffect, useState } from 'react'
import { courseListData } from '../resources/dummyData'

import styled from "styled-components"
import { 
  Card,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Expand
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons'

const initialCourseList = []

export default function Courses() {
  const [courseList, setCourseList] = useState(initialCourseList)

  useEffect(() => { // throw network stuff here later
    setCourseList(courseListData)
  }, [])

  return (
    <>
      <h2>Courses</h2>
      <StyledSection>
        {courseList && courseList.map(course => (
          <StyledAccordion elevation={3}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
            <p>{course.name}</p>
          </AccordionSummary>

            <StyledButton>See course page</StyledButton>
          </StyledAccordion>
        ))}
      </StyledSection>
    </>
  )
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
const StyledAccordion = styled(Accordion)`
  width: 60%;
`
const StyledButton = styled(Button)`
    &:hover {
        box-shadow: 1px 1px 3px black;
    }
`