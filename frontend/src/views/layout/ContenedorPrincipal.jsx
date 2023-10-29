import Rutas from "../../Rutas";
import Navbar from "./navbar/Navbar";

function ContenedorPrincipal() {
  return (
    <div style={{ margin: "20px" }}>
      <header>
        <Navbar />
      </header>
      <main style={{ padding: "10px" }}>
        <Rutas />
      </main>
    </div>
  );
}

export default ContenedorPrincipal;
