import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import Section from "./Section";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridColumn width={4}>
          <Sidebar />
        </GridColumn>
        <GridColumn width={12}>
          <Section></Section>
        </GridColumn>
      </Grid>
    </div>
  );
}
