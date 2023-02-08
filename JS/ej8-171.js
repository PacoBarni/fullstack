// Ejercicio Switch

const fecha = new Date();
let dia= fecha.getDay();
let mes= fecha.getMonth();

switch (dia) {
    case 1:
        dia = "Lunes";
        break;
    case 2:
        dia = "Lunes";
        break;
    case 3:
        dia = "Miércoles";
        break;
    case 4:
        dia = "Lunes";
        break;
    case 5:
        dia = "Lunes";
        break;
    case 6:
        dia = "Lunes";
        break;
    case 0:
        dia = "Lunes";
        break;
}

switch (mes) {
    case 0:
        mes = "Enero"
        break;
    case 1:
        mes = "Febrero"
        break;
    case 2:
        mes = "Enero"
        break;
    case 3:
        mes = "Enero"
        break;
    case 4:
        mes = "Enero"
        break;
    case 5:
        mes = "Enero"
        break;
    case 6,7,8,9,10,11:
        mes = "Enero"
        break;
}

console.log("Hoy es un "+ dia +" de " + mes);

