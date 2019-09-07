import React, { Fragment } from "react";


// Components
import BackVideo from "./components/BackVideo/BackVideo";
import Header from "./components/Header/Header";
import { Row, Col } from './components/Grid/Grid';
import Navi from './components/Navi/Navi';
import Head from './layout/Header/Head';
import Weather from './components/Weather/Weather';

import "./App.scss";
import "./variables.scss";

function App() {
  return (
    <Fragment>
      <div className="App">
        <BackVideo>
          <Head />
          <Row className='u-align-center'>
            <Col size='col-1-of-2'>
              <Header className="" size='lg'>Welcome Back,</Header>
              <Header className="" size='xl'>Roman</Header>
            </Col>
            <Col size='col-1-of-2'>
              <Weather />
            </Col>
          </Row>
        </BackVideo>
      </div>
    </Fragment>
  );
}

export default App;
