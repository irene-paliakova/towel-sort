
// You should implement your task here.

module.exports = 
function towelSort (matrix) {
  if (matrix == undefined || matrix == [])
    return [];
  /*for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) 
      matrix[i].sort((a,b) => a-b);
    else 
    matrix[i].sort((a,b) => b-a);
  }*/

  matrix = matrix
    .map((element, index) => index % 2 == 0 ? element.sort((a,b) => a-b) : element.sort((a,b) => b-a))
    .flat(1);

  return matrix;
}

