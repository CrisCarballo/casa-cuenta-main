import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <Nav variant="tabs">
      <Nav.Item>
        <Nav.Link href="/dashboard" active={location.pathname === "/dashboard"}>
          Inicio
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/cuentas" active={location.pathname === "/cuentas"}>
          Cuentas
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/grupos" active={location.pathname === "/grupos"}>
          Grupos
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/usuarios" active={location.pathname === "/usuarios"}>
          Usuarios
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/inicio" active={location.pathname === "/inicio"}>
          Provisorio inicio con login
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="position-absolute end-0">
        <Nav.Link href="/cerrar-sesion">Cerrar Sesión</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
