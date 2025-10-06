import React from "react";
import JobCard from "./EmpleoCard";

interface Job {
  id: number;
  title: string;
  company: string;
  tipoContrato?: string;
  ubicacion?: string;
}

interface JobsListProps {
  jobs: Job[];
}

const JobList: React.FC<JobsListProps> = ({ jobs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <JobCard key={job.id} title={job.title} company={job.company} tipoContrato={job.tipoContrato} ubicacion={job.ubicacion} />
        ))
      ) : (
        <p className="col-span-full text-center text-muted-foreground">
          No hay empleos disponibles.
        </p>
      )}
    </div>
  );
};

export default JobList;
