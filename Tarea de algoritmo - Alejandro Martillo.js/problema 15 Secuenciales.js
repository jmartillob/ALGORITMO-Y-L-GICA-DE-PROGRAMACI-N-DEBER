//15.	Dado un arreglo de 5 elementos, cambiar los valores el primer y último elemento entre sí

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: El arreglo de números es [1, 2, 3, 4, 5].
// PROCESO: Intercambiar los valores del primer y último elemento del arreglo.
// SALIDA:  Mostrar el arreglo antes y después del intercambio de los valores del primer y último elemento.

// SEUDOCODIGO //
//Inicio
//arreglo[0] = 1
//arreglo[1] = 2
//arreglo[2] = 3
//arreglo[3] = 4
//arreglo[4] = 5
//Escribir "Arreglo antes del intercambio:", arreglo
//temp = arreglo[0]
//arreglo[0] = arreglo[Longitud(arreglo) - 1]
//arreglo[Longitud(arreglo) - 1] = temp
//Escribir "Arreglo después del intercambio:", arreglo
//Fin

// LENGUAJE JAVASCRIPT //
let arreglo = [1, 2, 3, 4, 5];
console.log("Arreglo antes del intercambio:", arreglo);
let temp = arreglo[0];
arreglo[0] = arreglo[arreglo.length - 1];
arreglo[arreglo.length - 1] = temp;
console.log("Arreglo después del intercambio:", arreglo);