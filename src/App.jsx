import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { rutas } from "./data/rutas";
import Layout from "./layout/Layout";
import EditarCliente from "./pages/EditarCliente";
import Inicio from "./pages/Inicio";
import NuevoCliente from "./pages/NuevoCliente";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${rutas.cliente}`} element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path={`${rutas.nuevoCliente}`} element={<NuevoCliente />} />
          <Route path={`${rutas.editarCliente}/:id`} element={<EditarCliente />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
