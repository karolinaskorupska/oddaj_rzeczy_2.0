import React from "react";
import { Container, Row, Col } from "react-grid-system";
import AboutUsInfo from "./AboutUsInfo";
import ImgSignature from "../../assets/Signature.svg";

const AboutUs = () => {
  return (
    <Container fluid style={{ margin: 0, padding: 0 }}>
      <div className="AboutUs" id="AboutUs">
        <Row>
          <Col xl={6} >
            <div className="TxtBox">
              <AboutUsInfo />
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

export default AboutUs;