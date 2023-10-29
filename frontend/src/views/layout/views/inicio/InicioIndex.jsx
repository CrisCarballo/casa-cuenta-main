import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardLogin from "../usuarios/Card/CardLogin";
import Home from "./Home";

function InicioIndex() {
  return (
    <Container
      style={{ margin: "20px" }}
      className="d-flex justify-content-center align-items-center h-100"
    >
      <Row>
        <Col xs={12} md={8} className="h-100">
          <Home />
        </Col>
        <Col xs={8} md={4} className="h-100">
          <CardLogin />
        </Col>
      </Row>
    </Container>
  );
}

export default InicioIndex;
