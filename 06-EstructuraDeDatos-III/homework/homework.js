"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(num) {
  this.value = num;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {
  var newTree = new BinarySearchTree(value)
  if(value < this.value){
    if(!this.left){
      this.left = newTree;
    }else{
      this.left.insert(value);
    }
  }else if(this.value < value){
    if(!this.right){
      this.right = newTree;
    }else{
      this.right.insert(value);
    }
  }
}

BinarySearchTree.prototype.size = function () {
  if(this.right === null && this.left === null) return 1
  if(this.right !== null && this.left !== null) return 1 + this.left.size() + this.right.size()
  if(this.right === null || this.left !== null) return 1 + this.left.size()
  if(this.right !== null || this.left === null) return 1 + this.right.size()
}

BinarySearchTree.prototype.contains = function (value) {
  if(!this.value) return false;
  var current = this;
  while (current) {
    if(value < current.value){
      current = current.left;
    }else if(value > current.value){
      current = current.right;
    }else if(value === current.value){
      return true;
    }
  }
  return false;
}
BinarySearchTree.prototype.depthFirstForEach = function (cb ,order) {
  if(order === "pre-order"){
    // root - left -right
    cb(this.value);
    if(this.left){
      this.left.depthFirstForEach(cb, order);
    }
    if(this.right){
      this.right.depthFirstForEach(cb, order);
    }
  }
  if(order === "post-order"){
    // left - right - root
    if(this.left){
      this.left.depthFirstForEach(cb, order);
    }
    if (this.right) {
      this.right.depthFirstForEach(cb, order);
    }
    cb(this.value)
  }else if(!order || order === "in-order"){
    // left - root - right
    if(this.left){
      this.left.depthFirstForEach(cb, order);
    }
    cb(this.value);
    if(this.right){
      this.right.depthFirstForEach(cb, order);
    }
  }



}
BinarySearchTree.prototype.breadthFirstForEach = function (cb, aux = []) {
  cb(this.value);
  if(this.left){
    aux.push(this.left);
  }
  if(this.right){
    aux.push(this.right);
  }
  if(aux.length > 0){
    aux.shift().breadthFirstForEach(cb, aux)
  }
  


}

let tree = new BinarySearchTree(20);

tree.insert(35);
tree.insert(34);
tree.insert(315);
tree.insert(165);
tree.insert(15);
tree.insert(5);

console.log(tree);
console.log(tree.contains(15));
console.log(tree.size());




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
