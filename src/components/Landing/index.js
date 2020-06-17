import React from "react";

import { Container, Row, Col } from "react-grid-system";
import { Link } from 'react-router-dom';

import ImgDecoration from '../../assets/Decoration.svg';

import Navigation from "../Navigation";
import Menu from "../Menu";

const Landing = () => (
  <Container fluid style={{ margin: 0, padding: 0 }}>
    <div className="landing">
      <Row>
        <Col>
          <header>
            <div className="banner">
              <Navigation />
              <Menu />

              <div className="txt">
                <h1>Zacznij pomagać! <br></br>Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={ImgDecoration} alt="Decoration Img"></img>
                <div className="headerButtons">
                <button className="BtnGiveAway"><Link to="/login">Oddaj rzeczy</Link></button>
                <button className="BtnOrganize"><Link to="/login">Zorganizuj zbiórkę</Link></button>
                </div>
              </div>
            </div>
          </header>
        </Col>
      </Row>
    </div>
  </Container>
);

export default Landing;
