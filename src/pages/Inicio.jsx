import { useEffect, useState } from "react";
import Cliente from "../components/Cliente";
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

      <table className="w-full mt-5 table-auto shadow-md bg-white rounded-md">
        <thead className="bg-blue-800 text-white text-left rounded-tl-md">
            <tr className="rounded-tl-md">
              <th className="p-4 rounded-tl-md">Nombre</th>
              <th className="p-4">Contacto</th>
              <th className="p-4">Empresa</th>
              <th className="p-4 rounded-tr-md">Acciones</th>
            </tr>
        </thead>

        <tbody>
          {clientes.map((data) => <Cliente key={data.id} data={data}/>)}
        </tbody>
      </table>
    </>
  );
};

export default Inicio;