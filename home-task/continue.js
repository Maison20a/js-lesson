// let cards = ['6', '7', '8', '9', '10', 'Valet', 'Quin', 'King', 'Tuz'];
// let hand = [];

// for (let card of cards) {
//     if (card !== 'King' && card !== 'Tuz') continue;
//     hand.push(card);
//     console.log('Карта ' + card + ' добавлена в руку');
// }

// console.log('Карты в руке - ' + hand);

let cards = ['6', '7', '8', '9', '10', 'Valet', 'Qui', 'King', 'Tuz'];

console.log('Finding quin card in stack...')

let found = false;

for (let card of cards) {
    console.log(`Find card this is - ${card}`);
    if (card === 'Quin'){
        found = true;
        break;
    }
}

console.log(found ? 'Мы нашли даму!' : 'В колоде нет дам');