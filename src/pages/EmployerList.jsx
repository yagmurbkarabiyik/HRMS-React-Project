import React from 'react'
import EmployerService from '../services/employerService'
import { Header, Icon, Table, Button} from "semantic-ui-react";
import { useState, useEffect } from "react";

export default function EmployerList() {
    const [employers, setEmployers] = useState([])
    
    useEffect(() => {
        let employerService = new EmployerService();
        employerService
            .getEmployers()
            .then((result) => setEmployers(result.data.data))

    }, [])

    return (
        <div>
             <Header as="h2">
        <Icon name="clipboard list" />
        <Header.Content>Employers</Header.Content>
      </Header>
      <Table celled color="purple">
        <Table.Header className="text">
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Web Address</Table.HeaderCell>
            <Table.HeaderCell>Details</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employer) => (
            <Table.Row key={employer.id} className="text">
              <Table.Cell>{employer.companyName}</Table.Cell>
              <Table.Cell>{employer.webAddress}</Table.Cell>

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
    )
}
