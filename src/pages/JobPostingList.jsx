import React from "react";
import { Header, Icon, Table, Button } from "semantic-ui-react";
import { useState, useEffect } from "react";
import JobPostingService from "../services/jobPostingService";

export default function JobPostingList() {
  const [jobPostings, setjobPostings] = useState([]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
        .getJobPostings()
        .then((result) =>setjobPostings(result.data.data)
    );
  }, []);

  return (
    <div>
      <Header as="h2">
        <Icon name="clipboard list" />
        <Header.Content>Job Postings</Header.Content>
      </Header>
      <Table celled color="purple">
        <Table.Header className="text">
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Open Position Count</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
            <Table.HeaderCell>Details</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPostings.map((jobPosting) => (
            <Table.Row key={jobPosting.id} className="text">
              <Table.Cell>{jobPosting.jobTitle?.title}</Table.Cell>
              <Table.Cell>{jobPosting.city?.name}</Table.Cell>
              <Table.Cell>{jobPosting.employer?.companyName}</Table.Cell>
              <Table.Cell>{jobPosting.description}</Table.Cell>
              <Table.Cell>{jobPosting.openPositionCount}</Table.Cell>
              <Table.Cell>{jobPosting.deadline}</Table.Cell>


              <Table.Cell>
                <Button basic color="purple">
                  Details
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
