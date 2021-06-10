import React from "react";
import { Header, Icon, Table, Button } from "semantic-ui-react";
import { useState, useEffect } from "react";
import EmployeeService from "../services/employeeService";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    let employeeService = new EmployeeService();
    employeeService
      .getEmployees()
      .then((result) => setEmployees(result.data.data));
  }, []);
  return (
    <div>
      <Header as="h2">
        <Icon name="clipboard list" />
        <Header.Content>Employees</Header.Content>
      </Header>
      <Table celled color="purple">
        <Table.Header className="text">
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Details</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employees.map((employee) => (
            <Table.Row key={employee.id} className="text">
              <Table.Cell>{employee.firstName}</Table.Cell>
              <Table.Cell>{employee.lastName}</Table.Cell>

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
