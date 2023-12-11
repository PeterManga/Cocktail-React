import { useState, useEffect } from 'react'
import { ButtonNav } from "../ButtonNav/ButtonNav"
import { useLocation } from 'react-router-dom'
import "./Header.css"
import { bringDrinksSearch } from '../../services/apiCalls'

export const Header = () => {

    // Instanciamos location que proviene de react-router-dom
    const location = useLocation()

    const [token, setToken] = useState("")
    const [cocktail, setCocktail] = useState([])
    const [criteria, setCriteria] = useState("")

    // useEffect(() => {
    //     bringDrinksSearch(criteria)
    //         .then(
    //             result => {
    //                 console.log(criteria)
    //                 console.log(result.data.drinks)
    //                 setCocktail(result.data.drinks)
    //             }
    //         )
    //         .catch(error => console.log(error))
    // }, [criteria])

    useEffect(() => {
        bringDrinksSearch(criteria)
          .then(result => {
            console.log(criteria);
            console.log(result.drinks);
            setCocktail(result.drinks);
          })
          .catch(error => console.log(error));
      }, [criteria]);
      

    return (
        <div className="headerDesign">
            {(
                <input
                    className='inputDesign'
                    type="text"
                    name="criteria"
                    placeholder="Busca una bebida"
                    onChange={(e) => setCriteria(e.target.value)}
                />
            )}

            <ButtonNav
                destination={"/"}
                name={"Home"}
            />

            <ButtonNav
                destination={"/Cocktails"}
                name={"Cocktails"}
            />

            {token !== "" ? (
                <div className='headerNavDesign'>
                    <ButtonNav
                        destination={"/profile"}
                        name={"Profile"}
                    />
                    <ButtonNav
                        destination={"/profile"}
                        name={"Log out"}
                    />
                </div>
            ) : (
                <div className='headerNavDesign'>
                    <ButtonNav
                        destination={"/register"}
                        name={"Register"}
                    />
                    <ButtonNav
                        destination={"/login"}
                        name={"Login"}
                    />
                </div>
            )}
        </div>
    )
}
