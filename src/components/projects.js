import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Car,
  CardActions,
  CardTitle,
  Button,
  CardMenu,
  IconButton,
  Card,
  CardText
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activetab: 0 };
  }

  tooglecatagories() {
    if (this.state.activetab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minwidth: "450", margin: "auto" }}>
            <CardTitle style={{ color: "green", height: "170px" }}>
              React Project 1
            </CardTitle>
            <CardText>This is my first project in react</CardText>
            <CardActions>
              <Button colored> Live Demo </Button>
              <Button colored> Github </Button>
            </CardActions>
          </Card>
          <Card shadow={5} style={{ minwidth: "450", margin: "auto" }}>
            <CardTitle style={{ color: "green", height: "170px" }}>
              React Project 1
            </CardTitle>
            <CardText>This is my first project in react</CardText>
            <CardActions>
              <Button colored> Live Demo </Button>
              <Button colored> Github </Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activetab === 1) {
      return (
        <div>
          <Card shadow={5} style={{ minwidth: "450", margin: "auto" }}>
            <CardTitle style={{ color: "green", height: "170px" }}>
              React Project 1
            </CardTitle>
            <CardText>This is my first project in react</CardText>
            <CardActions>
              <Button colored> Live Demo </Button>
              <Button colored> Github </Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activetab === 2) {
      return (
        <div>
          <h1> this is 3 </h1>
        </div>
      );
    } else if (this.state.activetab === 3) {
      return (
        <div>
          <h1> this is 4 </h1>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="catagory-tabs">
        <Tabs
          activetab={this.state.activetab}
          onChange={tabid => this.setState({ activetab: tabid })}
          ripples
        >
          <Tab>React</Tab>
          <Tab>React native</Tab>
          <Tab>HTML</Tab>
          <Tab>CSS</Tab>
        </Tabs>

        <Grid className="">
          <Cell col={12}>
            <div className="content"> {this.tooglecatagories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
