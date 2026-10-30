//Operadores aritmeticos
let a = 10;
let b = 5;
console.log(a + b);
console.log (a % b);
console.log( a ** b);

// Operadores de comparacion
console.log(a == 10);
console.log(a === "10");
console.log (a > b);

//Operadores logicos
let esMayor = a > b;
let esPar = a % 2 === 0;
console.log(esMayor && esPar);
console.log(!esMayor);

//Operadores de asignacion
let c = 20;
c += 10; 
console.log(c);

//====Ejercicio 1========

let base = 10;
let altura = 5;
let area = base * altura;
console.log(area);
//======Ejercicio 2========
let num1= 10;
let num2 = 20;
console.log(num1 < num2);
//=====Ejercicio 3=======
let esMayorQue = true;
let esParQue = false;
console.log(esMayorQue && esParQue);
console.log(esMayorQue || esParQue);

//========Ejercicio 4========
let valor = 10;
valor += 5;
console.log(valor); 

//==========Ejercicio 5=======
let numero = 8;
console.log(numero > 0 && numero % 2 === 0);