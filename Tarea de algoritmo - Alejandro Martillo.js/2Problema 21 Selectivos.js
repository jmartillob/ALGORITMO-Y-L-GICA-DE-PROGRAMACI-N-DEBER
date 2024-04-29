//21.	Dado un arreglo de 3 elementos indicar cuál de los elementos es el mayor

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: El arreglo de números es [10, 50, 8].
// PROCESO: Inicializa una variable mayor con el primer elemento del arreglo.
//          Compara el segundo elemento con mayor. Si el segundo elemento es mayor que mayor, actualiza mayor.
//          Compara el tercer elemento con mayor. Si el tercer elemento es mayor que mayor, actualiza mayor.
// SALIDA:  El elemento más grande encontrado en el arreglo.

// SEUDOCODIGO //
//arreglo = [elemento1, elemento2, elemento3]
//mayor = arreglo[0]
//si arreglo[1] > mayor entonces
//mayor = arreglo[1]
//si arreglo[2] > mayor entonces
//mayor = arreglo[2]
//mostrar "El elemento más grande es:", mayor

// LENGUAJE JAVASCRIPT //
let arreglo = [10, 50, 8];
let mayor = arreglo[0];
if (arreglo[1] > mayor) {
    mayor = arreglo[1];
}
if (arreglo[2] > mayor) {
    mayor = arreglo[2];
}
console.log("El elemento más grande es:", mayor);