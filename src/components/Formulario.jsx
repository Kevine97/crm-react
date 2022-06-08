import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Alerta from "../Mesagge/Alerta";
import { rutas } from "../data/rutas";
import Spiner from "./Spiner";

const Formulario = ({ dataCliente, cargando }) => {
  const navigate = useNavigate();
  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(4, "Nombre muy corto")
      .max(30, "Nombre muy largo")
      .required("El nombre es obligatorio"),
    empresa: Yup.string().required("El nombre de empresa es obligatorio"),
    email: Yup.string()
      .email("Email no valido")
      .required("El Email es obligatorio"),
    telefono: Yup.number()
      .min(4, "numero no valido")
      .positive("Numero no valido")
      .integer("Numero no valido")
      .typeError("Numero no valido")
      .required("El telefono es obligatorio"),
  });

  const handleSubmit = async (value) => {
    try {
      let respuesta;
      if (dataCliente.id) {
        const url = `http://localhost:4000/clientes/${dataCliente.id}`;
        respuesta = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(value),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        const url = "http://localhost:4000/clientes";
        respuesta = await fetch(url, {
          method: "POST",
          body: JSON.stringify(value),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }

      const resultado = await respuesta.json();
      navigate(rutas.cliente);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {cargando ? (
        <Spiner />
      ) : (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
          <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
            {dataCliente.nombre ? "Editar cliente" : "Agregar cliente"}
          </h1>

          <Formik
            initialValues={{
              nombre: dataCliente?.nombre ?? "",
              empresa: dataCliente?.empresa ?? "",
              telefono: dataCliente?.telefono ?? "",
              email: dataCliente?.email ?? "",
              notas: dataCliente?.notas ?? "",
            }}
            enableReinitialize={true}
            onSubmit={async (value, { resetForm }) => {
              await handleSubmit(value);
              resetForm();
            }}
            validationSchema={nuevoClienteSchema}
          >
            {({ errors, touched }) => {
              return (
                <Form className="mt-10">
                  <div className="mb-2">
                    <label className="text-gray-800" htmlFor="nombre">
                      Nombre
                    </label>
                    <Field
                      id="nombre"
                      type="text"
                      className="mt-2 block w-full p-3 bg-gray-50 outline-none rounded-md"
                      autoComplete="off"
                      placeholder="Nombre del cliente"
                      name="nombre"
                    />
                    {touched.nombre && errors.nombre && (
                      <Alerta>{errors.nombre}</Alerta>
                    )}
                  </div>

                  <div className="mb-2">
                    <label className="text-gray-800" htmlFor="empresa">
                      Empresa
                    </label>
                    <Field
                      id="empresa"
                      type="text"
                      className="mt-2 block w-full p-3 bg-gray-50 outline-none rounded-md"
                      autoComplete="off"
                      placeholder="Empresa del cliente"
                      name="empresa"
                    />
                    {touched.empresa && errors.empresa && (
                      <Alerta>{errors.empresa}</Alerta>
                    )}
                  </div>

                  <div className="mb-2">
                    <label className="text-gray-800" htmlFor="email">
                      Email
                    </label>
                    <Field
                      id="email"
                      type="email"
                      className="mt-2 block w-full p-3 bg-gray-50 outline-none rounded-md"
                      autoComplete="off"
                      placeholder="Email"
                      name="email"
                    />
                    {touched.email && errors.email && (
                      <Alerta>{errors.email}</Alerta>
                    )}
                  </div>

                  <div className="mb-2">
                    <label className="text-gray-800" htmlFor="telefono">
                      Telefono
                    </label>
                    <Field
                      id="telefono"
                      type="tel"
                      className="mt-2 block w-full p-3 bg-gray-50 outline-none rounded-md"
                      autoComplete="off"
                      placeholder="Telefono del cliente"
                      name="telefono"
                    />
                    {touched.telefono && errors.telefono && (
                      <Alerta>{errors.telefono}</Alerta>
                    )}
                  </div>

                  <div className="mb-2">
                    <label className="text-gray-800" htmlFor="notas">
                      Notas
                    </label>
                    <Field
                      as="textarea"
                      id="notas"
                      type="text"
                      className="mt-2 block w-full p-3 bg-gray-50 outline-none rounded-md h-40"
                      autoComplete="off"
                      placeholder="Notas del cliente"
                      name="notas"
                    />
                  </div>
                  <input
                    type="submit"
                    value={
                      dataCliente.nombre ? "Editar cliente" : "Agregar cliente"
                    }
                    className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg rounded-md cursor-pointer"
                  />
                </Form>
              );
            }}
          </Formik>
        </div>
      )}
    </>
  );
};

Formulario.defaultProps = {
  dataCliente: {},
};

export default Formulario;
