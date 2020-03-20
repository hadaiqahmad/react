import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.CompanyName}</h4>
          <h5> {this.props.Designation}</h5>
          <p>{this.props.JobDescription}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Experience;
