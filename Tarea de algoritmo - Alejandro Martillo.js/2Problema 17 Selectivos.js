/*17.	La asociación de vinicultores tiene como política fijar un precio inicial al kilo de banano, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por el banano que entrega en un embarque, considerando lo siguiente:
Si es de tipo A, se le cargan $2 al precio inicial cuando es de tamaño 1; y $3 si es de tamaño 2.
Si es de tipo B, se rebajan $3 cuando es de tamaño 1, y $5 cuando es de tamaño 2.
Realice un algoritmo para determinar la ganancia obtenida.*/

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA:Tipo de banano (A o B).
//         Tamaño del banano (1 o 2).
//         Peso entregado en kilos.
// PROCESO:Determinar el precio inicial del kilo de banano según el tipo y tamaño.
//         Calcular la ganancia multiplicando el precio inicial por el peso entregado.
// SALIDA: Ganancia obtenida por el productor.

// SEUDOCODIGO //
//Inicio
//Escribir "Por favor, ingresa el tipo de banano (A o B): "
//Leer tipo_banano
//Escribir "Ahora ingresa el tamaño del banano (1 o 2): "
//Leer tamaño_banano
//Si tamaño_banano es igual a 1 entonces
//precio_inicial_kilo = precio_inicial_kilo + 2//
//Sino
//precio_inicial_kilo = precio_inicial_kilo + 3
//Fin Si
//Sino
//Si tamaño_banano es igual a 1 entonces
//precio_inicial_kilo = precio_inicial_kilo - 3
//Sino
//precio_inicial_kilo = precio_inicial_kilo - 5
//Fin Si
//Fin Si
//ganancia_obtenida = precio_inicial_kilo * peso_entregado
//Escribir "La ganancia obtenida por el productor es: ", ganancia_obtenida
//Fin

// LENGUAJE JAVASCRIPT //
let tipoBanano = prompt("Por favor, ingresa el tipo de banano (A o B):");
let tamañoBanano = parseInt(prompt("Ahora ingresa el tamaño del banano (1 o 2):"));
let precioInicialKilo = 0;
if (tipoBanano === "A") {
    if (tamañoBanano === 1) {
        precioInicialKilo += 2;
    } else {
        precioInicialKilo += 3;
    }
} else if (tipoBanano === "B") {
    if (tamañoBanano === 1) {
        precioInicialKilo -= 3;
    } else {
        precioInicialKilo -= 5;
    }
}
let pesoEntregado = parseFloat(prompt("Por favor, ingresa el peso entregado en kilos:"));
let gananciaObtenida = precioInicialKilo * pesoEntregado;
console.log("La ganancia obtenida por el productor es: " + gananciaObtenida);