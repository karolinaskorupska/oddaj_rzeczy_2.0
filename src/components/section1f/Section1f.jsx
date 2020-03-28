import React,{useEffect,useState} from "react";
import { Container, Row, Col } from "react-grid-system";
import FoundationsList from "./FoundationsList";
import ImgDecoration from "../../assets/Decoration.svg";

const Section1f = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/DataForSection1f")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setList(data);
      });
  }, []);
  const [fundations, setFundations] = useState(true);
  const [organizations, setOrganizations] = useState(false);
  const [collections, setCollections] = useState(false);
  const fundationsData = list[0];
  const organizationsData = list[1];
  const collectionsData = list[2];
  const {name, description, listOfFundations} = useState(fundationsData);
  console.log(name)
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
              <h3 onClick={()=> setFundations(!fundations)}>Fundacjom</h3>
              <h3 onClick={()=> setOrganizations(!organizations)}>Organizacjom <br></br>pozarządowym</h3>
              <h3 onClick={()=> setCollections(!collections)}>Lokalnym <br></br>zbiórkom</h3>
            </div>
          </Col>
        </Row>
        {setFundations && (
          <Row justify="center">
            <Col>
              <div className="foundationDescription">
                
              </div>
            </Col>
          </Row>
        )}

        {/* <Row justify="center">
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
        </Row> */}
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
