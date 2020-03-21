import React from "react";
import Form from "./Form";
import { Container, Row, Col } from "react-grid-system";
import ImgDecoration from "../../assets/Decoration.svg";
import IconFacebook from "../../assets/Facebook.svg";
import IconInstagram from "../../assets/Instagram.svg";

const Section1g = () => {
  return (
    <div className="section1g">
      <Container fluid>
        <Row>
          <Col>
            <h2>Skontaktuj się z nami</h2>
            <img src={ImgDecoration} alt="Decoration Img"></img>
            <Form />
          </Col>
        </Row>
        <Row>
          <footer>
            <div className="footer">
              <Col debug xl={10}>
                <div className="copyright">Copyright by Coders Lab</div>
              </Col>
              <Col  debug xl={2}>
                <div className="icons">
                  <img src={IconFacebook} alt="Facebook icon"></img>
                  <img src={IconInstagram} alt="Instagram icon"></img>
                </div>
              </Col>
            </div>
          </footer>
        </Row>
      </Container>
    </div>
  );
};

export default Section1g;
