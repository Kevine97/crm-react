import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { rutas } from "../data/rutas";
import Icon from '../icono.svg'
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
        <Link className={`${urlActual === rutas.cliente ? `bg-blue-700` : `bg-blue-800`} text-white text-2xl block mt-2  py-3 px-3 border-r-4 hover:bg-blue-700 rounded-md shadow-md`} to={`${rutas.cliente}`}>Cliente</Link>
        <Link className={`${urlActual === rutas.newcliente ? `bg-blue-700` : `bg-blue-800`} text-white text-2xl block mt-2  py-3 px-3 border-r-4 hover:bg-blue-700 rounded-md shadow-md`} to={`${rutas.newcliente}`}>Nuevo cliente</Link>
        </nav>
        <img src={Icon} alt="ICONO DE LA APP" className="img-icon" />
       </div>

      <div className="md:w-3/4 p-10 md:h-screen overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
