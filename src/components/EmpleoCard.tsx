import React from 'react';
import { Button } from '@headlessui/react'

const JobCard: React.FC = () => {
  // TODO: Tarjeta individual de aviso
  return (
    <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="border rounded-lg p-4 bg-card shadow-sm hover:shadow-md transition">
                  <h3 className="font-semibold text-lg">Título</h3>
                  <p className="text-sm text-muted-foreground">Nombre de la Empresa</p>
                  <Button
                    className="mt-3 inline-flex px-3 py-1 rounded-md text-sm bg-primary text-white hover:bg-primary/90">
                    Ver detalles
                  </Button>
                </div>
            </div>
    </div>
  );
};

export default JobCard;
