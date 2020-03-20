import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Content, Drawer } from "react-mdl";
import Main from "./components/main";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <BrowserRouter>
          <Drawer />
          <Header
            className={"header-color"}
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Hadaiq Ahmad
              </Link>
            }
            scroll
          >
            <Navigation className="navbar">
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Hadaiq Ahmad
              </Link>
            }
          >
            <Navigation>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
