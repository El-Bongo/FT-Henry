'use strict'
// No cambies los nombres de las funciones.

function factorear(num, aux = []) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  if(num === 1){
    aux.unshift(1)
    return aux;
  }  
  if(num % 2 === 0){
    aux.push(2);
    return factorear( num/2, aux)
  }
  if(num % 2 === 1){
    if(num % 3 === 0){
      aux.push(3)
      return factorear(num/3, aux);
    }else if(num % 5 === 0){
      aux.push(5)
      return factorear(num/5, aux)
    }else{
      for (let n = 0; n < num; n++) {
        if(num % n !== 0){
          aux.push(num)
          return factorear(num/num, aux)
        }
      }
    }
  }
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    for (let l = 0; l < array.length; l++) {
      if(array[l] > array[l + 1]){
        var swap = array[l];
        array[l] = array[l + 1]
        array[l + 1] = swap
      }
    }
  }
  return array;
}

let a = [1,234,54,6,7,32,2]

console.log(bubbleSort(a))


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 1; i < array.length; i++) {
      let current = array[i];
      let j = i-1
      while((j > -1) && (current < array[j])){
        array[j+1] = array[j];
        j--;
      }
      array[j+1] = current;
  }
  return array;
}

let b = [35 , 1000 ,234 , 500,54 ,6 ,70 ,32 ,2]

console.log(insertionSort(b))


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let min = i;

    for (let k = i+1; k < array.length; k++) {
      if(array[k] < array[min]){
        min = k;
      }
    }
    if(min != i){
      let swap = array[i];
      array[i] = array[min];
      array[min] = swap;
    }
  }
  return array;
}

let c= [35 , 1000 ,234 , 500,54 ,6 ,70 ,32 ,2];

console.log(selectionSort(c))


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
