
import "./CustomInput.css"
// Importa el archivo CSS que contiene estilos para CustomInput

/**
 * Componente funcional CustomInput que representa un campo de entrada personalizado.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.type - Tipo de entrada (e.g., 'text', 'password').
 * @param {string} props.name - Nombre del campo de entrada.
 * @param {string} props.placeholder - Texto de marcador de posición para el campo de entrada.
 * @param {string} props.design - Clases de estilo aplicadas al campo de entrada.
 * @param {Function} props.functionChange - Función llamada al cambiar el valor del campo de entrada.
 * @param {Function} props.functionCheck - Función llamada al perder el foco del campo de entrada (blur).
 * @returns {JSX.Element} - Elemento JSX que representa un campo de entrada personalizado.
 */

export const CustomInput = ({type, name, placeholder, design, functionChange, functionCheck}) => {
    // Devuelve el JSX que representa un campo de entrada personalizado
    return (
        <input 
            className={design}
            type={type}
            name={name}
            placeholder={placeholder}
            //Peticion de disparo de la funcion aqui en el hijo
            onChange={(e)=>functionChange(e)}
            //Peticion de disparo para la funcion que comprobará si tenemos errores...al hacer click fuera
            onBlur={(e)=>functionCheck(e)}
        />

    )
}