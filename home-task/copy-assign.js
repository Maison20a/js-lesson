let me = {
    name: 'Maison'
};

let newMe = Object.assign(me, { name: 'Maxim', surname: 'Dorofeevs'});

let newMeSpread = { ...me, name: 'Max', surname: 'Dorik' };


console.log(me);
console.log(newMe);
console.log(newMeSpread);