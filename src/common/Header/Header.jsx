import { useState, useEffect } from 'react'
import { ButtonNav } from "../ButtonNav/ButtonNav"
import { useLocation } from 'react-router-dom'
import "./Header.css"

export const Header = () => {

    // Instanciamos location que proviene de react-router-dom
    const location = useLocation()

    const [token, setToken] = useState("")


    
      

    return (
        <div className="headerDesign">
            

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
