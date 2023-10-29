import { Route, Routes } from "react-router-dom";
import PageNotFound from "./views/layout/views/PageNotFound";
import InicioIndex from "./views/inicio/InicioIndex";

function RutasLayout() {
  return (
    <Routes>
      <Route path="/" element={<InicioIndex />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default RutasLayout;
