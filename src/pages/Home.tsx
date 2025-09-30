import React from 'react';
import JobList from '../components/EmpleosList';
import { Link } from 'react-router-dom';
import JobCard from '../components/EmpleoCard';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Bolsa de Empleos</h1>
      <Link to="/nuevo-aviso" className="btn btn-primary">
        <button>Publicar Aviso</button>
      </Link>
      <JobCard />
    </div>
  );
};

export default Home;
