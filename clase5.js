//objeto
var antonio = {
	// Declarando atributos
	nombre: 'antonio',
	apellido: 'Góngora',
	edad: 28
}

var dario = {
	nombre: 'Dario',
	apellido: 'Susniky',
	edad: 29
}

//funciona (opción 1)
// function imprimirMayusculas(persona){
// 	console.log(persona.nombre.toUpperCase())

//una nueva forma de acceder directamente al atributo (opción 2)
// function imprimirMayusculas({ nombre }){

 function imprimirMayusculas(persona){
	 var { nombre } = persona
	console.log(nombre.toUpperCase())
}

imprimirMayusculas(antonio)
imprimirMayusculas(dario)
imprimirMayusculas({ nombre: "pepito" }) //Asignamos un nuevo objeto aquí mismo
// imprimirMayusculas()

function imprimirNombreEdad(persona){
	var nombre = persona.nombre
	var edad = persona.edad
	console.log(`Hola ${nombre} y tengo ${edad} años`)
}

imprimirNombreEdad(antonio)

function cumpleanos(persona){
	persona.edad += 1
}
