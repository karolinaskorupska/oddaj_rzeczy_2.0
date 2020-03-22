import React from "react";
import Form from "./Form";
import { Container, Row, Col } from "react-grid-system";
import ImgDecoration from "../../assets/Decoration.svg";


const Section1g = () => {
  return (
    <Container fluid style={{ margin: 0, padding: 0 }}>
      <div className="Section1g">
        <Row>
          <Col>
            <div className="txtBox">
              <h2>Skontaktuj się z nami</h2>
              <img src={ImgDecoration} alt="Decoration Img"></img>
              <Form />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Section1g;
