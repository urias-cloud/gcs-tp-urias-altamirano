function validarTelefono(tel) {
    return /^[0-9]+$/.test(tel);
}

console.assert(validarTelefono("123456") === true, "Debe aceptar solo numeros");
console.assert(validarTelefono("123abc") === false, "No debe aceptar letras");
console.assert(validarTelefono("") === false, "No debe aceptar vacio");
console.log("Tests de validacion de telefono OK");
