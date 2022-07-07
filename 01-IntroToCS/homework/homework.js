'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let resultado = 0;
  for (let i = 0; i < num.length; i++) {
    let numero = num[i] * (Math.pow(2, (num.length - i - 1)));
    resultado += numero;
  }
  return resultado;
}

function DecimalABinario(num) {
  // tu codigo aca
  let arr = [];
  while (num >= 1) {
    arr.unshift(num % 2);
    num = Math.floor(num / 2);
  }
  return arr.join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}