import React from "react";
import Bags from "./Bags";
import Organizations from "./Organizations";
import Collections from "./Collections";
import { Container, Row, Col } from "react-grid-system";

const Section1c = () => {
  return (
    <Container>
      <div className="secton1c">
        <Row>
          <Col debug>
            <Bags />
          </Col>
          <Col debug>
            <Organizations />
          </Col>
          <Col debug>
            <Collections />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Section1c;
