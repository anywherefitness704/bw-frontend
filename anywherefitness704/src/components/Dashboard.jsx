import React from 'react';
import styled from "styled-components"
import { backgroundColor } from '../Styles'
import Card from '@material-ui/core/Card';

export default function Dashboard() {


    return (
        <>
        <h2>Dashboard</h2>
        <StyledSection>
            <StyledCard>
            <h3>Courses</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quidem dolor aliquid illo ab recusandae, voluptates ipsam necessitatibus sapiente officia magni expedita, ea eius voluptate explicabo magnam quaerat, quis doloremque.</p>
            </StyledCard>
            <StyledCard>
            <h3>Courses</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quidem dolor aliquid illo ab recusandae, voluptates ipsam necessitatibus sapiente officia magni expedita, ea eius voluptate explicabo magnam quaerat, quis doloremque.</p>
            </StyledCard>
            <StyledCard>
            <h3>Courses</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quidem dolor aliquid illo ab recusandae, voluptates ipsam necessitatibus sapiente officia magni expedita, ea eius voluptate explicabo magnam quaerat, quis doloremque.</p>
            </StyledCard>
        </StyledSection>
        </>
    )
}

const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`
const StyledCard = styled(Card)`
  width: 25%;
  padding: 1%;
`