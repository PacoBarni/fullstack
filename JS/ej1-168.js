// Ejercicio 2
const a = 3;
const b = 5;
const c = 1;
const d = 7;

let e= a+b;
let f= c+d;

if (e > f) {
    console.log(`La suma de (${a} + ${b}) es mayor que la suma de (${c} + ${d})`);
    }
else if (e < f) {
        console.log(`La suma de (${a} + ${b}) es menor que la suma de (${c} + ${d})`);
        }
else {
        console.log(`La suma de (${a} + ${b}) es igual que la suma de (${c} + ${d})`);
    }

// Ejercicio 3

const angulo1 = 35;
const angulo2 = 90;
const angulo3 = 75;
const angulo4= angulo1 + angulo2 + angulo3;

if (angulo4 == 180) {
    console.log(`Los 3 ángulos pueden formar un triángulo`);
    }
else {
        console.log(`Los 3 ángulos no pueden formar un triángulo`);
    }

// Ejercicio 4

const numero1= 51;

if (numero1 %2 == 0) {
    console.log(`El número ${numero1} es par`);
    }
else {
    console.log(`El número ${numero1} es impar`);
    }

// Ejercicio 5

const numero2= 37;
const numero3= 93;
const numero4= 33;

if (numero2 > numero3 & numero4) {
    console.log(`El número ${numero2} es el mayor de todos`);
    }
else if (numero3 > numero2 & numero4) {
        console.log(`El número ${numero3} es el mayor de todos`);
        }
else {
        console.log(`El número ${numero4} es el mayor de todos`);
    }

// Ejercicio 6

const i = 25;
if(i == 25) { 
console.log("a");
}
else {console.log("b");
}

// Ejercicio 7

const y = 25;
if(y == 25) { 
console.log("a");
}
if(y == 24) { 
console.log("b");
}
else { 
console.log("c");
}


