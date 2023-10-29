import GetCuentas from "../utils/getCuentas";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";

function ListCuentas() {
  const cuentas = GetCuentas();

  const eliminarCuenta = (id) => {
    // Realizar la solicitud HTTP para eliminar la cuenta
    axios
      .delete(`http://localhost:8000/cuentas/eliminar-cuenta/${id}/`)
      .then(() => {
        // Realizar alguna acción adicional si es necesario
        alert("Cuenta eliminada exitosamente");
      })
      .catch((error) => {
        // Manejar errores si es necesario
        alert("Error al eliminar la cuenta", error);
      });
  };

  return (
    <div>
      {cuentas.length === 0 ? (
        <p>Aún no hay cuentas, crea una cuenta para comenzar</p>
      ) : (
        <Row xs={1} md={4} className="g-3">
          {cuentas.map((c, index) => (
            <Col key={index}>
              <Card style={{ width: "18rem" }} key={c.id}>
                <Card.Header>
                  {c.nombre}
                  <div className="text-end">
                    <Button shape="circle" size="big">
                      <i className="bi bi-eye"></i>
                    </Button>
                    <Link to={`/editar-cuentas/${c.id}`}>
                      <Button shape="circle" size="big">
                        <i className="bi bi-pencil"></i>
                      </Button>
                    </Link>
                    <Button
                      shape="circle"
                      size="big"
                      onClick={() => eliminarCuenta(c.id)}
                      href="/cuentas"
                    >
                      <i className="bi bi-trash"></i>
                    </Button>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">
                    {c.descripcion}
                  </Card.Subtitle>
                  <Card.Text>{c.id_tipo.nombre}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-end">
                  {" "}
                  {c.monto_actual}{" "}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
export default ListCuentas;
