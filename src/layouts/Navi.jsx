import React from "react";
import { Container, Icon, Menu } from "semantic-ui-react";
import { Button } from 'semantic-ui-react'

export default function Navi() {
  return (
    <div>
      
        <Menu inverted top = "fixed" size = "large">
          <Container>
              <Menu.Item>
                  <Icon name = "star half outline" size = "large"/>
                      HRMS
                 
              </Menu.Item>
            <Menu.Item name="Home" />
            <Menu.Item name="Job Postings" />
            <Menu.Menu position="right">
              <Menu.Item>
              <Button.Group>
                <Button>Sign In</Button>
                <Button.Or />
                <Button positive>Sign Up</Button>
              </Button.Group>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      
    </div>
  );
}
