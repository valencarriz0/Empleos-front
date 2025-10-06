import React from "react";
import { Button } from "@headlessui/react";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface JobCardProps {
  title: string;
  company: string;
  tipoContrato: string;
  ubicacion: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  tipoContrato,
  ubicacion,
}) => {
  return (
    <div className="rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition w-full">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <span className="bg-[#f6ebe7] text-[#fd9e88] rounded-full px-3 py-1 text-sm flex items-center gap-1">
          {tipoContrato}
        </span>
      </div>
      <p className="text-sm text-muted-foreground mb-1">{company}</p>
      <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
        <MapPin className="w-4 h-4 text-[#92C5C3]" />
        <span>{ubicacion}</span>
      </div>
      <Link to={`/aviso`}>
        <Button className="mt-3 px-6 py-1 rounded-md text-sm bg-primary text-black border border-[#a6e1df] bg-[#a6e1df] hover:bg-[#83c3c1]">
          Ver detalles
        </Button>
      </Link>
    </div>
  );
};

export default JobCard;
