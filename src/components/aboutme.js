import React, { Component } from "react";
import { Grid, Cell, Button } from "react-mdl";

class Aboutme extends Component {
  render() {
    return (
      <div>
        <Grid className="about-us">
          <Cell col={12}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1> My Passions & Personality</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Cell>
        </Grid>
        <Grid className="about-content">
          <Cell col={6}>
            <img
              src={require("../Images/about-me.jpg")}
              alt="avatar"
              style={{
                height: "200 px",
                width: "70%",
                marginLeft: "35px",
                marginTop: "100px"
              }}
            />
          </Cell>
          <Cell col={6}>
            <h1 style={{ marginTop: "150px" }}>A few fun facts about myself</h1>
            <p style={{ fontFamily: "Anton", lineHeightStep: "1.8em" }}>
              I work as a Desginer, I love pour over coffee, I have a cat named
              after MacGyver, my favorite number is 22, I'm not a huge fan of
              IPAs, I play video games like it's my life, I knew what I wanted
              to do at the age of 13, I downhill mountain bike, my favorite food
              is bacon, and I broke my left arm twice.
            </p>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={2}></Cell>
          <Cell col={8}>
            <h1 style={{ textAlign: "center" }}>
              What I've done & what I can do{" "}
            </h1>

            <p
              style={{
                fontFamily: "oxygen",
                fontSize: "1.9em",
                lineHeightStep: "1px",
                lineHeight: "100%",
                letterSpacing: "2px",
                textAlign: "center"
              }}
            >
              Feel free to take a deeper look at what I've accomplished over the
              years and what I'm able to do for you. My resume goes over the
              standard items, but please understand that I don't embellish my
              capabilities (no good ever comes out of that).
            </p>
            <br />
          </Cell>
          <Cell col={2}></Cell>
        </Grid>
      </div>
    );
  }
}

export default Aboutme;
