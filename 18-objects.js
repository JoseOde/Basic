//Objetos

//Sintaxis

let person = {
  name: "José",
  age: 33,
  alias: "odesito",
};

//Acceso de propiedades

//Notación punto
console.log(person.name);

//Noatación de corchetes
console.log(person["name"]);

//Modificación

person.name = "José Odé";
console.log(person.name);

console.log(typeof person.age);
person.age = "55";
console.log(person.age);
console.log(typeof person.age);

//Eliminación de propiedades

delete person.age;

console.log(person);

//Nueva propiedad

person.email = "jose.m.ode.p@gmail.com";
person["age"] = 33;

console.log(person);

//Métodos (funciones)

let person2 = {
  name: "José",
  age: 33,
  alias: "Odesito",
  walk: function () {
    console.log("La persona camina");
  },
};
person2.walk();

//Anidación de objects
let person3 = {
  name: "José",
  age: 33,
  alias: "Odesito",
  walk: function () {
    console.log("La persona camina");
  },
  job: {
    name: "Programador",
    exp: 5,
    work: function () {
      console.log("La persona trabaja");
    },
  },
};

console.log(person3);
console.log(person3.name);
console.log(person3.job);
console.log(person3.job.name);
person3.job.work();

//Igualdad de objetos

let person4 = {
  name: "José Odé",
  alias: "odesito",
  email: "jose.m.ode.p@gmail.com",
  age: 33,
};

console.log(person);
console.log(person4);

console.log(person == person4);
console.log(person === person4);

//ojo no se comparan los valores dentro, se estancomparando las direcciones en memoria!!!

console.log(person.name == person4.name);

//Iteración

for (let key in person4) {
  console.log(key + ": " + person4[key]);
}

//Funciones como objects

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person5 = new Person("Dayana", 28);
console.log(person5);

console.log(typeof person5);
console.log(typeof person4);
