import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={require("../Images/Hadaiq_Ahmad---2.png")}
              alt="avatar"
              className="avatar-image"
            />
            <div className="banner-text">
              <h1> Computer Scientist </h1>
              <hr />
              <p> UI Design | Support Engineer | React | HTML/CSS</p>

              <div className="social-icons">
                {/* LinkedIn */}
                <a
                  style={{ color: "white" }}
                  href="https://pk.linkedin.com/in/hadaiq-ahmad-75b745b4"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/hadaiqahmad"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                <a
                  href="https://www.facebook.com/ranahadaiq.ahmad.1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>

                {/* Youtube */}
                <a
                  href="https://twitter.com/HadaiqAhmad"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
