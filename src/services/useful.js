/**
 * Valida el valor proporcionado según el tipo especificado.
 * @param {string} type - Tipo de validación a realizar.
 * @param {string} value - Valor a validar.
 * @returns {string} Mensaje de error o cadena vacía si la validación es exitosa.
 */
export const validate = (type, value) => {
    switch (type) {
        case 'email':
        case 'e-mail':
        case 'correo':
        case 'correo electronico':
        case 'mail':
        case 'imail':
        case 'imeil':
        case 'email2':
            if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)) {
                return "Formato de correo electrónico inválido";
            } else {
                return "";
            }

        case 'password':
        case 'password2':
        case 'contraseña':
        case 'secreto':
        case 'contrasenya':
        case 'secret':
            if (value.length < 8) {
                return "Mínimo 8 caracteres";
            } else {
                return "";
            }

        default:
            return "";
    }
};
