import React from "react";
import LogAndReg from "./section1b/LogAndReg";
import HeaderNav from "./section1b/HeaderNav";
import Section2a from "./section2a.jsx/Section2a";
import { Container, Row, Col } from "react-grid-system";

const Login = () => {
  return (
    <Container fluid style={{ margin: 0, padding: 0 }}>
      <div className="Login">
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
            <Section2a />
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default Login;
