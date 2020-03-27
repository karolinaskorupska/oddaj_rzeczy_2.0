import React, { useState, useEffect } from "react";
import Bags from "./Bags";
import Organizations from "./Organizations";
import Collections from "./Collections";
import { Container, Row, Col } from "react-grid-system";

const Section1c = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/DataForSection1c")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setList(data);
      });
  }, []);
 
  return (
    <Container fluid style={{ margin: 0, padding: 0 }}>
      <Col className="Section1c" id="Section1c">
        <Row>
          <Col>
            <Bags list={list}/>
          </Col>
          <Col>
            <Organizations list={list} />
          </Col>
          <Col>
            <Collections  list={list}/>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default Section1c;
