import React from "react";
import Bags from "./Bags";
import Organizations from "./Organizations";
import Collections from "./Collections";
import { Container, Row, Col } from "react-grid-system";

const Section1c = () => {
  return (
    <Container fluid style={{ margin: 0, padding: 0 }}>
      <div className="Section1c">
        <Row>
          <Col >
            <Bags />
          </Col>
          <Col >
            <Organizations />
          </Col>
          <Col >
            <Collections />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Section1c;
