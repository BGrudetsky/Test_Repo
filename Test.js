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
//Third presentation
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







