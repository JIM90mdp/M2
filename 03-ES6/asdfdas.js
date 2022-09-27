// let fibonacci = {
//     [Symbol.iterator]() {
//       let pre = 0, cur = 1;
//       return {
//         next() {
//           [pre, cur] = [cur, pre + cur];
//           return { done: false, value: cur }
//         }
//       }
//     }
//   }
  
//   for (var n of fibonacci) {
//     // truncate the sequence at 1000
//     if (n > 1000)
//       break;
//     console.log(n);
//   }

//   const arr = [1,2,3,4,5]
//   console.log(...arr);

//   function* gen() {
//     yield 1;
//     yield 2;
//     yield 3;
//   };
  
//   var g = gen(); // "Generator { }"
//   console.log(g.next());      // "Object { value: 1, done: false }"
// //   g.next();      // "Object { value: 2, done: false }"
// //   g.next();      // "Object { value: 3, done: false }"
// //   g.next(); 
// console.log(g.next()); 
// console.log(g.next()); 
// console.log(g.next()); 
// console.log(g.next());   

// var selectorTypeMatcher = function(selector) {
//   selector > 0 ?  "class" : "hola"
// };



// console.log (hola)

// var firstCheck = true,
//     secondCheck = false,
//     access = firstCheck ? "Acceso Denegado" : secondCheck ? "Acceso Denegado" : "Acceso Permitido";

// console.log( access ); 

// // selector.startsWith("#") ?  "class" : selector.startsWith(".") ? "id" : !selector.startsWith(".") && selector.includes('.') ? "tag.class" : 'tag';

// var selectorTypeMatcher = function(selector) {
//   if (selector.startsWith("#") === true) return ("class");
//   if (selector.startsWith(".")) return("id");
//   if (!selector.startsWith("." ) && selector.includes(".")) return ("tag.class");
//   return "tag";
// };

// console.log(selectorTypeMatcher("gasd"))

class Persona {
  constructor(nombre = "Juan", apellido = "Mascarenhas") {
    this.nombre = nombre,
    this.apellido = apellido;
  }
}
let Juan = new Persona("Ignacio", "Vaccari")
console.log(Juan)
