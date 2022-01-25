import validator from './validator.js';


  //console.log(validator);

// 1. Recibir el valor de la tarjeta de crédito del usuario.
document.getElementById("boton").addEventListener("click", cardNumber);
function cardNumber() {
    let numero = document.getElementById("card1").value;
    if(numero.length == 0){
      numero = "m"
    }
    validator.isValid(numero);
};

//10. Mostrar mensaje en pantalla: tarjeta valida o tarjeta invalida, dependiendo del resultado del algoritmo de Luhn.
document.getElementById("boton").addEventListener("click", getResultStorage);
function getResultStorage() {
  let textoH2 = document.getElementById("validationMessage");
  let resultStorage = localStorage.getItem("residuo1");
  alert(resultStorage)
  if(resultStorage == 0){
    textoH2.innerText = "Tarjeta valida"; 
}
  else {
    textoH2.innerText = "Tarjeta invalida"; 
  }
  localStorage.clear();
};

//11. Ocultar números de la tarjeta de crédito y dejar visibles solo los 4 últimos dígitos.
document.getElementById("boton").addEventListener("click", maskify1);
function maskify1() {
  let numeroTcUsuario = document.getElementById("card1");
  if (numeroTcUsuario.type==="password"){
   let arrayNumeroTcUsuario = numeroTcUsuario.split("");
   //arrayNumeroTcUsuario.slice([-0 [, fin]])
  }
  else {
      numeroTcUsuario.type="password"
  }
}


//document.getElementById("mostrarNumero").addEventListener("click", showNumbers);
//function showNumbers() {
  //let numeroTcUsuario = document.getElementById("card1");
  //if (numeroTcUsuario.type==="password"){
      //numeroTcUsuario.type="text";
  //}
  //else {
      //numeroTcUsuario.type="password"
  //}
//};