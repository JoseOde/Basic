//Funciones

//Simple

function myFunc() {
  console.log("Hola, Función!");
}

myFunc();

for (let i = 0; i < 5; i++) {
  myFunc();
}

//Con parámetros

function myFuncWithParams(name) {
  console.log(`Hola, ${name}!`);
}

myFuncWithParams("José");
myFuncWithParams("Odé");

//Funciones anónimas

const myFunc2 = function (name) {
  console.log(`Hola, ${name}!`);
};

myFunc2("José Odé");

//Arrow functions

const myFunc3 = (name) => {
  console.log(`Hola, ${name}!`);
};

const myFunc4 = (name) => console.log(`Hola, ${name}!`);

myFunc3("Odesito");
myFunc4("Odesito");

//Parámetros

function sum(a, b) {
  console.log(a + b);
}

sum(5, 10);
sum(5);
sum();

function defaultSum(a = 0, b = 0) {
  console.log(a + b);
}

//Por defecto

defaultSum();
defaultSum(5);
defaultSum(5, 10);
defaultSum((b = 5));

//Retorno de valores

function mult(a, b) {
  return a * b;
}

let result = mult(5, 10);
console.log(result);

//Funciones anidadas

function extern() {
  console.log("Función externa");
  function intern() {
    console.log("Función interna");
  }
  intern();
}

extern();
//intern() Error: fuera del scope!!!

//Funciones de orden superior

function applyFunc(func, param) {
  func(param);
}

applyFunc(myFunc4, "función de orden superior");

//forEach

myArray = [1, 2, 3, 4];

myArray.forEach(function (value) {
  console.log(value);
});

myArray.forEach((value) => console.log(value));
