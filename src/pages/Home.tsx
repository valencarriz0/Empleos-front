import React from 'react';
import JobList from '../components/EmpleosList';
import { Link } from 'react-router-dom';
import { Button } from '@headlessui/react';

const jobsData = [
  { id: 1, title: "Desarrollador Frontend", company: "Tech Solutions" },
  { id: 2, title: "Analista de Datos", company: "Agro SA" },
  { id: 3, title: "Soporte Técnico", company: "Hospital Central" },
];

const Home: React.FC = () => {
  return (
    <div>
      <header className=' absolute flex top-0 w-full border-b backdrop-blur bg-white px-4 h-16 items-center justify-between'>
        <h1 className='text-black container flex h-16 items-center'>Bolsa de Empleos</h1>
        <Link to="/nuevo-aviso" className="btn btn-primary">
          <Button>Publicar Aviso</Button>
        </Link>
        <Link  to= "/nueva-empresa" className="btn btn-primary">
          <Button>Nueva Empresa</Button>
        </Link>
      </header>
      <h2 className="text-2xl font-bold mb-4">Ofertas de Empleo</h2>
        <JobList jobs={jobsData} />
    </div>
  );
};

export default Home;
