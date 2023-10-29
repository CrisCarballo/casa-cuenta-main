import Button from "react-bootstrap/Button";
import ListCuentas from "./lista/ListCuentas";

function CuentasIndex() {
  return (
    <div className="m-3">
      <h1> Cuentas Activas </h1>
      <ListCuentas />
      <br />
      <Button variant="success" href="/crear-cuentas">
        {" "}
        + Cuenta{" "}
      </Button>
    </div>
  );
}

export default CuentasIndex;
