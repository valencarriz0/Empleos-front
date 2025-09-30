import React from 'react';
import JobList from '../components/EmpleosList';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Bolsa de Empleos</h1>
      <JobList />
    </div>
  );
};

export default Home;
