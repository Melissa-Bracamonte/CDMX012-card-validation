import validator from './validator.js';
//console.log(validator);

// 1. Recibir el valor de la tarjeta de crédito del usuario.
document.getElementById("boton").addEventListener("click", cardNumber);
function cardNumber() {
  let numero = document.getElementById("card1").value;
  if(numero.length == 0){
    numero = "m"
  }
  //10. Mostrar mensaje en pantalla: tarjeta valida (verde) o tarjeta invalida (rojo), dependiendo del resultado del algoritmo de Luhn.
  validator.isValid(numero);
    let residuoX = validator.isValid(numero);
    let textoH2 = document.getElementById("validationMessage");
    if(residuoX === true){
      textoH2.innerText = "Se ha registrado con éxito tu tarjeta";
      document.getElementById("validationMessage1").style.background="green"; 
    }
    else {
      textoH2.innerText = "Tarjeta invalida"; 
      document.getElementById("validationMessage1").style.background="red";
    }  
  //11.2. Ocultar números de la tarjeta de crédito y dejar visibles solo los 4 últimos dígitos.
  validator.maskify(numero);
    let array2 = validator.maskify(numero);
    document.getElementById("card1").value=array2;
}