import React from "react";
import Form from "./Form";
import { Row, Col } from "react-grid-system";
import ImgDecoration from "../../assets/Decoration.svg";
import Footer from './Footer';

const ContactForm = () => {
  return (
    
      <div className="ContactForm" id="ContactForm">
        <Row style={{marginRight: "5rem"}}>
          <Col >
            <div className="txtBox">
              <h2>Skontaktuj się z nami</h2>
              <img src={ImgDecoration} alt="Decoration Img"></img>
              <Form />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <Footer/>
          </Col>
        </Row>
      </div>

  );
};

export default ContactForm;