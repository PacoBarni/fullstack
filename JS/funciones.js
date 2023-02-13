const sumar = (x,y) => {
    return x+y;
    };  
console.log(sumar(1,3));

const sumarSimple = (x,y) => x + y;
console.log(sumarSimple(1,3));

const sumarcall = (x,y,callback) => {
    callback (x+y);
    };
sumarcall(1, 3, (resultado) => {
    setTimeout (() => {
        console.log(resultado);
     },1000)
 });    
 
const restar = (x,y) => {
    return x-y;
    };
console.log(restar(2,4));

const restarSimple = (x,y) => x - y;
console.log(restarSimple(2,4));

const restarcall = (x,y,callback) => {
    callback (x-y);
    };
restarcall(2, 4, (resultado) => {
        setTimeout (() => {
            console.log(resultado);
         },2000)
     });  

const multiplicar = (x,y) => {
    return x*y;
    }
console.log(multiplicar(3,6));

const multiplicarSimple = (x,y) => x * y;
console.log(multiplicarSimple(3,6));

const multiplicarcall = (x,y,callback) => {
    callback (x*y);
    };
multiplicarcall(3, 6, (resultado) => {
        setTimeout (() => {
        console.log(resultado);
         },3000)
     });  

const dividir = (x,y) => {
    return x/y;
    }
console.log(dividir(10,2));

const dividirSimple = (x,y) => x / y;
console.log(dividirSimple(10,2));

const dividircall = (x,y,callback) => {
    callback (x/y);
    };
dividircall(10, 2, (resultado) => {
        setTimeout (() => {
        console.log(resultado);
         },4000)
     });  



