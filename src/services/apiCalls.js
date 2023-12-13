import axios from 'axios';

/**
 * Realiza una solicitud para obtener la lista de bebidas.
 * @returns {Promise} Promise que se resuelve con los datos de la respuesta.
 */
export const bringDrinks = async () => {
    try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s');
        return response.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Realiza una solicitud de búsqueda de bebidas según el criterio proporcionado.
 * @param {string} criteria - Criterio de búsqueda para filtrar las bebidas.
 * @returns {Promise} Promise que se resuelve con los datos de la respuesta.
 */
export const bringDrinksSearch = async (criteria) => {
    try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${criteria}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Realiza una solicitud para obtener los detalles de una bebida por su ID.
 * @param {string} id - ID de la bebida para la cual se solicitan los detalles.
 * @returns {Promise} Promise que se resuelve con los datos de la respuesta.
 */
export const getDetailsById = async (id) => {
    try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        return response.data.drinks;
    } catch (error) {
        throw error;
    }
};

/**
 * Obtiene la URL de la imagen del ingrediente proporcionado.
 * @param {string} ingredient - Nombre del ingrediente para el cual se solicita la imagen.
 * @returns {Promise} Promise que se resuelve con la URL de la imagen.
 */
export const getIngredientsImages = async (ingredient) => {
    try {
        const response = await axios.get(`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`);
        return response.config.url;
    } catch (error) {
        throw error;
    }
};
