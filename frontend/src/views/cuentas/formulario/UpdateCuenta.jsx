import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import GetTiposCuentas from "../utils/getTiposCuentas";
import GetCuentaID from "../utils/getCuentaID";
import { useNavigate, useParams } from "react-router-dom";

function UpdateCuenta() {
  const { id } = useParams();
  const data = GetTiposCuentas();
  const cuenta = GetCuentaID();
  const [validated, setValidated] = useState(false);
  const [c, setCuenta] = useState(false);

  const navigate = useNavigate();

  // Cargar los datos de la cuenta cuando el componente se monta

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      fetch("http://localhost:8000/cuentas/modificar-cuenta/1/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(c),
      })
        .then((response) => {
          if (response.ok) {
            alert("CUENTA MODIFICADA CON EXITO!");
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
    setCuenta({ ...c, [name]: value });
  };

  return (
    <div>
      <h1> Modificar Cuentas </h1>
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
              defaultValue={cuenta.nombre}
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
              defaultValue={cuenta.descripcion}
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
              defaultValue={cuenta.monto_actual}
              required
              onChange={handleInputChange}
              disabled
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Tipo de Cuenta * </Form.Label>
            <Form.Select
              name="id_tipo_cuenta"
              onChange={handleInputChange}
              defaultValue={cuenta.id_tipo}
              disabled
            >
              {/* {console.log(Array.isArray(data))} */}
              {data
                ? data.map((tc, index) => (
                    <option key={index} value={tc.id}>
                      {tc.nombre}
                    </option>
                  ))
                : []}
            </Form.Select>
          </Form.Group>
        </Row>

        <Row />
        <Button type="submit" variant="success">
          Guardar{" "}
        </Button>

        <Button variant="danger" href="/cuentas">
          Cancelar{" "}
        </Button>
      </Form>
    </div>
  );
}

export default UpdateCuenta;
