import React from "react";
import { Row, Col } from "react-grid-system";
import StepsHeader from "./StepsHeader";
import StepsImages from "./StepsImages";
import StepsButton from "./StepsButton";

const Steps = () => {
  return (
    <div className="Steps" id="Steps">
      
        <Row>
          <Col>
            <StepsHeader />
            <StepsImages />
            <StepsButton />
          </Col>
        </Row>
  
    </div>
  );
};

export default Steps;