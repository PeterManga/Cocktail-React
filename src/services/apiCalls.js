
import axios from 'axios'

export const bringDrinks = async () =>{
    return await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s')
}

// Modifica la función bringDrinksSearch para aceptar el parámetro criteria
export const bringDrinksSearch = async (criteria) => {
    try {
      // Concatena el valor de criteria a la URL de la API
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${criteria}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const getDetailsById = async (id) => {
    try {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
     // console.log(response);
      return response.data.drinks; // Corregir aquí, acceder a response.data.drinks
    } catch (error) {
      throw error;
    }
  };

  export const getIngredientsImages = async (ingredient) => {
    try {
      const response = await axios.get(`www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`);
      console.log(response.config.url);
      return response.config.url; 
    } catch (error) {
      throw error;
    }
  };

  export const bringAllCharacters = async () => {

    return await axios.get(`https://rickandmortyapi.com/api/character/?page=8`)
}