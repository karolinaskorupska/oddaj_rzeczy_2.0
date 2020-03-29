import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";
import FoundationsList from "./FoundationsList";
import ImgDecoration from "../../assets/Decoration.svg";

class Section1f2 extends Component {
  state = {
    description: "",
    list: [],
    currentPage: 1,
    itemsPerPage: 3
  };

  componentDidMount() {
    fetch(`http://localhost:4000/DataForSection1f/1`, {
      method: "GET"
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network error");
      })
      .then(data => {
        this.setState({
          description: data.description,
          list: data.list
        });
      });
  }

  getData = event => {
    event.preventDefault();

    const elementId = event.target.id;
    console.log(elementId);
    fetch(`http://localhost:4000/DataForSection1f/${elementId}`, {
      method: "GET"
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network error");
      })
      .then(data => {
        this.setState({
          description: data.description,
          list: data.list
        });
        console.log(data.list)
      });
  };

  render() {
    const { description, list } = this.state;
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
                <h3 id="1" onClick={this.getData}>
                  Fundacjom
                </h3>
                <h3 id="2" onClick={this.getData}>
                  Organizacjom <br></br>pozarządowym
                </h3>
                <h3 id="3" onClick={this.getData}>
                  Lokalnym <br></br>zbiórkom
                </h3>
              </div>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <div className="foundationDescription">
                <p>{description}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <FoundationsList list={list} />
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
  }
}

export default Section1f2;
