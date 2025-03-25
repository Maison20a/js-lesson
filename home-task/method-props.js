let name = 'Maison';
let surname = 'Baretti';

function getFullName() {
    return this.name + ' ' + this.surname;
};

newFunc = function(){
    console.log('test');
    return 10;
};

let obj = { name, surname, getFullName };

console.log(obj.getFullName());

obj.whoAmI = function() {
    console.log(`My name ${this.name} ${this.surname}`);
    return
}

obj.whoAmI();

let otherObj = {

    someMethod: getFullName,
    newmethod: newFunc,
};

otherObj.someOtherMethod = getFullName;

console.log(otherObj.someMethod());
console.log(otherObj.someOtherMethod());
console.log(otherObj.newmethod());

let prikol = {
    name: 'Sosiska',
    surname: 'V teste',
    checkMethod: obj.whoAmI
};

console.log(prikol.checkMethod(this.name, this.surname));
