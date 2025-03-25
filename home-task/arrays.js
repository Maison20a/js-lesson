let fruits = ['Яблоко', 'Апельсин', 'Груша', 'Банан', 'Манго'];

let alphabet = [];

alphabet.push('D');
alphabet.push('E');
alphabet.push('F', 'G', 'H')

alphabet.unshift('C');
alphabet.unshift('A', 'B');

console.log(alphabet);

console.log(fruits[3]);

console.log(alphabet.length);

console.log('Фрукт -', fruits[3], '\nБуква -', alphabet[5], '\nLast bukva -', alphabet.length - 1);

console.log(fruits);

console.log('Замена апельсина');

fruits[1] = alphabet[2];

console.log(fruits);