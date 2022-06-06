import React from "react";

const Cliente = ({ data }) => {
  const { nombre, email, empresa, notas, id, telefono } = data;
  return (
    <tr className="shadow-md hover:bg-gray-50 hover:shadow-md">
      <td className="p-3">{nombre}</td>
      <td className="p-3">
        <p>
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {email}
        </p>
        <p>
          <span className="text-gray-800 uppercase font-bold">Telefono: </span>
          {telefono}
        </p>
      </td>
      <td className="p-3">{empresa}</td>
      <td className="p-4">
        <button
          type="button"
          className="bg-gray-800 hover:bg-gray-600 block w-full text-white p-2 uppercase font-bold text-xs rounded-md shadow-md mb-4"
        >
          Ver
        </button>
        <button
          type="button"
          className="bg-blue-800 hover:bg-blue-600 block w-full text-white p-2 uppercase font-bold text-xs rounded-md shadow-md mb-4"
        >
          Editar
        </button>
        <button
          type="button"
          className="bg-gray-800 hover:bg-gray-600 block w-full text-white p-2 uppercase font-bold text-xs rounded-md shadow-md"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Cliente;
