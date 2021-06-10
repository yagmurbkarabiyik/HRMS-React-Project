import React from "react";
import { Header, Icon, Table } from "semantic-ui-react";
import CandidateService from "../services/candidateService";
import { useState, useEffect } from "react";
import { Button } from 'semantic-ui-react'

export default function CandidateList() {
  const [candidates, setcandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidates()
      .then((result) => setcandidates(result.data.data));
  }, []);
  return (
    <div>
      <Header as="h2">
        <Icon name= "clipboard list"/>
        <Header.Content>Candidates</Header.Content>
      </Header>
      <Table celled color ="purple">
        <Table.Header className="text">
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>E-mail</Table.HeaderCell>
            <Table.HeaderCell>Details</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
            {candidates.map((candidate)=> (
                <Table.Row key = {candidate.id} className ="text">
                    <Table.Cell>{candidate.firstName}</Table.Cell>
                    <Table.Cell>{candidate.lastName}</Table.Cell>
                    <Table.Cell>{candidate.email}</Table.Cell>
                    <Table.Cell><Button basic color ="purple" >Details</Button></Table.Cell>

                </Table.Row>

            ))

            }
        </Table.Body>
      </Table>
    </div>
  );
}
