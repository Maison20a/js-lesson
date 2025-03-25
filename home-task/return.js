
// let cards = ['6', '7', '8', '9', '10', 'Valet', 'Quin', 'King', 'Tuz'];
// function FindCard(cards, wantedCard = 'Tuz') {

//     console.log(`Finding ${wantedCard} card in stack...`)

//     let foundIndex = -1;

//     for (let index in cards) {
//         let card = cards[index];
//         console.log(`Find card this is - ${card}`);
//         if (card === wantedCard){
//             foundIndex = index;
//             break;
//         }
//     }

//     console.log(foundIndex > -1 ? `Мы нашли ${wantedCard}!` : `В колоде нет ${wantedCard}`);

//     return foundIndex;
// }

// let Mycards = ['6', '7', '8', '9', '10', 'Valet', 'Quin', 'King', 'Tuz'];


// let x = FindCard(Mycards);

// let y = FindCard(Mycards, 'Valet');

// console.log(x);
// console.log(y);

// let b = FindCard(Mycards, '5');

// console.log(b);

// FindCard();



let cards = ['6', '7', '8', '9', '10', 'Valet', 'Quin', 'King', 'Tuz'];
function FindCard(cards, wantedCard = 'Tuz') {

    console.log(`Finding ${wantedCard} card in stack...`)


    for (let index in cards) {
        let card = cards[index];
        console.log(`Find card this is - ${card}`);
        if (card === wantedCard){
            console.log(`Мы нашли ${wantedCard}!`);
            return index;
        }
    }

        console.log(`В колоде нет ${wantedCard}`);

    return -1;
}

let Mycards = ['6', '7', '8', '9', '10', 'Valet', 'Quin', 'King', 'Tuz'];


let x = FindCard(Mycards);

let y = FindCard(Mycards, 'Valet');

console.log(x);
console.log(y);

let b = FindCard(Mycards, '5');

console.log(b);

FindCard();