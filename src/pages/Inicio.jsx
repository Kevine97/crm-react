import { useEffect, useState } from "react";

const Inicio = () => {

  const [clientes, setClientes] = useState([])

  useEffect(() => {
    const getCliente = async () => {
      try {
        const url = "http://localhost:4000/clientes";
        const repuesta = await fetch(url);
        const resultado = await repuesta.json();
        setClientes(resultado);
      } catch (error) {
        console.log(error);
      }
    };
    getCliente();
  }, []);

  return(
    <>
      <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>

      <table className="w-full mt-5 table-auto shadow-md bg-white">
        <thead className="bg-blue-800 text-white ">
            <tr>
              <th className="p-2">Nombre</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Empresa</th>
              <th className="p-2">Acciones</th>
            </tr>
        </thead>

        <tbody>

        </tbody>
      </table>
    </>
  );
};

export default Inicio;