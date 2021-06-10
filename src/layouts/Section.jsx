import React from 'react'
import { Grid, GridColumn} from 'semantic-ui-react'
import CandidateList from '../pages/CandidateList'
import EmployeeList from '../pages/EmployeeList'
import JobPostingList from '../pages/JobPostingList'
import JobTitleList from '../pages/JobTitleList'
import EmployerList from '../pages/EmployerList'

export default function Section() {
    return (
        <div>
            <Grid.Row>
                <GridColumn width = {14}>
                    <CandidateList></CandidateList>
                </GridColumn>
                    <br></br>
                <GridColumn width = {14}>
                    <JobTitleList></JobTitleList>
                </GridColumn>
                <br></br>
                <GridColumn width = {14}>
                    <JobPostingList></JobPostingList>
                </GridColumn>
                <br></br>
                <GridColumn width = {14}>
                 <EmployeeList></EmployeeList>
                </GridColumn>
                <br></br>
                <GridColumn width = {14}>
                 <EmployerList></EmployerList>
                </GridColumn>
            </Grid.Row>
        </div>
    )
}
