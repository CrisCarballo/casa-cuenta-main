import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from 'react-router-dom';

function RegistroGrupo() {
  
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [grupo, setGrupo] = useState({
    nombre: "",
    descripcion: "",
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      fetch("http://localhost:8000/grupos/crear-grupo/", 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(grupo),
      }).then((response) => {
        if (response.ok) {
          alert("CUENTA REGISTRADA CON EXITO!")
          navigate('/grupos');
        } else {
          console.error('Error al registrar los datos en la API.');
        }
      })
      .catch((error) => {
        console.error('Error de red:', error);
      });
    }
    setValidated(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGrupo({ ...grupo, [name]: value });    
  };

  return (
    <div>
      <h1> Registrar Grupo </h1> 
      <Form noValidate validated={validated} onSubmit={handleSubmit} action="/cuentas">
        <Row className="mb-2">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Nombre *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nombre"
              defaultValue=""
              name="nombre"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Descripción </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Descripción"
              defaultValue=""
              name="descripcion"
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>
        <Row />
        <Button type="submit" variant="success">
          Registrar{" "}
        </Button>

        <Button variant="danger" href="/cuentas">
          Cancelar{" "}
        </Button>
      </Form>
    </div>
  );
}

export default RegistroGrupo;
