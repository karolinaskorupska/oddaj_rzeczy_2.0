import React from "react";
import { Container, Row, Col } from "react-grid-system";
import AboutUs from './AboutUs';
import ImgPeople from '../../assets/People.jpg';
import ImgSignature  from '../../assets/Signature.svg';

const Section1e = () => {
  return (
    <div className="secton1d">
      <Container fluid>
        <Row>
          <Col debug xl={6}>
            <AboutUs />
            <img src={ImgSignature} alt="Signature Img"></img>
          </Col>
          <Col debug xl={6}>
              <img src={ImgPeople} alt="People Img"></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section1e;