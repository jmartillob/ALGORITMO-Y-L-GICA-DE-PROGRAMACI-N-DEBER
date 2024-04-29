//6.	Solicitar al usuario un carácter y mostrar si es una vocal o consonante.


// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: El carácter ingresado por el usuario.
// PROCESO: Se verifica si el carácter ingresado es una vocal (mayúscula o minúscula).
//          Si el carácter es una vocal, se muestra un mensaje indicando que es una vocal.
//          Si el carácter no es una vocal, se muestra un mensaje indicando que es una consonante.
// SALIDA:  Mostrar un mensaje indicando si el carácter ingresado por el usuario es una vocal o una consonante.

// SEUDOCODIGO //
//INICIO
//Escribir "Ingrese un carácter:"
//Leer caracter
//SI caracter es igual a 'a' o caracter es igual a 'e' o caracter es igual a 'i' o caracter es igual a 'o' o caracter es igual a 'u' o caracter es igual a 'A' o caracter es igual a 'E' o caracter es igual a 'I' o caracter es igual a 'O' o caracter es igual a 'U' ENTONCES
//Escribir "El carácter ingresado es una vocal."
//SINO
//Escribir "El carácter ingresado es una consonante."
//FIN SI
//FIN

// LENGUAJE JAVASCRIPT //
let caracter = prompt("Ingrese un carácter:");
if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u'|| caracter === 'A' || caracter === 'E' || caracter === 'I' || caracter === 'O' || caracter === 'U') {
    console.log("El carácter ingresado es una vocal.");
} else {
    console.log("El carácter ingresado es una consonante.");
}