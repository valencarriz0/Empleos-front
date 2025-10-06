import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BotonVolver = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 mt-2">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-sm px-2 py-1 rounded-md w-auto border-[#F7F7F8] bg-transparent hover:text-black hover:bg-[#e2e2e6]"
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="whitespace-nowrap">Volver</span>
      </button>
    </div>
  );
};

export default BotonVolver;
