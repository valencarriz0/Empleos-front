import React from "react";
import JobList from "../components/EmpleosList";
import SearchAndFilters from "../components/SearchAndFilters";
import Header from "../components/Header";

const jobsData = [
  {
    id: 1,
    title: "Desarrollador Frontend",
    company: "Tech Solutions",
    tipoContrato: "Full-time",
    ubicacion: "Remoto",
  },
  {
    id: 2,
    title: "Analista de Datos",
    company: "Agro SA",
    tipoContrato: "Part-time",
    ubicacion: "Córdoba",
  },
  {
    id: 3,
    title: "Soporte Técnico",
    company: "Hospital Central",
    tipoContrato: "Freelance",
    ubicacion: "Buenos Aires",
  },
];

const Home: React.FC = () => {
  return (
    <div className="">
      <Header />

      <main className="container mx-auto px-4 pt-24">
        <SearchAndFilters />
        <h2 className="text-2xl font-bold mb-4 text-primary">
          Ofertas de Empleo
        </h2>
        <JobList jobs={jobsData} />
      </main>
    </div>
  );
};

export default Home;
