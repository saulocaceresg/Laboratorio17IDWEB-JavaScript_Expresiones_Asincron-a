// 3.	Provocar un error de cualquier tipo e imprimir su mensaje

console.log("Ejercicio 1 (3.)");

try {
    console.log(x) // x no está definida
} catch (e) {
    console.error(e.message)
}

// 4.	Generar un SyntaxError usando JSON.parse con texto inválido. En el catch mostrar e.name y e.message

console.log("Ejercicio 2 (4.)\nJSON inválido");

try {
    let textoJSON = "{nombre: 'Pedro'}";
    let objeto = JSON.parse(textoJSON);
    console.log("Objeto: ", objeto);
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}

// 5.	Que console.log genere un error de cualquier tipo, en el catch imprimir “falló” y en finally imprimir “siempre se ejecuta”
console.log("Ejercicio 3 (5.)\n\"Finally\"");

try {
    console.log(3/a);
} catch (e) {
    console.log("Falló");
} finally {
    console.log("Siempre se ejecuta");
}