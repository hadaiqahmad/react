import React, { Component } from "react";
import { Grid, Cell, List } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills.js";

class Resume extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <div className="" style={{ textAlign: "center" }}>
            <img
              src={require("../Images/Hadaiq_Ahmad---2.png")}
              alt="avatar"
              style={{ height: "100 px" }}
            />
          </div>
          <h2 style={{ paddingTop: "2em" }}> Hadaiq Ahmad</h2>
          <h4 style={{ color: "grey" }}>Software Engineer</h4>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <p>
            An experienced professional looking to make my mark in the field. I
            am Hardworking, capable individual with superior computer skills
            working with documentation and QA teams as necessary to resolve
            product and document issues. Moreover, I possess over 1 year of
            experience as a Web Developer in UI Designing and back-end
            development, Quality Assurance, UAT Testing and Back-end Testing.
          </p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <h5> Address </h5>
          <p> Multan</p>
          <h5> Phone </h5>
          <p> 03002552228 </p>
          <h5> Email </h5>
          <p> hadaiqahmad28@gmail.com </p>
        </Cell>
        <Cell className="resume-right-col" col={8}>
          <h2> Education </h2>
          <Education
            startYear={2014}
            endYear={2018}
            schoolName={"National University of Sciences and Technology (NUST)"}
            degreename={"Bachelors of Science in Computer Science "}
            //schoolDescription={"NUST Islamabad"}
          />
          <hr style={{ backgroundColor: "white" }} />
          <Education
            startYear={2012}
            endYear={2014}
            schoolName={"KIPS College Multan"}
            degreename={"FSc Pre-Engineering"}
            //schoolDescription={"NUST Islamabad"}
          />
          <hr style={{ borderTop: "3px solid #e22947" }} />
          <h2> Experience </h2>
          <Experience
            startYear={"Jan 2019"}
            endYear={"Present"}
            CompanyName={"Jin Technologies"}
            Designation={"Software Support Engineer"}
            JobDescription={
              <ul>
                <li>
                  Provide first line IT Support to customers/clients over the
                  phone and through email
                </li>
                <li>Design and maintain the Company website</li>
                <li>
                  Create and maintain product support database to ensure
                  customer satisfaction
                </li>
              </ul>
            }
          />
          <Experience
            startYear={"Sep 2019"}
            endYear={"Jan 2019"}
            CompanyName={"iSmile Dental Software"}
            Designation={"Software Support Engineer"}
            JobDescription={
              <ul>
                <li>
                  Coordinate with manufacturing unit to resolve production
                  issues
                </li>
                <li>
                  Works directly with customers to provide services and help to
                  resolve software problems.
                </li>
                <li>
                  Provide first line IT Support to customers/clients over the
                  phone and through email
                </li>
              </ul>
            }
          />
          <hr style={{ borderTop: "3px solid #e22947" }} />
          <h2> Skills </h2>
          <Skills skill={"HTML5/CSS3"} progress={80} buffer={33} />
          <Skills skill={"Technical Support"} progress={82} buffer={28} />
          <Skills skill={"UI/UX"} progress={76} buffer={31} />
          <Skills skill={"Testing and Validation"} progress={80} buffer={21} />
          <Skills skill={"Machine Learning"} progress={60} buffer={21} />
          <Skills skill={"Network Security"} progress={80} buffer={10} />
          <Skills skill={"Web Development"} progress={72} buffer={33} />
        </Cell>
      </Grid>
    );
  }
}

export default Resume;
