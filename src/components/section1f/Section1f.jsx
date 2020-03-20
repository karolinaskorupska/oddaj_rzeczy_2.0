import React from "react";
import { Container, Row, Col } from "react-grid-system";
import FoundationsList from "./FoundationsList";
import ImgDecoration from "../../assets/Decoration.svg";

const Section1f = () => {
  return (
    <div className="secton1f">
      <Container>
        <Row>
          <Col>
            <h2>Komu pomagamy?</h2>
            <img src={ImgDecoration} alt="Img Decoration"></img>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="foundationName" id="foundation">
              <h3>Fundacjom</h3>
              <h3>Organizacjom pozarządowym</h3>
              <h3>Lokalnym zbiórkom</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="foundationDescription">
              W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z
              którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu
              pomagają i czego potrzebują.
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
