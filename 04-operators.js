//Operadores

//Operadores Aritméticos

let a = 5;
let b = 10;

console.log(a + b); //Suma
console.log(a - b); //Resta
console.log(a * b); //Multiplicación
console.log(a / b); //División

console.log(a % b); //Módulo (Resto de la división)
console.log(a ** b); //Exponente

a++; //Incremento
console.log(a);

b--; //Decremento
console.log(b);

//Operadores de asignación

let myVariable = 2;
console.log(myVariable);

myVariable += 2;
console.log(myVariable);

myVariable -= 2;
console.log(myVariable);

myVariable *= 2;
console.log(myVariable);

myVariable /= 2;
console.log(myVariable);

myVariable %= 2;
console.log(myVariable);

myVariable **= 2;
console.log(myVariable);

//Operadores de comparación

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a == 6); //Igualdad por valor
console.log(a == "6"); //Igualdad por valor
console.log(a == a);
console.log(a === a); //Igualdad por identidad (por tipo y valor)
console.log(a === 6); //Igualdad por identidad (por tipo y valor)
console.log(a === "6");
console.log(a != 6);
console.log(a !== "6");

//Operadores lógicos

//and (&&)
console.log(5 > 10 && 15 > 20);
console.log(5 < 10 && 15 < 20);
console.log(5 < 10 && 15 > 20);

//or (||)
console.log(5 > 10 || 15 > 20);
console.log(5 < 10 || 15 < 20);
console.log(5 < 10 || 15 > 20);

//not (!)
console.log(5 > 10 && 15 > 20);
console.log(!(5 > 10 && 15 > 20)); // niego el valor (!)
console.log(5 > 10 || 15 > 20);
console.log(!(5 > 10 || 15 > 20)); // niego el valor (!)

//Operadores ternarios (?:)

const isRaining = true;

isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo");
