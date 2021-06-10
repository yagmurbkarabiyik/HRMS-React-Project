import React from "react";
import { Icon, Menu } from "semantic-ui-react";

export default function Sidebar() {
  return (
    <div>
      <Menu inverted vertical>
        <Menu.Item name="search">
            <Icon name = "search" size = "large" className = "menu-left"/>

             Candidates
            
            </Menu.Item>
        <Menu.Item name="list layout">
            <Icon name = "list layout" size = "large"/>
             Job Title
            
            </Menu.Item>
        <Menu.Item name="users">
            <Icon name = "users" size = "large"/>
             Job Title
            
            
            </Menu.Item>
      </Menu>
    </div>
  );
}
