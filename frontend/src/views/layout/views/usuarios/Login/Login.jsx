import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";

function Login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Container
      className="justify-content-center align-items-center w-100"
      style={{ display: "inline-block" }}
    >
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group
          as={Col}
          controlId="validationCustomUsername"
          className="mb-3"
        >
          <Form.Label>Usuario</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Ingresa un usuario"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Ingresa un usuario correcto
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group
          as={Col}
          controlId="validationCustomPassword"
          className="mb-3"
        >
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="******"
            defaultValue=""
          />
          <Form.Control.Feedback type="invalid">
            Ingresa una contraseña correcta
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" className="mb-3">
          Ingresar a Casa Cuenta
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
