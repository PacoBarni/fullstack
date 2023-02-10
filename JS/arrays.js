const coches = ['Saab', 'Volvo', 'Opel', 'BMW'];
console.log(coches);
for(let coche of coches){
console.log(coche);
}
const frutas = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(frutas);
console.log(frutas.toString());
console.log(frutas.join(' '));
const coches1 =  ['Saab', 'Volvo', 'BMW'];
coches1[coches1.lenght]='Renault';
console.log(coches1);
//Ejercicio
let programas = ['HTML', 'CSS', 'JavaScript'];
console.log(programas);
(programas.push('Paiton'));
console.log(programas);
(programas.unshift('Programa'));
console.log(programas);
(programas.pop());
console.log(programas);
(programas.shift());
console.log(programas);
delete programas[1];
console.log(programas);
(programas.splice(3,0, 'Paiton', 'Programa'));
console.log(programas);
(programas.splice(1,1,));
console.log(programas);
(programas.splice(3,1, 'VSC', 'GitHub'));
console.log(programas);
const union = programas.concat(frutas);
console.log(union);
console.log(programas);
const frutas1= frutas.slice(1,3);
console.log(frutas1);
console.log(frutas);
//Ejercicio 1
let ejercicio1 = [1, 14, 33, 37, 51, 99];
//for clásico
for (let i=0; i<ejercicio1.length; i++) {
    console.log(ejercicio1[i]);
}
//for of
for (let ejercicio1b of ejercicio1) {
    console.log(ejercicio1b);
}
//Ejercicio 1 b
let ejercicio1c = [];
for (let i=0; i<6; i++) {
    ejercicio1c.push(Math.floor(Math.random()*100));
    }
    console.log(ejercicio1c);
//Ejercicio 3
let colores = ['Amarillo', 'Rojo', 'Azul'];
let coloresb = [];
for (let color of coloresb) {
    coloresb.push(color);
    console.log(coloresb);
}
console.log(coloresb);
// Ejercicio 4
const frutas2 = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(frutas2.sort());
//
let array1 =[];
let array2 =[];
for (let i=0; i<6; i++) {
    array1.push(Math.floor(Math.random()*100));
    array2.push(Math.floor(Math.random()*100));
    }
    console.log(array1);
    console.log(array2);
// Ejercicio 5
let array3 = ['Banana', 'Orange', 'Apple', 'Mango'];
let array4 = array3.slice(1,3);
console.log(array4);













