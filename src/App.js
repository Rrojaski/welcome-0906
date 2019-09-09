import React, { useEffect, useState, Fragment, Component } from "react";

// Components
import BackVideo from "./components/BackVideo/BackVideo";
import Header from "./components/Header/Header";
import { Row, Col } from "./components/Grid/Grid";
import Navi from "./components/Navi/Navi";
import Head from "./layout/Header/Head";
import Weather from "./components/Weather/Weather";
import Youtube from "./components/Youtube/Youtube";

import "./App.scss";
import "./variables.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "hide"
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    if (this.state.display === "hide") {
      this.setState({
        display: "show"
      });
    } else {
      this.setState({
        display: "hide"
      });
    }
  }

  componentDidMount() {
    console.log(this.state.display);
  }

  render() {
    return (
      <Fragment>
        <div className="App">
          <BackVideo>
            <Youtube display={this.state.display} toggle={this.toggle} />
            <Head toggle={this.toggle} />
            <Row className="u-align-center">
              <Col size="col-1-of-2">
                <Header className="" size="xl">
                  Welocome!
                </Header>
              </Col>
              <Col size="col-1-of-2">
                <Weather />
              </Col>
            </Row>
          </BackVideo>
        </div>
      </Fragment>
    );
  }
}

export default App;
