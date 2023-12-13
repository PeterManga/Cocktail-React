import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import { bringDrinks, bringDrinksSearch } from '../../services/apiCalls';

export const Home = () => {
  // Utilizamos el hook useNavigate para la navegación entre páginas
  const navigate = useNavigate();

  // Función para manejar el clic en un cóctel y redirigir a su página de detalles
  const handleCocktailClick = (idDrink) => {
    navigate(`/cocktails/${idDrink}`);
  };

  // Estados para el criterio de búsqueda, lista de cócteles y estado de carga
  const [criteria, setCriteria] = useState("");
  const [cocktail, setCocktail] = useState([]);
  const [loading, setLoading] = useState(false);

  // Efecto para buscar cócteles basados en el criterio de búsqueda
  useEffect(() => {
    setLoading(true);
    bringDrinksSearch(criteria)
      .then(result => {
        console.log(criteria);
        console.log(result.drinks);
        // Establecer la lista de cócteles o un array vacío si no hay resultados
        setCocktail(result.drinks || []);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [criteria]);

  // Efecto para cargar cócteles si la lista está vacía y no hay carga en curso
  useEffect(() => {
    if (cocktail.length === 0 && !loading) {
      bringDrinks()
        .then(result => {
          console.log(result.data.drinks);
          // Establecer la lista de cócteles
          setCocktail(result.data.drinks);
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [cocktail, loading]);

  return (
    <div className="homeDesign">
      {/* Input para ingresar el criterio de búsqueda */}
      <div className='search'>
        <input
          className='inputDesign'
          type="text"
          name="criteria"
          placeholder="Busca una bebida"
          onChange={(e) => setCriteria(e.target.value)}
        />
      </div>

      {/* Mensaje de carga si está en curso */}
      {loading && <div>Cargando...</div>}

      {/* Mensaje si no hay resultados de búsqueda */}
      {!loading && cocktail.length === 0 && (
        <div>No se encontraron resultados de la búsqueda.</div>
      )}

      {/* Mostrar la lista de cócteles si hay resultados */}
      {!loading && cocktail.length > 0 && (
        <div className='home-cocktails'>
          {cocktail.map(cocktail => (
            <div key={cocktail.idDrink} className='cocktail' onClick={() => handleCocktailClick(cocktail.idDrink)}>
              {/* Mostrar la imagen y el nombre del cóctel */}
              <div className='cocktail-img'><img src={cocktail.strDrinkThumb} alt="" /></div>
              <div className='cocktail-name'><p>{cocktail.strDrink}</p></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
