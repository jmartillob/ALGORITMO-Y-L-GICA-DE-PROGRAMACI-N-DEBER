//6.	Pedir al usuario dos números y mostrar el resultado de multiplicarlos.

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: Dos números ingresados por el usuario.
// PROCESO: Multiplicar los dos números.
// SALIDA:  El resultado de la multiplicación.

// SEUDOCODIGO //
//Inicio
//Escribir "Por favor, ingresa el primer número:"
//Leer primerNumero
//Escribir "Ahora, ingresa el segundo número:"
//Leer segundoNumero
//resultadoMultiplicacion = primerNumero * segundoNumero
//Escribir "El resultado de multiplicar " + primerNumero + " por " + segundoNumero + " es " + resultadoMultiplicacion
//Fin

// LENGUAJE JAVASCRIPT //
let primerNumero = prompt("Por favor, ingresa el primer número:");
let segundoNumero = prompt("Ahora, ingresa el segundo número:");
primerNumero = parseFloat(primerNumero);
segundoNumero = parseFloat(segundoNumero);
let resultadoMultiplicacion = primerNumero * segundoNumero;
console.log("El resultado de multiplicar " + primerNumero + " por " + segundoNumero + " es " + resultadoMultiplicacion);