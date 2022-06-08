import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Cliente from "../components/Cliente";
import Formulario from "../components/Formulario";
const EditarCliente = () => {
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
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente </h1>
      <p className="mt-3">Llena los siguientes campos para editar un cliente</p>
      
      {dataCliente?.nombre ? (
        <Formulario dataCliente={dataCliente} cargando={cargando} />
      ) : (
        <p className="bg-blue-800 text-center py-5 text-white text-4xl uppercase">
          {`Ciente Id --> ${id} no valido`}{" "}
        </p>
      )}
    </>
  );
};

export default EditarCliente;
