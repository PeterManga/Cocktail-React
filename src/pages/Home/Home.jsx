import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import { bringDrinks, bringDrinksSearch } from '../../services/apiCalls';

export const Home = () => {
  const navigate = useNavigate();
  const [criteria, setCriteria] = useState("");
  const [cocktail, setCocktail] = useState([]);
  const [loading, setLoading] = useState(false);

  // Utilizamos useCallback para memoizar la función y evitar recreaciones innecesarias
  const delayedSearch = useCallback(
    // La función interna es la que se ejecutará después de cierto tiempo (en este caso, 500 ms)
    debounce(async (searchCriteria) => {
      try {
        setLoading(true);
        const result = await bringDrinksSearch(searchCriteria);
        // Establecer la lista de cócteles o un array vacío si no hay resultados
        setCocktail(result.drinks || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }, 500),
    [] // La dependencia está vacía porque no queremos que se vuelva a crear la función en cada renderización
  );

  useEffect(() => {
    // Llamamos a la función de búsqueda con el criterio actual después de que este no cambie durante 500 ms
    delayedSearch(criteria);
  }, [criteria, delayedSearch]);

  useEffect(() => {
    // Si la lista está vacía y no hay carga en curso, traemos todos los cócteles
    if (cocktail.length === 0 && !loading) {
      bringDrinks()
        .then(result => {
          // Establecer la lista de cócteles
          setCocktail(result.data.drinks);
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [cocktail, loading]);

  const handleCocktailClick = (idDrink) => {
    navigate(`/cocktails/${idDrink}`);
  };

  return (
    <div className="homeDesign">
      <div className='search'>
        <input
          className='inputDesign'
          type="text"
          name="criteria"
          placeholder="Busca una bebida"
          onChange={(e) => setCriteria(e.target.value)}
        />
      </div>

      {loading && <div>Cargando...</div>}

      {!loading && cocktail.length === 0 && (
        <div>No se encontraron resultados de la búsqueda.</div>
      )}

      {!loading && cocktail.length > 0 && (
        <div className='home-cocktails'>
          {cocktail.map(cocktail => (
            <div key={cocktail.idDrink} className='cocktail' onClick={() => handleCocktailClick(cocktail.idDrink)}>
              <div className='cocktail-img'><img src={cocktail.strDrinkThumb} alt="" /></div>
              <div className='cocktail-name'><p>{cocktail.strDrink}</p></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Función de debounce
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
