//20.	Dado un arreglo de 5 elementos indicar si el primero elemento es par y el último elemento es impar.

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: El arreglo de números es [5, 10, 15, 20, 25].
// PROCESO: Verificar si el primer elemento del arreglo es par y si el último elemento del arreglo es impar.
//          Determinar si el primer elemento del arreglo es impar y si el último elemento del arreglo es par.
//          Comprobar si tanto el primer elemento como el último elemento del arreglo son pares.
//          Analizar si tanto el primer elemento como el último elemento del arreglo son impares.
// SALIDA:  Mostrar un mensaje indicando el arreglo entre el primer y el último elemento del arreglo.

// SEUDOCODIGO //
//INICIO
//arreglo = [5, 10, 15, 20, 25];
//SI arreglo[0] MOD 2 == 0 Y arreglo[4] MOD 2 != 0 ENTONCES
//Escribir "El primer elemento es par y el último elemento es impar."
//SINO SI arreglo[0] MOD 2 != 0 Y arreglo[4] MOD 2 == 0 ENTONCES
//Escribir "El primer elemento es impar y el último elemento es par."
//SINO SI arreglo[0] MOD 2 == 0 Y arreglo[4] MOD 2 == 0 ENTONCES
//Escribir "Tanto el primer elemento como el último elemento son pares."
//SINO
//Escribir "Tanto el primer elemento como el último elemento son impares."
//FIN SI
//FIN

// LENGUAJE JAVASCRIPT //
let arreglo = [5, 10, 15, 20, 25];
if (arreglo[0] % 2 === 0 && arreglo[4] % 2 !== 0) {
    console.log("El primer elemento es par y el último elemento es impar.");
} else if (arreglo[0] % 2 !== 0 && arreglo[4] % 2 === 0) {
    console.log("El primer elemento es impar y el último elemento es par.");
} else if (arreglo[0] % 2 === 0 && arreglo[4] % 2 === 0) {
    console.log("Tanto el primer elemento como el último elemento son pares.");
} else {
    console.log("Tanto el primer elemento como el último elemento son impares.");
}