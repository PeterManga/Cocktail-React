// Cocktails.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetailsById, getIngredientsImages } from '../../services/apiCalls';
import "./Cocktails.css"
export const Cocktails = () => {
  const { id } = useParams();

  const [cocktailDetails, setCocktailDetails] = useState(null);

  useEffect(() => {
    getDetailsById(id)
      .then((result) => {
        console.log(result[0]);
        setCocktailDetails(result[0]);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!cocktailDetails) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="CocktailDesign">
      <div>
        <div className='Cocktail-Name'>
          <p>{cocktailDetails.strDrink}</p>
        </div>
        <img src={cocktailDetails.strDrinkThumb} alt="" />
        <div className='Cocktail-Table'>
          <div className='Cocktail-Recipe'>
            <div className='Cocktail-ingredients'>
              <h3>Ingredients:</h3>
              <ul>
                
                {Array.from({ length: 15 }, (_, i) => i + 1)
                  .filter((index) => cocktailDetails[`strIngredient${index}`])
                  .map((index) => (
                    <li key={index}>
                      {cocktailDetails[`strMeasure${index}`]}{' '}
                      {cocktailDetails[`strIngredient${index}`]}
                    </li>
                  ))}
              </ul>
            </div>
            <div className='Cocktail-Instructions'>
              <h3>Instructions:</h3>
              <p>{cocktailDetails.strInstructions}</p>
            </div>
          </div>
        </div>
        <p>Tipo de vaso: {cocktailDetails.strGlass}</p>

        {/* Renderiza ingredientes */}


        {/* Renderiza anotaciones */}
        {cocktailDetails.strTags && <p>Anotaciones: {cocktailDetails.strTags}</p>}

        <p>Categoría: {cocktailDetails.strCategory}</p>
      </div>
    </div>
  );
};
