import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import GetTiposCuentas from "../utils/getTiposCuentas";
import { useNavigate } from "react-router-dom";

function RegistroCuenta() {
  const data = GetTiposCuentas();
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [cuenta, setCuenta] = useState({
    nombre: "",
    descripcion: "",
    monto_actual: 0,
    id_tipo_cuenta: 1,
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      fetch("http://localhost:8000/cuentas/crear-cuenta/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cuenta),
      })
        .then((response) => {
          if (response.ok) {
            alert("CUENTA REGISTRADA CON EXITO!");
            navigate("/cuentas");
          } else {
            console.error("Error al registrar los datos en la API.");
          }
        })
        .catch((error) => {
          console.error("Error de red:", error);
        });
    }
    setValidated(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCuenta({ ...cuenta, [name]: value });
  };

  return (
    <div>
      <h1>Registrar Cuentas</h1>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        action="/cuentas"
      >
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
        <Row className="mb-2">
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Monto Actual * </Form.Label>
            <Form.Control
              type="number"
              name="monto_actual"
              placeholder="Monto actual"
              required
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Tipo de Cuenta * </Form.Label>
            <Form.Select name="id_tipo_cuenta" onChange={handleInputChange}>
              {data
                ? data.map((tc, index) => (
                    <option key={index} value={tc.id}>
                      {tc.nombre}
                    </option>
                  ))
                : [
                    <option key={0} value={""}>
                      No hay elementos
                    </option>,
                  ]}
            </Form.Select>
          </Form.Group>
        </Row>

        <Row />
        <Button type="submit" variant="success">
          Registrar
        </Button>

        <Button variant="danger" href="/cuentas">
          Cancelar
        </Button>
      </Form>
    </div>
  );
}

export default RegistroCuenta;
