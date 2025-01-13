//Cadena de texto (String)
let myName = "José Odé";
let alias = "Odesito";
let email = `jose.m.ode.p@gmail.com`;

//Números (Number)
let age = 33; //Entero
let height = 1.74; //Decimal

//Booleanos (Boolean)
let isStudent = true;
let isTeacher = false;

//Undefined (declarado, pero no definido/inicializado)
let undefinedValue;
console.log(undefinedValue);

//Null
let nullValue = null;

//Symbol (valor unico e inmutable-se utiliza para representar identificadores unicos)
let mySymbol = Symbol("mysymbol");

//BigInt (Número entero grande)
let myBigInt = BigInt(1827391937129379812739812771293791273917398928137981273);
let myBigInt2 = 431321231293912849132491932412481284n; // otra forma de escribir un BigInt

//Mostramos los tipos de datos
console.log(typeof myName);
console.log(typeof alias);
console.log(typeof email);
console.log(typeof age);
console.log(typeof height);
console.log(typeof isStudent);
console.log(typeof isTeacher);
console.log(typeof undefinedValue);
console.log(typeof nullValue);
console.log(typeof mySymbol);
console.log(typeof myBigInt);
console.log(typeof myBigInt2);
