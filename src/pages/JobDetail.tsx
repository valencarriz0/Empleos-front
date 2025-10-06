import React from "react";
import {
  MapPin,
  Clock,
  DollarSign,
  Building2,
  Mail,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import ButtonBack from "../components/ButtonBack";

// --blue-munsell: #068093;
// --moonstone: #409ead;
// --sky-blue: #7abbc6;
// --alice-blue: #eef6f9;
// --misty-rose: #fbdfd9;
// --tiffany-blue: #92c5c3;

//Tipos de datos
interface Company {
  id: number;
  name: string;
  email: string;
  description: string;
}

interface Job {
  id: number;
  title: string;
  company: Company;
  tipoContrato: string;
  ubicacion: string;
  fechaPublicacion: string;
  salario: string;
  descripcion: string;
  requisitos: string[];
  beneficios: string[];
}

// Datos Mock
const mockJobDetail: Job = {
  id: 1,
  title: "Desarrollador Frontend Senior (React/Next.js)",
  company: {
    id: 101,
    name: "Tech Solutions Inc.",
    email: "rrhh@techsolutions.com",
    description: "Líder mundial en soluciones de software a medida.",
  },
  tipoContrato: "Full-time",
  ubicacion: "Remoto (con posibilidad de viajes)",
  fechaPublicacion: "2024-10-01",
  salario: "$80.000 - $120.000 USD anuales",
  descripcion:
    "Buscamos un Desarrollador Frontend Senior apasionado por crear interfaces de usuario robustas y escalables. Serás responsable de liderar el desarrollo de nuevos módulos y optimizar la experiencia de usuario de nuestros productos principales. Experiencia mínima de 5 años con React y 2 años con Next.js es obligatoria. Se valorará conocimiento en testing (Jest, Testing Library) y CI/CD. ¡Únete a un equipo innovador!",
  requisitos: [
    "5+ años de experiencia con React/TypeScript.",
    "Experiencia con Next.js o Gatsby.",
    "Dominio de HTML5, CSS3 y preprocesadores (Sass/Less).",
    "Conocimiento de metodologías ágiles (Scrum/Kanban).",
  ],
  beneficios: [
    "Trabajo 100% remoto y flexible.",
    "Vacaciones ilimitadas.",
    "Presupuesto anual para formación y conferencias.",
    "Seguro médico privado completo.",
  ],
};

//Componente principal
const JobDetails: React.FC = () => {
  const job = mockJobDetail;

  if (!job) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600">
        <p className="text-xl font-semibold">Aviso de empleo no encontrado.</p>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-alice-blue min-h-screen">
      <Header />
      <ButtonBack />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Columna Izquierda */}
        <div className="lg:col-span-2 space-y-8">
          <div className="pb-1">
            <span className=" text-black text-s">
              Publicado: {job.fechaPublicacion}
            </span>
          </div>
          {/* Título y metadatos */}
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
              {job.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#FBDFD9] text-[#935c50] rounded-full px-3 py-1 text-sm flex items-center gap-1">
                <Clock size={16} /> {job.tipoContrato}
              </span>
              <span className="bg-[#a0dae4] text-[#28646d] rounded-full px-3 py-1 text-sm flex items-center gap-1">
                <MapPin size={16} /> {job.ubicacion}
              </span>
              <span className="bg-sky-100 text-sky-800 rounded-full px-3 py-1 text-sm flex items-center gap-1">
                <DollarSign size={16} /> {job.salario}
              </span>
            </div>
          </div>

          {/* Descripción */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Descripción del puesto
            </h3>
            <p className="text-gray-700 leading-relaxed">{job.descripcion}</p>
          </section>

          {/* Requisitos */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Requisitos
            </h3>
            <ul className="space-y-2">
              {job.requisitos.map((req, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-700"
                >
                  <CheckCircle size={18} className="text-[#409EAD] mt-0.5" />
                  {req}
                </li>
              ))}
            </ul>
          </section>

          {/* Beneficios */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Beneficios
            </h3>
            <ul className="space-y-2">
              {job.beneficios.map((beneficio, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-700"
                >
                  <CheckCircle size={18} className="text-[#068093] mt-0.5" />
                  {beneficio}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Columna Derecha (Sidebar) */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24 space-y-6">
            {/* Empresa */}
            <div className="border-b pb-4">
              <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-2">
                <Building2 className="text-[#068093]" /> {job.company.name}
              </h4>
              <p className="text-gray-600 text-sm mb-2">
                {job.company.description}
              </p>
              <a
                href={`mailto:${job.company.email}`}
                className="flex items-center text-[#409EAD] hover:text-[#7ABBC6] text-sm font-medium"
              >
                <Mail size={16} className="mr-1" /> {job.company.email}
              </a>
            </div>

            {/* Botón de postulación */}
            <div className="text-center">
              <Link
                to={`/postular/${job.id}`}
                className="w-full inline-block bg-[#409EAD] hover:bg-[#7ABBC6] text-white font-semibold py-3 rounded-xl shadow-md transition-all duration-200"
              >
                Postularme
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default JobDetails;
