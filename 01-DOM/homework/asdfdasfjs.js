const obj = {
    name: "Diego",
    surname: "Rodriguez",
    address: {street: 'Mirasoles'}
};


const {
    name: Nombre, 
    address: {street}, // crea una constante nueva, con lo que haya dentro del objeto declarado posteriormente
} = obj;

console.log(Nombre, street)

const objs = {
    hola: "hola",
    chau: "chau"
};

const {
    hola: Nombrecito, chau: calle,
} = objs;

console.log(Nombrecito, calle)
 
const arr = [1, 2, 3, 4];

const [uno, dos, tres] = arr;

console.log(uno, dos, tres)

function state(defaultState) {
    const state = defaultState;
    function setState (newState) {
        state = newState;
    }
    return [state, setState]
}

const [count, setCount] = state(2)
const [n, setN] = state(2)

//CONST NO TIENE HOISTING!!!
const miConst = 'Henry'; //memoria1
// miConst = 'Chris'; //memori2 XXXX

const miConstArry = [];// memoria 3
// miConstArry = [1,2,3,4,5,6]; //memori 4 creando un nuevo array
miConstArry.push(1);
miConstArry.push(2);
miConstArry.push(3);
miConstArry.push(4);
miConstArry.push(5);
miConstArry.push(6);
console.log(miConstArry);

const miConstObj = {}; //memoria 5
// miConstObj = { // memoria 6 XXX
//     name: 'chris'
// };
miConstObj.name = 'chris';
console.log(miConstObj);
//var tiene hoisting
//if no es un nuevo contecto de ejecucion es un bloque!!!
if (true) {
    var myVar = 'Henry';
}
//nuevo contexto de ejecucion
function hi(){
    var myVar2 = 'Hola'
}
hi();
// console.log(myVar2);
console.log(myVar);
//contexto de execusion
//let NO tiene Hoisting
// if (true) {
//     let myLet1 = 'Henry';
// }
// console.log(myLet1);
//bloque
//ARROW FUNCTIONS
var myName;
if (true) myName = "Chris";
else myName = "Henry";
function regular(nombre, email){
    return "Mi nombre es " + nombre + " y mi correo es: " + email;
}
let myArrowfun = nombre => "Mi nombre es " + nombre;
// let myNumArr = [0,1,2,3,4,5,6,7,8,9];
// myNumArr.map(function(el) {
//     return el * 5;
// });
// myNumArr.map((el, i) => el * i);
//arrow function tien el THIS bindiado al momento de la declartacion
var nombre = 'Juan';
// let myEx = {
//     nombre: 'Flor',
//     //this is bindiado al momento de execucion
//     setName: function(name){
//         this.nombre = name;
//     },
//     setNameArrow: (name) => {
//         this.nombre = name;
//     }
// }
// ​
// // myEx.setName('Federico');
// myEx.setNameArrow('Federico');
// ​
// // console.log(myEx.nombre);
// ​
// ​
// ​
// // console.log(regular('chris', 'noseaschismosos@gmail.com'));
// // console.log(myArrowfun('chris', 'noseaschismosos@gmail.com'));
// ​
// //Classes
// ​
// //Funcion contructora
// function MyLinkedListDelTerror(value){
//     this.value = value;
// }
// ​
// MyLinkedListDelTerror.prototype.add = (value) =>{
//     //awesome code
// }
// ​
// //funciones constructores no tienen herencia
// ​
// //classes si tiene herencia
// class Vehicle{
//     constructor(valor){
//         this.valor = valor;
//         this.numLlantas = 0;
//     }
// ​
//     setLlantas(num){
//         this.numLlantas = num;
//     }
// }
// ​
// class Automovil extends Vehicle{
//     constructor(valor, cil){
//         super(valor);
//         this.cilindrada = cil
//     }
//     encender(){ console.log('Vrrrrrrmmmmm');}
// }
// ​
// class Sedan extends Automovil{
//     constructor(valor, cil, baul){
//         super(valor, cil);
//         this.baul = baul;
//     }
// }
// ​
// let cadillac = new Automovil('$500,000USD', '3.0');
// console.log(cadillac);
// cadillac.encender();
// ​
// class Avion extends Vehicle{
//     constructor(valor, motores){
//         super(valor);
//         this.numMotores = motores
//     }
//     encender(){ console.log('Tuuuuuuuutuuuuuu');}
// }
// ​
// let boeing = new Avion('$1,500,000USD', 2);
// console.log(boeing);
// boeing.encender();
// ​
// class Barco extends Vehicle{
    
// }
// ​
// //Object Literals
// // let nombre = 'chris';
// // let email = 'yatedijequenoseaschismosos@gmail.com';
// ​
// // let myUser = {
// //     nombre,
// //     email,
// // }
// ​
// let pecado = "no invitar al concierto de DL";
// let persona1 = 'alumnos reprobados';
// let person2 = 'El teacher';
// let institucion = 'Henry';
// ​
// // Template Strings
// ​
// console.log('Es una falta de respeto ' + pecado + ' al ' + person2 + ' por lo que todo los ' + persona1 + ' en ' + institucion);
// console.log(`Es una falta de respeto ${pecado} al ${person2}`);
// ​
// //Destructuring
// ​
// // Destructuring
// let myUser = {
//     nombre: 'chris',
//     email:'noseaschism@gmail.com',
//     telefono: '53131351351',
//     ocupacion: 'Instructor'
// }
// ​
// let lectorDeUsuarios = user => {
//     let { nombre: userNombre, email, telefono } = user;
//     let nombre = 'Henry'
//     console.log(`Mi nombre es ${userNombre} y mi email es ${email} y mi telefono es ${telefono}. Mi ins. es ${nombre}`)
// };
// ​
// lectorDeUsuarios(myUser);
// ​
// let arrayNuevo = [0,1,2,3,4,5,6];
// let [ primero, segundo, tercero, ,quinto  ] = arrayNuevo;
// ​
// console.log(primero);
// console.log(segundo);
// console.log(tercero);
// console.log(quinto);
// ​
// //Default
// ​
// let mydefault = (num = 7) => console.log(`mi numero es ${num}`);
// ​
// mydefault();
// ​
// //rest
// let sum = (a, ...arg) =>{
//     console.log(arg);
// };
// ​
// sum('Chris', 5, true, 8);
// ​
// //spread
// let arrayNemo = new Array(1000, 'Nemo'); //['nemo1', 'nemo2, 'nemo3,...]
// //separa los valores en variables individuales
// console.log(...arrayNemo);