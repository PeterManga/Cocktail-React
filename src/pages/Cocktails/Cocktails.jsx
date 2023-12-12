// Cocktails.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetailsById } from '../../services/apiCalls'; // Necesitarás implementar esta función

export const Cocktails = () => {
  const { id } = useParams();
  const [cocktailDetails, setCocktailDetails] = useState(null);

  useEffect(() => {
    // Llama a la función para obtener los detalles del cóctel por ID
    getDetailsById(id)
      .then((result) => {
        console.log(result); // Ajusta según la estructura de los detalles del cóctel
        setCocktailDetails(result);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!cocktailDetails) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="CocktailDesign">
      <div>
        <img src={cocktailDetails.strDrinkThumb} alt="" />
        <p>{cocktailDetails.strDrink}</p>
        {/* Agrega otros detalles del cóctel según sea necesario */}
      </div>
    </div>
  );
};

// export default Cocktails;
