import React, { useState } from 'react';

const NuevaEmpresa: React.FC = () => {
  // TODO: Selector o ingreso de nueva empresa
  const [empresa, setEmpresa] = useState({nombre: '', direccion: '', telefono: '', email: ''});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmpresa({ ...empresa, [name]: value });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cargar Nueva Empresa</h2>
      <div>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={empresa.nombre} onChange={handleChange} required />
      </div>
      <div>
        <label>Dirección:</label>
        <input type="text" name="direccion" value={empresa.direccion} onChange={handleChange} required />
      </div>
      <div>
        <label>Teléfono:</label>
        <input type="text" name="telefono" value={empresa.telefono} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={empresa.email} onChange={handleChange} required />
      </div>
      <button type="submit">Guardar Empresa</button>
    </form>
  );
};

export default NuevaEmpresa;
