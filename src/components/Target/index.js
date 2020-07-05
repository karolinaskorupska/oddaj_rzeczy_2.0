import React, { Component } from "react";
import {  Row, Col } from "react-grid-system";
import ImgDecoration from "../../assets/Decoration.svg";

class Target extends Component {
  state = {
    description: "",
    list: [],
    currentPage: 1,
    itemsPerPage: 3
  };

  componentDidMount() {
    fetch(`http://localhost:4000/DataForTarget/1`, {
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
    fetch(`http://localhost:4000/DataForTarget/${elementId}`, {
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
  };
  handleClick=event=>{
    this.setState({
      currentPage: Number(event.target.id)
    })
  }
  render() {
    const { description, list, currentPage, itemsPerPage } = this.state;
   
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems= list.slice(indexOfFirstItem, indexOfLastItem);
    const renderItems = currentItems.map((element, index) => {
      return (
        <li key={index}>
          <div className="foundation">
            <div className="leftSide">
              <h4 className="foundationName">{element.name}</h4>
              <p className="foundationMission">
                Cel i misja: {element.mission}
              </p>
            </div>
            <div className="rightSide">
              <p className="needs">{element.stuff}</p>
            </div>
          </div>
        </li>
      );
    });

    
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(list.length/itemsPerPage);i++){
      pageNumbers.push(i);
    };
    const renderPageNumbers= pageNumbers.map(number=>{
      return(
        <p
        key={number}
        id={number}
        onClick={this.handleClick}
        >
          {number}
        </p>
      )
    })
    return (
      <div className="Target" id="Target">
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
              <div className="foundationsList">
                <ul>
                  {renderItems}
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="pages">
                {renderPageNumbers}
              </div>
            </Col>
          </Row>
      </div>
    );
  }
}

export default Target;