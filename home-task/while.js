// let teaVol = 200;

// console.log('Вы налили себе чай - ' + teaVol + ' мл');

// while (teaVol > 0) {
//     teaVol -= 10;
//     console.log('В чашке осталось ' + teaVol + ' ml');
//     if (teaVol <= 0) 
//         console.log('Tea end!');
//     }


    let bullet = 5;
do {
    console.log('Click fire');
    if(bullet > 0)
    bullet -= 1;
    console.log('bullet = ', bullet);
    if (bullet == 0){
        console.log('lucky')
    }
} 
    
while (Math.random() > 0.2); {
     console.log('POTRACHENO');

}
// let i = 0;
// while(true){
//     if (i > 10) break;
//     console.log(i);
//     i += 2;
// }