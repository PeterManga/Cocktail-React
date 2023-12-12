// Importa useState, useEffect y useNavigate
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import { bringDrinks, bringDrinksSearch } from '../../services/apiCalls';

export const Home = () => {
  const navigate = useNavigate();

  const handleCocktailClick = (idDrink) => {
    navigate(`/cocktails/${idDrink}`);
  };

  const [criteria, setCriteria] = useState("");
  const [cocktail, setCocktail] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    bringDrinksSearch(criteria)
      .then(result => {
        console.log(criteria);
        console.log(result.drinks);
        setCocktail(result.drinks || []); // Si no hay resultados, establece un array vacío
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [criteria]);

  useEffect(() => {
    if (cocktail.length === 0 && !loading) {
      bringDrinks()
        .then(result => {
          console.log(result.data.drinks);
          setCocktail(result.data.drinks);
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [cocktail, loading]);

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
