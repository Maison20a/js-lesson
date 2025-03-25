function checkAge(age) {
    console.log(`You are ${age} y.o.`);
    if (age >= 18) return console.log('sucsec!');;
    console.log('decline!');
}


checkAge(10);

checkAge(20);

function randomik(min, max) {
    min = Math.ceil(min);
    max - Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let dip1 = 0;
let dip2 = 10;

function pusto(dip1, dip2){
    console.log('do nothing lol');
    return randomik(dip1, dip2);
    
}

console.log(pusto());

let x = pusto(100, 200);
console.log(x);

