import React from "react";
import Header from "./Header";
import { Container, Row, Col } from "react-grid-system";

const Section1b = () => {
  return (
    <Container fluid style={{ margin: 0, padding: 0 }}>
      <div className="Section1b">
        <Row>
          <Col>
            <header>
              <Header />
            </header>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Section1b;
