import React from "react";
import { Container, Row, Col } from "react-grid-system";
import StepsHeader from "./StepsHeader";
import StepsImages from "./StepsImages";
import StepsButton from "./StepsButton";

const Section1d = () => {
  return (
    <div className="Section1d" id="Section1c">
      <Container fluid style={{ margin: 0, padding: 0 }}>
        <Row>
          <Col>
            <StepsHeader />
            <StepsImages />
            <StepsButton />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section1d;
