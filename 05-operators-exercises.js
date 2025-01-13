// 1. Crea una variable para cada operación aritmética
let a = 24;
let b = 33;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let myVariable = 50;
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

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
let x = 10;
let y = 15;
let z = 20;

console.log(z > x);
console.log(z > y);
console.log(z >= x);
console.log(z >= y);
console.log(x < y);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(z < x);
console.log(z < y);
console.log(z <= x);
console.log(z <= y);
console.log(x > y);

// 5. Utiliza el operador lógico and
console.log(z > x && z > y);

// 6. Utiliza el operador lógico or
console.log(z > x || x > y);

// 7. Combina ambos operadores lógicos
console.log((z > x && z > y) || x > y);

// 8. Añade alguna negación
console.log(!(z > x && z > y));

// 9. Utiliza el operador ternario
const isSunny = true;
isSunny ? console.log("Está soleado") : console.log("No está soleado");

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log(x + y > x + z || z * x >= z ** x);
