//2. Crear un objeto donde se desarrolla todo el algoritmo de Luhn.
const validator = {
  isValid (numero){
    //3. Convertir el valor del número de la tarjeta de crédito del usuario en un array.
    let array=numero.split("");

    //4. Invertir el array
    let arrayInvertido=array.reverse();

    //5. Multiplicar los números pares(que en el array corresponden a los impares) por 2 e incluir el resultado en el array.
    for(let i = 1; i < arrayInvertido.length; i=i+2){
      let numerosPares = arrayInvertido[i] * 2;
      arrayInvertido[i] = numerosPares

        //6. Una vez multiplicados los pares, sumar los digitos del valor de los que sean igual o mayor a 10 (para esto hay que convertir los 
        //números en un string, luego meterlos en un array, luego llamarlos desde sus posiciones en el array y finalmente hacer la suma).
        if(numerosPares > 9){
          let arrayDeNumerosPares =numerosPares.toString()
          let digitos = arrayDeNumerosPares.split('');
          let primerDigito = parseInt(digitos[0]);
          let segundoDigito = parseInt(digitos[1]);
          let sumaDosDigitos = primerDigito + segundoDigito;
          //7. Una vez sumados los números del valor de los que sean igual o mayor a 10, incorporarlos al array
          arrayInvertido[i] = sumaDosDigitos
        }
    }

    //8. Suma de los valores impares y de los nuevos valores de los pares (que en el array corresponden a las posiciones impares)
    let sumaFinal = 0;
    for(let n = 0; n < arrayInvertido.length; n++){
      arrayInvertido[n] = parseInt(arrayInvertido[n]);
      sumaFinal += arrayInvertido[n];
    }

    //9. Sacar el residuo de una división del valor de la suma de los números impares y de los nuevos valores de los pares y guardar el 
    //resultado en el local storage.
    let residuo = sumaFinal % 10;
      if(residuo === 0){
        residuo = true;
      }
      else{
        residuo = false;
      }
    return residuo;
  },

  //11.1. Ocultar números de la tarjeta de crédito y dejar visibles solo los 4 últimos dígitos.
  maskify(numero){
    let array2 = numero.split("");
    for(let i = 0; i<array2.length - 4; i++){
      array2[i]="#";
    }
        return array2.join("");
    }
};
export default validator;