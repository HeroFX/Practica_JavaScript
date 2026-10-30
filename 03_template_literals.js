let nombre = "Laura";
let edad = 20;

//Con operador +
console.log("Hola, me llamo " + nombre + " Y tengo " + edad + " años.");

// Con template literals//
console.log(`Hola, me llamo ${nombre} Y tengo ${edad} años.`)

//Sumas//
let a = 5;
let b = 3;
console.log("Resultado: " + a + b);
console.log("Resultado: " + (a + b));
console.log(`Resultado: ${a + b}`);

//Mensaje de varias lineas y singo de pesos//
let producto = "Mouse";
let cantidad = 2;
let precio = 1500;

console.log(`Producto: ${producto}
Cantidad: ${cantidad}
Precio unitario: $${precio}
Total a pagar: $${cantidad * precio}`)


//Ejercicio 6 //

let animal = "Perro";
let raza = "Labrador";
let edadAnimal = 5;
console.log(`Mi ${animal} es un ${raza} de ${edadAnimal} años.`);

//Ejercicio 7//
let Minombre = "Camilo";
let programa ="Desarrollo web y apps";
let miCiudad= "Medellin";

console.log(`Mi nombre es: ${Minombre} estudio ${programa} y vivo en ${miCiudad} `)
//Ejercicio 8 //

let nombreProducto = "Arepas";
let cantidadProducto = 6;
let precioUnitario = 2000;
console.log(`La compra de ${cantidadProducto} ${nombreProducto} tiene un costo de: ${cantidadProducto * precioUnitario}`)

//Ejercicio 9//
let ciudad = "Bogotá";
let temperatura = 14;
console.log(`La temperatura en ${ciudad} es de ${temperatura} °C`);