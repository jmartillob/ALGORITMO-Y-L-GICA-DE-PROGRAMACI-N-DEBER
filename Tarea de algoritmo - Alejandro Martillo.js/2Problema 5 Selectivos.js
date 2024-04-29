//5.	Pedir al usuario dos números y mostrar si son iguales o diferentes.

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: Pedir al usuario dos.
// PROCESO: Verificar si los dos números son iguales o diferentes.
// SALIDA:  Indica si los dos números ingresados son iguales o diferentes.

// SEUDOCODIGO //
//Inicio
//Escribir "Por favor, ingresa el primer número: "
//Leer primer_numero
//Escribir "Ahora ingresa el segundo número: "
//Leer segundo_numero
//Si primer_numero es igual a segundo_numero entonces
//Escribir "Los números ingresados son iguales."
//Sino
//Escribir "Los números ingresados son diferentes."
//Fin Si
//Fin

// LENGUAJE JAVASCRIPT //
let primerNumero = prompt("Por favor, ingresa el primer número:");
primerNumero = parseFloat(primerNumero);
let segundoNumero = prompt("Ahora ingresa el segundo número:");
segundoNumero = parseFloat(segundoNumero);
if (primerNumero === segundoNumero) {
    console.log("Los números ingresados son iguales.");
} else {
    console.log("Los números ingresados son diferentes.");
}