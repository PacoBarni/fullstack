// TIPO NUMBER
const numero0 = 1; 
const numero1 = 20.1;
// 32
const numero2 = 3.2e1;
// 300
const numero3 = 3e2;
// hexadecimal
const numero4 = 0x1f;
console.log(numero4);
// binario
const numero5 = 0b1010;
console.log(numero5);
// octal
const numero6 = 0o744;
console.log(numero6);
// otra forma de declarar una variable de tipo numérico 
const numero7 = Number(2);

//TIPO BOOLEAN
const boolean1 = true;
console.log(boolean1); 
const boolean2 = false;
console.log(boolean2);
//TIPO STRING
const str1 = "Hola 'a' todos"; //Comillas simples dentro
console.log(str1); 
const str2 = 'Hola "a" todos'; //Comillas dobles fuera
console.log(str2); 
const str3 = '"';
const str4 = '"';

// 14 - lenght
console.log(str1.length);
const str5 = 'hola';

// 3 - indexOf
console.log(str5.indexOf('h'));

// substring
// 'a "a" t' 
console.log(str2.substring(3, 10)); //(3 a 10 sin incluir el 10)

// charAt - o y undefined
console.log(str2.charAt(1));
console.log(str2[1]);
console.log(str2[33]);

