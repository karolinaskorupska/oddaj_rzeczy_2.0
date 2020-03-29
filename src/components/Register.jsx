import React from "react";
import LogAndReg from "./section1b/LogAndReg";
import HeaderNav from "./section1b/HeaderNav";
import Section3a from "./section3a/Section3a";
import { Container, Row, Col } from "react-grid-system";

const Register = () => {
  return (
    <Container fluid style={{ margin: 0, padding: 0 }}>
      <div className="Register">
        <Row align="center" justify="end">
          <Col  xl={4}>
            <LogAndReg />
          </Col>
        </Row>
        <Row style={{ paddingRight: "4rem" }}>
          <Col  >
            <HeaderNav />
          </Col>
        </Row>
        <Row>
          <Col>
            <Section3a />
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default Register;
