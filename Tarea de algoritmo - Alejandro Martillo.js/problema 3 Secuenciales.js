//3.	Solicitar al usuario dos números y mostrar su suma.

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: Dos números ingresados por el usuario: "primer_numero" y "segundo_numero.""
// PROCESO: Pedir al usuario que ingrese dos números.
//          Calcula la suma de los dos números ingresados.
// SALIDA:  Se muestra al usuario el resultado de la suma de los dos números ingresados.

// SEUDOCODIGO //
//Inicio
//Escribir "Ingrese el primer número:"
//Leer primer_numero
//Escribir "Ingrese el segundo número:"
//Leer segundo_numero
//suma = primer_numero + segundo_numero
//Escribir "La suma de", primer_numero, "y", segundo_numero, "es igual a", suma
//Fin

// LENGUAJE JAVASCRIPT //
let primer_numero = parseFloat(prompt("Ingrese el primer número:"));
let segundo_numero = parseFloat(prompt("Ingrese el segundo número:"));
let suma = primer_numero + segundo_numero;
console.log("La suma de " + primer_numero + " y " + segundo_numero + " es igual a " + suma);