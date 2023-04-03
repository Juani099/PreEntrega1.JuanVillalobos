//Creo la variable saldo para que el usuario tenga un limite de dinero a retirar.

let saldo = 10000;


//Creo las funciones necesarias para el funcionamiento eficaz de mi cajero.

function ingresarNombre() {
  let nombreIngresado = prompt("Cual es tu nombre?");
  console.log(nombreIngresado);
  alert("Bienvenido al cajero automático " + nombreIngresado);
}

function ingresarTarjeta() {
  let tarjeta = parseInt(prompt('Ingrese su número de tarjeta'));
  console.log("El numero de tarjeta es " + tarjeta);
}

function ingresarClave() {
let clave = parseInt(prompt('Ingrese su clave de acceso'))
if(clave != 1235){
  alert("Contraseña inválida")
  ingresarClave();
} 
}

function salir() {
  alert("Hasta pronto")
}

//A través de un switch le doy las opciones al usuario para navegar dentro del cajero.

function seleccionarOperación() {
  let op = prompt("1 - Ver saldo " + " 2 - Retirar dinero " + " 3 - Salir")
  switch (op) {
    case "1":
      alert("Su saldo saldo total es de " + saldo)
      seleccionarOperación();
    case "2":
      let dineroARetirar = parseInt(prompt("Cuanto desea retirar?"))
      if (dineroARetirar <= saldo) {
        let efectivo = saldo - dineroARetirar
        alert("Retiraste " + dineroARetirar)
        alert("Tu saldo restante es de " + efectivo)
        saldo = efectivo
        seleccionarOperación()
      } else {
        alert("No tienes el saldo suficiente")
        seleccionarOperación();
      }
      break;
    case "3":
      salir()
      break;
    default:
      alert("Operación inválida")

  }
}

ingresarNombre();
ingresarTarjeta();
ingresarClave();
seleccionarOperación();