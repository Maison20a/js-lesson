
// счетчик до 10
for (let i = 0; i <= 10; i++){
    console.log(i);
}

// заполнение массива на основе значений счетчика
let a = [];

for (let i = 0; i <= 10; i++) {
    a.push(i + i);
}


// Заполнение массива на основе значений другого массива
let b = [];

for (let pow2 of a){
    b.push(pow2 / 2);
}

// Заполнение массива на основе других данных (длинна массива не известна)

let c = [];
let next;

while (next = file.nextLine()) {
    c.push(next);
}

// Обработка значений массива
for (let line of lines) {
    console.log('Дллинна строки:', line.lenght);
}

// обработка индексов массива
for (let number in lines) {
    console.log(`Длинна строки №${number}: ${lines[number].lenght}`)
}

// Обработка значенией или индексов массива в обратном порядке

let aReversed = [];
for (let i = a.length -1; i >= 0; --i) {
    aReversed.push(a[i]);
}


