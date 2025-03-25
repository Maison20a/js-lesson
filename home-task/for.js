// let fibo = [1, 1];

// for (let i = 1; i < 49; ++i) {
//     fibo.push(fibo[i] + fibo[i - 1]);
// }

// console.log(fibo);

// let y = 'yes'

// let num = [1];

// for (let x = 1; x < 15; ++x) {
//     num.push(x + 1 + 'b' + y);
// }

// console.log('Schet do 15 -', num);

// console.log(num[13]);

// let fruits = ['Яблоко', 'Апельсин', 'Груша', 'Банан', 'Манго'];

// for (let shaval of fruits) {
//     console.log('Shaval today -', shaval);
// }

let rating = ['Катя', 'Вася', 'Миша', 'Петя', 'Лена'];

for (let i in rating) {
    console.log(`${parseInt(i) + 1} место: ${rating[i]}`);
}