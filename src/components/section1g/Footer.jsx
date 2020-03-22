import React from "react";
import IconFacebook from "../../assets/Facebook.svg";
import IconInstagram from "../../assets/Instagram.svg";
import { Container, Row, Col } from "react-grid-system";

const Footer = () => {
  return (
    <footer>
      <Container fluid style={{ margin: 0, padding: 0 }}>
        <Row >
          <Col xl={10} >
            <div className="copyright"><p>Copyright by Coders Lab</p></div>
          </Col>
          <Col xl={2}>
            <div className="icons">
              <img src={IconFacebook} alt="Facebook icon"></img>
              <img src={IconInstagram} alt="Instagram icon"></img>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
