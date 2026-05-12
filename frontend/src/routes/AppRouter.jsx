import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Recepcion from "../pages/Recepcion";
import Incidentes from "../pages/Incidentes";
import Operaciones from "../pages/Operaciones";
import Historial from "../pages/Historial";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/recepcion" element={<Recepcion />} />

          <Route path="/incidentes" element={<Incidentes />} />

          <Route path="/operaciones" element={<Operaciones />} />

          <Route path="/historial" element={<Historial />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
