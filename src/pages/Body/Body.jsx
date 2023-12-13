/**
 * Componente Body que representa el cuerpo principal de la aplicación.
 * Utiliza el componente AppRoutes para renderizar las rutas y las páginas correspondientes.
 */

import React from 'react';
import { AppRoutes } from '../Routes/Routes';

/** Componente funcional Body que devuelve el contenido principal de la aplicación. */
export const Body = () => {
  return (
    <>
      {/* Renderiza las rutas y páginas definidas en el componente AppRoutes */}
      <AppRoutes />
    </>
  );
};
