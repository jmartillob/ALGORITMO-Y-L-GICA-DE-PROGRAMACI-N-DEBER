//4.	Solicitar al usuario un número y mostrar si es positivo o negativo.

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: Pedir un número al usuario
// PROCESO: Verificar si el número ingresado es positivo, negativo o neutro
// SALIDA:  Indica si el número ingresado es positivo, negativo o neutro.

// SEUDOCODIGO //
//Escribir "Por favor, ingresa un número: "
//Leer numero
//Si numero es mayor que 0 entonces
//Escribir "El número ingresado es positivo."
//Sino si numero es igual a 0 entonces
//Escribir "El número ingresado es neutro (cero)."
//Sino
//Escribir "El número ingresado es negativo."
//Fin Si

// LENGUAJE JAVASCRIPT //
let numero = prompt("Por favor, ingresa un número:");
numero = parseFloat(numero);
if (numero > 0) {
    console.log("El número ingresado es positivo.");
} else if (numero === 0) {
    console.log("El número ingresado es neutro (cero).");
} else {
    console.log("El número ingresado es negativo.");
}