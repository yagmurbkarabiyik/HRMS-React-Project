import React from "react";
import { useState, useEffect } from "react";
import JobTitleService from "../services/jobTitleService";
import { Header, Icon, Table, Button} from "semantic-ui-react";

export default function JobTitleList() {
  const [jobTitles, setJobTitles] = useState([]);

  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService
      .getJobTitles()
      .then((result) => setJobTitles(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h2">
        <Icon name="clipboard list" />
        <Header.Content>Job Titles</Header.Content>
      </Header>
      <Table celled color="purple">
        <Table.Header className="text">
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Details</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobTitles.map((jobTitle) => (
            <Table.Row key={jobTitle.id} className="text">
              <Table.Cell>{jobTitle.title}</Table.Cell>

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
