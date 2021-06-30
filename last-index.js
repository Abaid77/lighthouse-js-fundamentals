const lastIndexOf = function(array, value) {
  if(array === undefined || value === undefined) {
    return -1
  }
  let index = -1;
  for(let i = 0; i < array.length; i++) {
    let j = array[i]
    if(j === value){
      index = i
    } 
  }
  if(index >= 0) {
    return index;
  } else {
    return -1
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 1);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
