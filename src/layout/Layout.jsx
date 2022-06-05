import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { rutas } from "../data/rutas";

const Layout = () => {
    let location = useLocation();
    let urlActual = location.pathname;

  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - CLIENTE
        </h2>

        <nav className="mt-10">
        <Link className={`${urlActual === rutas.cliente ? `bg-blue-700` : `bg-blue-800`} text-white text-2xl block mt-2  py-3 px-3 border-r-4 hover:bg-blue-700`} to={`${rutas.cliente}`}>Cliente</Link>
        <Link className={`${urlActual === rutas.newcliente ? `bg-blue-700` : `bg-blue-800`} text-white text-2xl block mt-2  py-3 px-3 border-r-4 hover:bg-blue-700`} to={`${rutas.newcliente}`}>Nuevo cliente</Link>
        </nav>
      </div>

      <div className="md:w-3/4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
