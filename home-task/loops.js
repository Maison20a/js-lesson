let computer = {
    price: 100000,
    usbPortCount: 8,
    chipset: 'AMD X570',
    coreCount: 8,
    cpuManufacture: 'AMD',
    socket: 'AM4',
    videoCardModel: 'Nvidia RTX 4070',
    videoMemory: 8192,
    ramType: 'DDR5',
    ramVolume: 16264,
    ramFrequency: 4200,
};


let keys =Object.keys(computer);
let values =Object.values(computer);
let entries = Object.entries(computer);

for (let value of values) {
    console.log(value);
}

for (let key of keys) {
    console.log(key, computer[key]);
}


console.log('\nENTRY')
for (let entry of entries) {
    console.log(entry[0], entry[1])
}