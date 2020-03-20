import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div style={{ display: "flex" }}>
            {this.props.skill}
            {/* Progress Bar with Buffering */}
            <ProgressBar
              style={{ margin: "auto", width: "70%" }}
              progress={this.props.progress}
              buffer={this.props.buffer}
            />
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
