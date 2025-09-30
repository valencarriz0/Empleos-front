import React from "react";
import { Button } from "@headlessui/react";

interface JobCardProps {
  title: string;
  company: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, company }) => {
  return (
    <div className="border rounded-lg p-4 bg-card shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-muted-foreground">{company}</p>
      <Button className="mt-3 inline-flex px-3 py-1 rounded-md text-sm bg-primary text-white hover:bg-primary/90">
        Ver detalles
      </Button>
    </div>
  );
};

export default JobCard;
