import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetailsById, getIngredientsImages } from '../../services/apiCalls';
import "./Cocktails.css"

// Función para obtener la URL de la imagen del ingrediente
const getIngredientImageUrl = async (ingredient) => {
  try {
    // Llamada a la API para obtener la imagen del ingrediente
    const response = await getIngredientsImages(ingredient);
    console.log(response)
    return response;
  } catch (error) {
    // Manejo de errores al obtener la imagen del ingrediente
    console.error("Error obteniendo la imagen del ingrediente:", error);
    return null;
  }
};

export const Cocktails = () => {
  // Obtener el parámetro 'id' de los parámetros de la URL usando useParams
  const { id } = useParams();

  // Estado para almacenar los detalles del cóctel seleccionado
  const [cocktailDetails, setCocktailDetails] = useState(null);

  // Efecto para obtener los detalles del cóctel cuando el componente se monta o 'id' cambia
  useEffect(() => {
    getDetailsById(id)
      .then((result) => {
        console.log(result[0]);
        setCocktailDetails(result[0]);
      })
      .catch((error) => console.log(error));
  }, [id]);

  // Si los detalles aún no están disponibles, muestra un mensaje de carga
  if (!cocktailDetails) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="CocktailDesign">
      <div>
        <div className='Cocktail-Name'>
          {/* Mostrar el nombre del cóctel */}
          <p>{cocktailDetails.strDrink}</p>
        </div>
        {/* Mostrar la imagen del cóctel */}
        <img src={cocktailDetails.strDrinkThumb} alt="cocktail" />
        <div className='Cocktail-Table'>
          <div className='Cocktail-Recipe'>
            <div className='Cocktail-ingredients'>
              <h3>Ingredients:</h3>
              <ul>
                {/* Mapear sobre una gama de índices para mostrar ingredientes y medidas */}
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
              {/* Mostrar las instrucciones del cóctel */}
              <p>{cocktailDetails.strInstructions}</p>
            </div>
          </div>
        </div>
        {/* Mostrar el tipo de vaso */}
        <p>Tipo de vaso: {cocktailDetails.strGlass}</p>

        {/* Mostrar anotaciones si están disponibles */}
        {cocktailDetails.strTags && <p>Anotaciones: {cocktailDetails.strTags}</p>}

        {/* Mostrar la categoría del cóctel */}
        <p>Categoría: {cocktailDetails.strCategory}</p>
      </div>
    </div>
  );
};
