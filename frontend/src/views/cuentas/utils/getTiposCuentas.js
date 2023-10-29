import { useState, useEffect } from "react";

function GetTiposCuentas() {
  // Define un estado para almacenar los datos que obtienes de la API.
  const [data, setData] = useState([]);
  // Define un estado para controlar si se está cargando la información.
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://localhost:8000/cuentas/tipo/list/"
        );
        if (!response.ok) {
          throw new Error("Error al obtener los datos.");
        }
        const data = await response.json();
        setData(data); // Actualizamos el estado con los datos
        setLoading(false); // Marcamos la carga como completa
      } catch (error) {
        console.error("Error de red:", error);
        setLoading(false); // Marcamos la carga como completa incluso en caso de error
      }
    }

    fetchData(); // Llamamos a la función asincrónica
  }, []);

  if (loading) {
    return [];
  }

  return data;
}

export default GetTiposCuentas;
