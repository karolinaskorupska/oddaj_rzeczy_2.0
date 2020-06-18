import React, { useState, useEffect } from "react";
import Bags from "./Bags";
import Organizations from "./Organizations";
import Collections from "./Collections";
import { Container, Row, Col } from "react-grid-system";

const Stats = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/DataForStats")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setList(data);
      });
  }, []);
 
  return (
      <div className="Stats" id="Stats">
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
      </div>
  );
};

export default Stats;