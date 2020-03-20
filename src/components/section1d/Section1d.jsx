import React from "react";
import { Container, Row, Col } from "react-grid-system";
import StepsHeader from "./StepsHeader";
import StepsImages from "./StepsImages";
import StepsButton from "./StepsButtons";

const Section1d = () => {
  return (
    <div className="secton1d">
      <Container>
        <Row>
          <Col debug>
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
