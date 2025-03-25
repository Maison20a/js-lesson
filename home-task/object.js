
let name = 'Maxim';
let secname = 'Dorofeev';
let middlename = 'Alexandrovich';

let charInfo = {

    name,
    secname,
    middle: middlename,
    birdhDate: { year: 1999, month: 2, day: 20 },
    job: 'Front Devoloper',
    vapeNation: true,
    'Special parametr': null
};


charInfo.addedParam = 'New Param';
charInfo.Vehicle = 'VW POLO'


charInfo.addedParam = 'EditParam';

charInfo["Special parametr"] = 179;

console.log(`Hello im ${charInfo.secname} ${charInfo.name} ${charInfo.middle}. My birthday is ${charInfo.birdhDate.day}.${charInfo.birdhDate.month}.${charInfo.birdhDate.year}`);

function writeInfo (obj, objParam) {
    console.log(obj[objParam]);
}

writeInfo(charInfo, 'Vehicle');