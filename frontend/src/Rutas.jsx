import { Route, Routes } from "react-router-dom";
import Bienvenido from "./views/layout/views/Bienvenido";
import PageNotFound from "./views/layout/views/PageNotFound";
import DashboardIndex from "./views/dashboard/DashboardIndex";
import CuentasIndex from "./views/cuentas/CuentasIndex";
import RegistroCuenta from "./views/cuentas/formulario/RegistroCuenta";
import UpdateCuenta from "./views/cuentas/formulario/UpdateCuenta";
import GruposIndex from "./views/grupos/GruposIndex";
import ConfiguracionIndex from "./views/configuracion/configuracionIndex";

function Rutas() {
  return (
    <Routes>
      <Route path="/bienvenido" element={<Bienvenido />} />
      <Route path="*" element={<PageNotFound />} />

      <Route path="/dashboard" element={<DashboardIndex />} />

      <Route path="/cuentas" element={<CuentasIndex />} />
      <Route path="/crear-cuentas" element={<RegistroCuenta />} />
      <Route path="/editar-cuentas/:id" element={<UpdateCuenta />} />

      <Route path="/grupos" element={<GruposIndex />} />

      <Route path="/configuracion" element={<ConfiguracionIndex />} />
    </Routes>
  );
}

export default Rutas;
