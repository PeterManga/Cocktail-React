/*
 * Componente funcional SearchBar que representa una barra de búsqueda para bebidas.
 * @param {Function} props.onSearch - Función de retorno de llamada para manejar los resultados de búsqueda.
 */
import React, { useState } from 'react';
import { bringDrinksSearch } from '../../services/apiCalls';

const SearchBar = ({ onSearch }) => {
  // Estado local para almacenar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  /**
   * Maneja la búsqueda de bebidas según el término de búsqueda ingresado.
   * Realiza una llamada a la API y llama a la función de retorno de llamada onSearch con los resultados.
   */
  const handleSearch = async () => {
    try {
      // Realiza una llamada a la función bringDrinksSearch con el término de búsqueda actual
      const response = await bringDrinksSearch(searchTerm);
      // Llama a la función de retorno de llamada onSearch con los datos de bebidas obtenidos
      onSearch(response.data.drinks);
    } catch (error) {
      // Maneja los errores mostrando un mensaje en la consola
      console.error('Error fetching data:', error);
    }
  };

  // Devuelve el JSX que representa la barra de búsqueda
  return (
    <div className="searchBar">
      {/* Campo de entrada de texto para ingresar el término de búsqueda */}
      <input
        type="text"
        value={searchTerm}
        // Maneja el cambio en el campo de entrada actualizando el estado local searchTerm
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a drink..."
      />
      {/* Botón para iniciar la búsqueda, al hacer clic llama a la función handleSearch */}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

// Exporta el componente SearchBar como componente predeterminado
export default SearchBar;
