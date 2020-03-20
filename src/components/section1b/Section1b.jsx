import React from "react";
import Header from "./Header";
import ImgHomeHero from "../../assets/Home-Hero-Image.jpg";
import { Container, Row, Col } from "react-grid-system";

const Section1b = () => {
  return (
    <Container>
      <div className="Section1b">
        <Row>
          <Col debug xl={6}>
            <div className="imageBox">
              <img src={ImgHomeHero} alt="Home Hero Img"></img>
            </div>
          </Col>
          <Col debug xl={6}>
            <div className="header">
              <Header />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Section1b;
