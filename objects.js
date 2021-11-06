//-------------------------------------------------------------------
//10 examples of Objects
//-------------------------------------------------------------------

//Example 1
const fridge = {};     //create empty 'fridge' object =)
fridge.apples = 5;      //add new options to 'fridge'
fridge.sausages = 10;
fridge.colaBottles = 2;
console.log('The fridge has next products:', fridge.valueOf());
fridge.openDoor = true;
fridge.light = () => console.log('Light is on');
if (fridge.openDoor = true) {
fridge.light ();
}
//Example 2
const car = {                        //create with options
    brand: 'Audi',
    model: 'A8',
    color: 'black',
    engine: 'gasoline',
    yearOfManufact: 2012,
    engineSound: () => console.log('Vroom, Vroom')
}
car.engineSound ()
console.log(`The name of car is ${car.brand} ${car.model}`);
console.log('The car color is', car.color);

if (car.yearOfManufact <= 2020) {
    console.log('Change car for newer');
}
//Example 3
const laptop = {
    brand: 'Dell',
    processorBrand: 'Intel',
    processorGeneration: 11,
    isOwnedByCompany: true,
    needService: true,
    stillOnWarranty: false
}
console.log(laptop.valueOf());                //return the primitive value of the object
console.log(laptop.hasOwnProperty('needService'));
if (laptop.needService == true && laptop.stillOnWarranty == true && laptop.isOwnedByCompany == true) {
    console.log('Please, call to IT department');
} else {
    console.log('Sorry, it is only your problems');
}
//Example 4
const newStudent = {
    name: 'Reuben',
    age: 19,
    countryOfLiving: 'England',
    cityOfLiving: 'London',
    sayHello: function() {
        console.log(`Hi. My name is ${this.name}. I am ${this.age} and came from ${this.countryOfLiving} ${this.cityOfLiving}.`);
    }
};
newStudent.sayHello();

const nextNewStudent = Object.create(newStudent);        //create new object from prototype
nextNewStudent.name = 'Bob';                           //extend property for nextNewStudent
nextNewStudent.age = 21;                               //extend property for nextNewStudent
console.log(nextNewStudent);                             //check changed properties
nextNewStudent.sayHello();                               //check new result

//Example 5
const firstDayResults = {unitsOfItemA:6, unitsOfItemB:8, unitsOfItemC:10, unitsOfItemD:1};
const secondDayResults = {unitsOfItemA:4, unitsOfItemB:6, unitsOfItemC:7, unitsOfItemD:9};
const thirdDayResults = {unitsOfItemA:5, unitsOfItemB:12, unitsOfItemE:45};

const lastActualDayResults = Object.assign({}, secondDayResults, thirdDayResults);
console.log(firstDayResults);    //check if not rewritten
console.log(lastActualDayResults); 

//Example 6
const girl = {
    dateOfBirth: 1998,
    eyesColor: 'brown',
    hairColor: 'black',
}
console.log(girl);           //original properties
girl.eyesColor = 'blue';     //change property before freeze
console.log(girl);
Object.freeze(girl);
girl.dateOfBirth = 1991;   //change property of object after freeze
console.log(girl);

//Example 7
const cargo = {
    widthInMeters: 2,
    heightInMeters: 1,
    lengthInMeters: 1,
}
console.log('The cargo has the following dimensions:',Object.keys(cargo));

//Example 8