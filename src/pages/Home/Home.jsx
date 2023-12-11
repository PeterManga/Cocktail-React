import { useState, useEffect } from 'react';
import "./Home.css"
import { bringDrinks } from '../../services/apiCalls';



export const Home = () => {


    //1 - Primero se observa el valor de los hooks
    const [cocktail, setCocktail] = useState([])

    //3 - Después de la zona de renderizado se ejecutan los hooks useEffect y funciones

    // useEffect(()=>{
    //     //Este useEffect siempre se ejecutará nada más se monte el componente por primera vez


    // },[])

    // useEffect(()=>{
    //     //Este useEffect se ejecutará SIEMPRE que haya una actualización en el componente

    // })

    // useEffect(()=>{
    //         //Este useEffect se ejecutará cuando se desmonte el componente
    //     return () => {
    //         console.log("byee byeeee")
    //     }
    // })

    useEffect(() => {
        //Este useEffect se ejecutará SIEMPRE que se actualize el hook de estado "characters"

        if (cocktail.length === 0) {
            //Como al cargarse el componente la longitud de characters es 0... ejecuto la función que los traerá
            bringDrinks()
                .then(
                    result => {
                        console.log(result.data.drinks)
                        setCocktail(result.data.drinks)
                    }
                )
                .catch(error => console.log(error))
        }
        //Al tener una longitud superior a 0, no entraríamos en el condicional, por lo tanto no llamamos de nuevo a la API
    }, [cocktail])

    // const handleSearch = (searchResults) => {
    //     setCocktail(searchResults);
    // };

    return (
        <div className="homeDesign">
            {/* <SearchBar onSearch={handleSearch} /> */}

            {

                cocktail.length > 0
                                    
                    ? (<div>
                        {
                            cocktail.map(
                                cocktail => {
                                    return (
                                        <div key={cocktail.idDrink} className='cocktail'>
                                            <h1>{cocktail.strDrink}</h1>

                                            <img src={cocktail.strDrinkThumb} alt="" />
                                        </div>
                                    )
                                }
                            )
                        }

                    </div>)

                    : (<div>Los datos estan viniendo de la API</div>)
            }
        </div>
    )




}