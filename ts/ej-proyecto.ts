//Ejercicio 1 de Proyecto
let gestor1: { 
    nombre: string;
    dinero: number;
    numero: string;
}
let cliente1: {
    nombre: string;
    numCuenta: any;
    saldoDisponible: number;
};
let mensaje1: {
    emisor: string;
    receptor: string;
    mensaje: 'Hola' | 'Adiós';
};
let transferencia1: {
    emisor: number;
    receptor: number;
    dineroTransferencia: number;
    };

//Ejercicio 2 de Proyecto
let gestor2 = Object.keys(gestor);
for (const key of gestor3) {
    console.log(key);
}
let cliente2 = Object.keys(cliente);
for (const key of cliente3) {
    console.log(key);
}
let mensaje2 = Object.keys(mensaje);
for (const key of mensaje3) {
    console.log(key);
}
let transferencia2 = Object.keys(transferencia);
for (const key of transferencia3) {
    console.log(key);
}