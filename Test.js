//------------------------------------------------------------
//First Presentation
//------------------------------------------------------------

//types of variables
const second = 2;
const SECOND = 2;

const $third = 2;
let text = "string text";

const PI = 3.14;
let summ = second + SECOND + $third;
console.log(summ);
let decrease = summ - $third;
console.log(decrease);

const first_func = function () { console.log("Hello Bohdan!") };
first_func();

const isFalse = false;
console.log(isFalse);

//check data types
let nextA;
let nextB = [1, 8];
console.log(typeof (text));        //return string
console.log(typeof (PI));          //return number
console.log(typeof (first_func));  //return function
console.log(typeof (isFalse));     //return boolean
console.log(typeof (nextA));       //return undefined
console.log(typeof (nextB));       //return object

//comparison 
const leftApper = 10;
const rightApper = "10"; //another data type
const secondRightApper = 30;
console.log(leftApper == rightApper);        //must be true
console.log(leftApper == secondRightApper);  //must be false
console.log(leftApper === rightApper);       //must be false
console.log(leftApper === secondRightApper); //must be false

//-------------------------------------------------------------------
//Second presentation
//-------------------------------------------------------------------

//increase value
const a = 15; //types of variables
const b = 20;
const sum = a + b;
console.log (a + b);

//shorter way
let c = a; //types of variables
c += b;
console.log(c);

//another example
const constA = 15;
const constB = 5;
const result = constA * constB * constB;
console.log(result);

//shorter way
let result1 = constB * constB;
result1 *= constA;
console.log(result1); 

//decrease value
let d = 12;
let e = 7;
d = d - e;
console.log(d);

//shorter way
let newLetter = 12;
newLetter -= e;
console.log(newLetter);

//comparison
const radius = 15;
console.log(radius>20);     //must be false
console.log(radius>=20);    //must be false
console.log(radius<20);     //must be true
console.log(radius!== 15);  //must be false 

//ternary
const valueDistanceInKm = 200;
const valueTimeInHours = 4;
const valueSpeed =  valueTimeInHours !== 0   //one of logical operators
       ? valueDistanceInKm / valueTimeInHours
       : "Wrong estimate of time"
console.log(`Your speed is ${valueSpeed} km/hr`);

//logical operators
const distanceInKm = 100;
const timeInHours = 4;
const nextValueSpeed =  timeInHours !== 0 && distanceInKm >= 1
       ? distanceInKm / timeInHours
       : "Wrong value of time or distance"
console.log(`Your speed is ${nextValueSpeed} km/hr`);

const distInKm = 130;
const tInHours = 2;
const secondValueSpeed =  tInHours > 0 || distInKm > 1
     ? distInKm / tInHours
     : "Wrong value of time or distance"
console.log(`Your speed is ${secondValueSpeed} km/hr`);

//Conditional operators
const secondA = 8;
const secondB = 16;
const secondC = 82;

//example with if...
if (secondA > 7) {
    console.log("Second A is more than 7");
}

//example with if...else
if (secondB >= 18) {
    console.log("Congrats! You can get a driver's license");
} else {
    console.log("Ooops. Need to be older");
}

//example with else...if
if (secondC >= 75) {
    console.log("Sorry, you are too old for that");
} else if (secondC >= 18) {
    console.log("Congrats! You can get a driver's license");
} else {
    console.log("Ooops. You need to be older");
}

//example with switch... case

const year = 2021;
switch (year) {
    case 2020: {
        console.log("This is the previous year");
    }
    break;

    case 2021: {
        console.log("This is the current year");
    }
    break;
    
    case 2022: {
        console.log("This will be the next year");
    }
    break;

    default: {
        console.log("Sorry, I dont remember this year");
    }
}
//-------------------------------------------------------------------
//Third presentation (Objects)
//-------------------------------------------------------------------
//first object creation
const cat = {                        //create with options
    name: 'Tomas',
    ageInYears: 13,
    color: 'silver',
    speak: () => console.log('Meaw')
}
cat.speak ()
console.log('The cat name is', cat.name);
console.log('The cat color is', cat.color);

if (cat.ageInYears >= 13) {
    console.log('This is a very old cat');
}

//create and modify object
const carSedan = {};     //create empty object
carSedan.doors = 5;      //add new option for object
console.log('Sedan car has', carSedan.doors, 'doors');
carSedan.signal = () => console.log('Tu-lu-la');
carSedan.signal ();

//methods for work with objects
const pet = {
    name: 'Yummi',
    weightInKg: 12,
    hasFur: true,
}
console.log(pet.valueOf());                //return the primitive value of the object

console.log(pet.hasOwnProperty('name'));   //check if object has property - true
console.log(pet.hasOwnProperty('color'));  //check if object has property - false
console.log(pet.toString());               //return string representation of an object

//static methods
//example Object.assign()
const firstHouseFlats = {a:6, b:8, c:10, d:1, h:55};
const secondHouseFlats = {a:4, b:6, c:7, d:9, z:45};
const thirdHouseFlats = {b:5, d:12, e:45};

const fourthHouseFlats = Object.assign({}, secondHouseFlats, thirdHouseFlats);
console.log(firstHouseFlats);    //check if not rewritten - return { a: 6, b: 8, c: 10, d: 1, h: 55 }
console.log(fourthHouseFlats);   //return { a: 4, b: 5, c: 7, d: 12, h: 55, z: 45, e: 45 }

//example Object.create()
const firstPersonLook = {
    name: 'Jenni',
    headdress: 'cap',
    dressLenght: 'short',
    dressColor: 'red',
    shoes: 'sneakers',
    sayAbout: function() {
        console.log(`Hi. My name is ${this.name}. My look is ${this.headdress}, ${this.dressColor} ${this.dressLenght} dress and ${this.shoes}.`);
    }
};
firstPersonLook.sayAbout();

const secondPersonLook = Object.create(firstPersonLook);   //create new object from prototype
secondPersonLook.name = 'Nicole';                          //extend property for secondPersonLook
secondPersonLook.dressColor = 'blue';                      //extend property for secondPersonLook
console.log(secondPersonLook);                             //check changed properties
secondPersonLook.sayAbout();                               //check new result

//example Object.entries()
//will done after theme about cycles

//example Object.freeze()
const person = {
    dateOfBirth: 1990,
    hairColor: 'black',
}
Object.freeze(person);
person.dateOfBirth = 1980;   //change property of object
console.log(person);

//example Object.keys()
const someObject = {
    paramA: 'Standart',
    paramB: 'Normal',
    paramC: 'Excellent',
}
console.log(Object.keys(someObject));

//-------------------------------------------------------------------
//Fourth presentation (Functions)
//-------------------------------------------------------------------
//arrow function example
const firstFunc = () => {
    console.log('3 weeks JS Crash Course');
}
firstFunc()

//shorter way
const secondFunc = () => console.log('Second week of JS Crash Course');
secondFunc()

//function declaration example
function someFunc(items, cost) {
      itemsCost = items * cost;
      console.log ('All items cost is $', itemsCost)   
}
someFunc(10, 45)

//function expression example
const speed = function (distance, time) {
    carSpeed = distance * time;
    console.log('The car speed is', carSpeed,'km/hr');
}
speed(10, 15)
//anonymous function example
function newFunction(startFunc) {
    startFunc();
  }
   
  newFunction(function() {
    console.log("It is working function");
  });

//Immediately invoked function expression example
  (function coolFunction (paramA, paramB) {
      sumParam = paramA + paramB
      console.log('The summary of param is', sumParam); 
  })(10, 5);

//uses with objects
const flat = {
    rooms: 4,
    bedrooms: 3
};

function homeComment(firstFlatParam, secondFlatParam) {
  console.log('It is a', firstFlatParam, 'rooms flat');
  if (secondFlatParam === 4) {
    console.log("And with 4 bedrooms");
} else {
    console.log('And with',flat.bedrooms,'bedrooms');
  }
}
homeComment(flat.rooms, flat.bedrooms);

//function in function
const building = {
    oneRoomsFlats: 17,
    twoRoomsFlats: 9
};

function countFlats(buildingFlats) {
    console.log(buildingFlats);
}
function flatsInBuilding(flatsWithOneRoom, flatsWithTwoRooms) {
    const summar = flatsWithOneRoom + flatsWithTwoRooms;
    countFlats(`It is a ${summar} flats building`);
}
flatsInBuilding(building.oneRoomsFlats, building.twoRoomsFlats);

//functions like arguments
const fingers = {
    leftHandFingers: 17,
    rightHandFingers: 9
};

function fingersSummary(fingersFromLeftH, fingersFromRightH, consoleFunc) {
    const fingSum = fingersFromLeftH + fingersFromRightH;
    consoleFunc(`You have ${fingSum} fingers`);
   
    if (fingSum < 10) {
        consoleFunc('Where you lost some fingers?');
    } else if (fingSum == 10) {
      consoleFunc('That is normal');
    } else {
        consoleFunc('Are you a muthant?');
    }
  }
   
  function consoleFunc(str) {
    console.log(str);
  }
  fingersSummary(fingers.leftHandFingers, fingers.rightHandFingers, consoleFunc)