// let entrances = 4;

// let floor = 9;

// let FlatsPerFloor = 4;

// let FlatsPerEntraces = FlatsPerFloor * floor;

// console.log('Квартир в подъезде -' , FlatsPerEntraces);

// let flats = FlatsPerEntraces * entrances;

// console.log('Всего квартир -', flats);


let n = 10;

let current = 20;
let prev = 1;
let prevPrev = 0;

while (n-- > 0) {
    prev = prevPrev;
    prev = current;
    current += prevPrev;
    console.log(current);
}