import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const Header = () => {
  return (
    <header className="z-50 w-full fixed top-0 left-0 bg-white/70 backdrop-blur-md px-6 h-20 flex items-center justify-between border-b border-[#92C5C3] shadow-sm transition-all duration-300">
      <h1 className="text-black font-bold text-lg">Portal de Empleos</h1>

      <div className="flex gap-6">
        <Link
          to="/nuevo-aviso"
          className="rounded-md text-black transition border border-[#F7F7F8] bg-[#F7F7F8] px-3 py-1 inline-flex items-center hover:bg-[#E3E3E3]"
        >
          <Plus className="w-4 h-4 mr-2" />
          Publicar Aviso
        </Link>
      </div>
    </header>
  );
};

export default Header;
