let motherBoard = {
    usbPortCount: 8,
    chipset: 'AMD X570',
    socket: 'AM3/AM4'
};

let cpu = {
    coreCount: 8,
    cpuManufacture: 'AMD',
    socket: 'AM4'
};

let videoCard = {
    videoCardModel: 'Nvidia RTX 4070',
    videoMemory: 8192,
};

let ram = {
    ramType: 'DDR5',
    ramVolume: 16264,
    ramFrequency: 4200,
};

let computer = {
    price: 100000,
    ...motherBoard,
    ...cpu,
    ...videoCard,
    ...ram
};

console.log(computer);

let computerObjAssign = Object.assign(
    {
        price: 100000,
    },
    motherBoard, cpu, videoCard, ram
);

console.log(computerObjAssign);

console.log(Object.keys(computer));
console.log(Object.values(computer));
console.log(Object.entries(computer));