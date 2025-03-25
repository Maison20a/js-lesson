function greet( who = 'Noname') {
    console.log(`Привет, ${who}`);
}

greet('Maison');
greet();



function FindCard(cards, wantedCard = 'Tuz') {

    console.log(`Finding ${wantedCard} card in stack...`)

    let found = false;

    for (let card of cards) {
        console.log(`Find card this is - ${card}`);
        if (card === wantedCard){
            found = true;
            break;
        }
    }

    console.log(found ? `Мы нашли ${wantedCard}!` : `В колоде нет ${wantedCard}`);
}

let Mycards = ['6', '7', '8', '9', '10', 'Valet', 'Quin', 'King', 'Tuz'];


FindCard(Mycards);

FindCard(Mycards, 'King');
