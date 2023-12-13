import "./ButtonNav.css";

// Importa el hook useNavigate de react-router-dom para la navegación
import { useNavigate } from 'react-router-dom';

/**
 * Componente funcional ButtonNav que representa un botón de navegación en la interfaz.
 * @param {string} props.destination - Ruta a la que se dirigirá al hacer clic en el botón.
 * @param {string} props.name - Texto que se mostrará en el botón.
 */
export const ButtonNav = ({destination, name}) => {
    // Obtiene la función de navegación usando el hook useNavigate
    const navigate = useNavigate();

    // Devuelve el JSX que representa el botón de navegación
    return(
        <div className="buttonNavDesign" onClick={() => navigate(destination)}>
            {name}
        </div>
    );
}
