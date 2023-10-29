import Card from "react-bootstrap/Card";
import Login from "../Login/Login";

function CardLogin() {
  return (
    <Card style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
      <Card.Body className="text-center">
        <Card.Title>Iniciar sesión</Card.Title>
        <div className="border-top my-3"></div>
        <Login />
      </Card.Body>
    </Card>
  );
}

export default CardLogin;
