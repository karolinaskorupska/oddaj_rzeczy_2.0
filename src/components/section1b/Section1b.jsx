import React from "react";
import Header from "./Header";
import ImgHomeHero from "../../assets/Home-Hero-Image.jpg";
import { Container, Row, Col } from "react-grid-system";

const Section1b = () => {
  return (
    <Container fluid style={{margin:0,padding:0}}>
      <div className="Section1b">
        <Row>
          {/* <Col  xl={5}>
            <div className="imageBox">
              <img src={ImgHomeHero} alt="Home Hero Img"></img>
            </div>
          </Col> */}
          <Col  xl={7}>
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
