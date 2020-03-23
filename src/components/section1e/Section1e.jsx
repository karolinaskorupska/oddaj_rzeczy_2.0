import React from "react";
import { Container, Row, Col } from "react-grid-system";
import AboutUs from "./AboutUs";
import ImgSignature from "../../assets/Signature.svg";

const Section1e = () => {
  return (
    <Container fluid style={{ margin: 0, padding: 0 }}>
      <div className="Section1e" id="Section1e">
        <Row>
          <Col xl={6} >
            <div className="TxtBox">
              <AboutUs />
              <img src={ImgSignature} alt="Signature Img" className="signature" ></img>
            </div>
          </Col>
          <Col xl={6} >
            <div className="imgPeople"></div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Section1e;
