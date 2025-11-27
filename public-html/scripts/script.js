// 3.	Provocar un error de cualquier tipo e imprimir su mensaje

console.log("Ejercicio 1 (3.)");

try {
    console.log(x) // x no está definida
} catch (e) {
    console.error(e.message)
}
