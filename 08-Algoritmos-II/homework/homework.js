'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length <= 1){
    return array;
  }
  var arrBig = [];
  var arrSmall = [];
  var pivot = array[array.length - 1]; //         variante : var pivot = array[0]     empezas desde la primera posicion del array
  for (let i = 0; i < array.length -1; i++) { //  let i = 1; i < array.length         y el for salta la primera posicion (porque ya se toma como pivot)
      if(array[i] <= pivot){
        arrSmall.push(array[i]);
      }
      if(array[i] > pivot){
        arrBig.push(array[i]);
      }
  }
  return quickSort(arrSmall).concat(pivot, quickSort(arrBig));  // [].concat(quickSort(arrSmall), pivot, quickSort(arrBig))
}
// var a = [2, 8, -7, 15, 7, -20, 1, 5];
// console.log(quickSort(a))



function merge(left, right) {
  let leftIndex = 0
  let rightIndex = 0
  let arrOrdered = [];
  while(leftIndex < left.length && rightIndex < right.length){}
  if(left[leftIndex] < right[rightIndex]){
    arrOrdered.push(left[leftIndex]);
    leftIndex ++;
  }else{
    arrOrdered.push(right[rightIndex]);
    rightIndex ++;
  }
  return arrOrdered.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length === 1) return array

  let mid = Math.floor(array.length/2)
  let left = array.slice(1,mid);
  let right = array.slice(mid);

  return (merge(mergeSort(left), mergeSort(right)))
}

var a = [2, 8, -7, 15, 7, -20, 1, 5, 0];
console.log(mergeSort(a))





// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
