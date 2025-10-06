import React, { useState } from "react";
import Header from "../components/Header";
import BotonVolver from "../components/ButtonBack";

// 🔹 Mock de empresas (simula datos que podrían venir de la API)
const mockEmpresas = [
  { id: 1, nombre: "Tech Solutions Inc." },
  { id: 2, nombre: "InnovaSoft S.A." },
  { id: 3, nombre: "DataFlow Systems" },
];

const NewJob: React.FC = () => {
  const [formEmpleo, setFormEmpleo] = useState({
    titulo: "",
    descripcion: "",
    empresa: "",
    ubicacion: "",
    tipoContrato: "",
  });

  const [nuevaEmpresa, setNuevaEmpresa] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
    email: "",
  });

  const [empresas, setEmpresas] = useState(mockEmpresas);
  const [mostrarNuevaEmpresa, setMostrarNuevaEmpresa] = useState(false);

  // Manejar cambios del formulario principal
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormEmpleo({ ...formEmpleo, [name]: value });

    if (name === "empresa" && value === "nueva") {
      setMostrarNuevaEmpresa(true);
    } else if (name === "empresa") {
      setMostrarNuevaEmpresa(false);
    }
  };

  // Manejar cambios de los campos de la nueva empresa
  const handleNuevaEmpresaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNuevaEmpresa({ ...nuevaEmpresa, [name]: value });
  };

  // Guardar nueva empresa y actualizar lista
  const handleGuardarEmpresa = (e: React.FormEvent) => {
    e.preventDefault();
    const nueva = {
      id: empresas.length + 1,
      nombre: nuevaEmpresa.nombre,
    };
    setEmpresas([...empresas, nueva]);
    setFormEmpleo({ ...formEmpleo, empresa: nueva.nombre });
    setMostrarNuevaEmpresa(false);
    setNuevaEmpresa({ nombre: "", direccion: "", telefono: "", email: "" });
  };

  // Enviar aviso
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Nuevo aviso publicado:", formEmpleo);
  };

  return (
    <div className="pt-24 bg-alice-blue min-h-screen">
      <Header />
      <BotonVolver />

      <div className="max-w-2xl bg-white shadow-md rounded-2xl p-8 mx-auto my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Publicar Aviso de Empleo
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Título */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Título:
            </label>
            <input
              type="text"
              name="titulo"
              value={formEmpleo.titulo}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#409EAD] focus:outline-none"
            />
          </div>

          {/* Descripción */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Descripción:
            </label>
            <textarea
              name="descripcion"
              value={formEmpleo.descripcion}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#409EAD] focus:outline-none"
            />
          </div>

          {/* Empresa */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Empresa:
            </label>
            <select
              name="empresa"
              value={formEmpleo.empresa}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#409EAD] focus:outline-none"
            >
              <option value="">Seleccione una empresa</option>
              {empresas.map((emp) => (
                <option key={emp.id} value={emp.nombre}>
                  {emp.nombre}
                </option>
              ))}
              <option value="nueva">+ Agregar nueva empresa</option>
            </select>
          </div>

          {/* Formulario Nueva Empresa */}
          {mostrarNuevaEmpresa && (
            <div className="border border-[#92C5C3] bg-[#EEF6F9] rounded-xl p-5 mt-4 space-y-3">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Nueva Empresa
              </h3>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Nombre:
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={nuevaEmpresa.nombre}
                  onChange={handleNuevaEmpresaChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#409EAD] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Dirección:
                </label>
                <input
                  type="text"
                  name="direccion"
                  value={nuevaEmpresa.direccion}
                  onChange={handleNuevaEmpresaChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#409EAD] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Teléfono:
                </label>
                <input
                  type="text"
                  name="telefono"
                  value={nuevaEmpresa.telefono}
                  onChange={handleNuevaEmpresaChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#409EAD] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={nuevaEmpresa.email}
                  onChange={handleNuevaEmpresaChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#409EAD] focus:outline-none"
                />
              </div>
              <button
                onClick={handleGuardarEmpresa}
                className="w-full bg-[#409EAD] hover:bg-[#7ABBC6] text-white font-semibold py-2 rounded-xl shadow-md transition-all duration-200"
              >
                Guardar Empresa
              </button>
            </div>
          )}

          {/* Ubicación */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Ubicación:
            </label>
            <input
              type="text"
              name="ubicacion"
              value={formEmpleo.ubicacion}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#409EAD] focus:outline-none"
            />
          </div>

          {/* Tipo de Contrato */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Tipo de Contrato:
            </label>
            <select
              name="tipoContrato"
              value={formEmpleo.tipoContrato}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#409EAD] focus:outline-none"
            >
              <option value="">Seleccione</option>
              <option value="tiempo_completo">Tiempo Completo</option>
              <option value="medio_tiempo">Medio Tiempo</option>
              <option value="freelance">Freelance</option>
            </select>
          </div>

          {/* Botón Publicar */}
          <div className="pt-4">
            <button
              className="w-full bg-[#409EAD] hover:bg-[#7ABBC6] text-white font-semibold py-3 rounded-xl shadow-md transition-all duration-200"
              type="submit"
            >
              Publicar Aviso
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewJob;
