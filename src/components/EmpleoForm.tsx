import React from 'react';

const JobForm: React.FC = () => {

  const [formEmpleo, setFormEmpleo] = React.useState({
    titulo: '',
    descripcion: '',
    empresa: '',
    ubicacion: '',
    tipoContrato: ''
  });
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormEmpleo({ ...formEmpleo, [name]: value });
  }

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
  };

  return (
    <div>
      <h2>Publicar Aviso de Empleo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            name="titulo"
            value={formEmpleo.titulo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="descripcion"
            value={formEmpleo.descripcion}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Empresa:</label>
          <input
            type="text"
            name="empresa"
            value={formEmpleo.empresa}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Ubicación:</label>
          <input
            type="text"
            name="ubicacion"
            value={formEmpleo.ubicacion}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Tipo de Contrato:</label>
          <select
            name="tipoContrato"
            value={formEmpleo.tipoContrato}
            onChange={handleChange}
          >
            <option value="">Seleccione</option>
            <option value="tiempo_completo">Tiempo Completo</option>
            <option value="medio_tiempo">Medio Tiempo</option>
            <option value="freelance">Freelance</option>
          </select>
        </div>
        <button type="submit">Publicar</button>
      </form>
    </div>
  );
};

export default JobForm;
