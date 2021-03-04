module.exports = function towelSort (matrix) {
    let arr = [];
    if (!matrix) {
        return arr;
    }
    for (i = 0; i < matrix.length; i++) {
        if ((i + 1) % 2 === 0) {
            matrix[i].reverse();
        }   
    }
    arr = matrix.flat();
  return arr;
}



