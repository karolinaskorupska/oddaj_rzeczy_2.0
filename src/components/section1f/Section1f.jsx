import React from "react";

import { Container, Row, Col } from "react-grid-system";
import FoundationsList from "./FoundationsList";
import ImgDecoration from "../../assets/Decoration.svg";

const Section1f = () => {
  return (
    <div className="Section1f" id="Section1f">
      <Container fluid>
        <Row>
          <Col>
            <div className="foundationHeader">
              <h2>Komu pomagamy?</h2>
              <img src={ImgDecoration} alt="Img Decoration"></img>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="foundationKind" id="foundation">
              <h3><a href="">Fundacjom</a></h3>
              <h3><a href="">Organizacjom <br></br>pozarządowym</a></h3>
              <h3><a href="">Lokalnym <br></br>zbiórkom</a></h3>
            </div>
          </Col>
        </Row>
        <Row justify="center">
          <Col >
            <div className="foundationDescription">
              <p>
              W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z
              którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu
              pomagają i czego potrzebują.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <FoundationsList />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="pages">
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section1f;
