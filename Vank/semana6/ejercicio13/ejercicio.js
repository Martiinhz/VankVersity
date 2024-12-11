const arrays = [[1, 2], [3, 4], [5, 6]];

const plano = arrays.reduce((acc, array) => acc.concat(array), []);

console.log(plano); // [1, 2, 3, 4, 5, 6]
