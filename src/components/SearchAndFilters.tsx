import { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronDown, Search, MapPin } from "lucide-react";

const ubicaciones = [
  { id: 1, nombre: "Buenos Aires" },
  { id: 2, nombre: "Córdoba" },
  { id: 3, nombre: "Rosario" },
];

const contratos = [
  { id: 1, nombre: "Tiempo completo" },
  { id: 2, nombre: "Medio tiempo" },
  { id: 3, nombre: "Freelance" },
];

type Opcion = { id: number; nombre: string };

export default function BarraBusqueda() {
  const [ubicacionInput, setUbicacionInput] = useState("");
  const [ubicacionSeleccionada, setUbicacionSeleccionada] =
    useState<Opcion | null>(null);
  const [contrato, setContrato] = useState<Opcion | null>(null);

  return (
    <div className="max-w-6xl mx-auto mb-12 p-6 rounded-lg shadow-lg bg-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Puesto, empresa o palabra clave"
            className="w-full rounded-lg border border-gray-300 h-10 pl-10 pr-3"
          />
        </div>

        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Ubicación"
            className="w-full rounded-lg border border-gray-300 h-10 pl-10 pr-3"
            value={ubicacionInput}
            onChange={(e) => setUbicacionInput(e.target.value)}
            autoComplete="off"
          />
          {ubicacionInput.length > 0 && (
            <div className="absolute left-0 z-10 mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-200 max-h-40 overflow-auto">
              {ubicaciones
                .filter((u) =>
                  u.nombre.toLowerCase().includes(ubicacionInput.toLowerCase())
                )
                .map((u) => (
                  <div
                    key={u.id}
                    className="cursor-pointer px-4 py-2 hover:bg-sky-100"
                    onClick={() => {
                      setUbicacionSeleccionada(u);
                      setUbicacionInput(u.nombre);
                    }}
                  >
                    {u.nombre}
                  </div>
                ))}
            </div>
          )}
        </div>

        <div className="relative">
          <Listbox value={contrato} onChange={setContrato}>
            <ListboxButton className="w-full flex items-center justify-between text-left rounded-lg border border-gray-300 py-2 px-3 shadow-sm focus:ring-2 focus:ring-sky-500 h-10">
              <span>{contrato ? contrato.nombre : "Tipo de contrato"}</span>
              <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
            </ListboxButton>
            <ListboxOptions className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-200">
              {contratos.map((c) => (
                <ListboxOption
                  key={c.id}
                  value={c}
                  className="cursor-pointer px-4 py-2 hover:bg-sky-100"
                >
                  {c.nombre}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Listbox>
        </div>

        <div className="flex justify-center">
          <button className="px-6 bg-[#409EAD] hover:bg-[#7ABBC6] text-white rounded-lg h-10 font-medium w-full">
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}
