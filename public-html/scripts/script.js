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

