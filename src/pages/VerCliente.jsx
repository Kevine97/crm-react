import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Avatar from "../components/img/rick_sanchez.svg";
import Spiner from "../components/Spiner";
import { rutas } from "../data/rutas";

const VerCliente = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [dataCliente, setDataCliente] = useState({});
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const getDataCliente = async () => {
      let url = `http://localhost:4000/clientes/${id}`;
      const resultado = await fetch(url);
      const respuesta = await resultado.json();
      setDataCliente(respuesta);
      setCargando(!cargando);
    };
    getDataCliente();
  }, []);

  return (
    <>
      {cargando ? (
        <Spiner />
      ) : Object.keys(dataCliente).length === 0 ? (
        <p className="text-center my-4 bg-blue-800 text-white font-bold p-3 uppercase">
          NO hay resultado
        </p>
      ) : (
        <div className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto">
          <div className="flex flex-col items-center pb-10">
            <img
              className="mb-3 w-24 h-24 rounded-full shadow-lg mt-5"
              src={Avatar}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-4xl font-medium text-gray-800 dark:text-white">
              {dataCliente.nombre}
            </h5>
            <span className="text-md text-gray-500 dark:text-gray-400">
              {dataCliente.empresa}
            </span>
            <span className="text-md text-gray-500 dark:text-gray-400">
              {dataCliente.email}
            </span>
            <span className="text-md text-gray-500 dark:text-gray-400">
              {dataCliente.telefono}
            </span>
            <div className="flex px-5 w-full space-x-3">
              <button
                onClick={() => navigate(rutas.cliente)}
                className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-sm rounded-md cursor-pointer"
              >
                Ver todos los clientes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VerCliente;
