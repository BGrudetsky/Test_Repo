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


//example Object.keys()
const someObject = {
    paramA: 'Standart',
    paramB: 'Normal',
    paramC: 'Excellent',
}

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

//-------------------------------------------------------------------
//Fifth presentation (Arrays)
//-------------------------------------------------------------------
// empty array example
let firstArray = [];

// array with nums example
const secondArray = [100, 1000, 10000, 100000];

// array with strings example
const thirdArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// different data types example
const anyArray = [50, 'string', { n: 5 }, [10,100,1000]];

//access to elements from array
const arrayWithElements = [12, 'cat', true, {firstKey: 'string'}];
console.log(arrayWithElements[1]);
console.log(arrayWithElements[2]);
console.log(arrayWithElements[3].firstKey);

//modification of arrays
const nextArray = [55, 66, 77, 88, 99];
nextArray[2] = 111;
console.log(nextArray);
delete nextArray [0];  //delete info in 0 element
console.log(nextArray);
nextArray.shift();     //delete element


//method .push() example
const pushExampleArray = [55, 66, '77', true, false];
pushExampleArray.push('Done');
pushExampleArray.push(88);
pushExampleArray.push({name:'Bohdan', age: 100});


//method .pop() example
const popExampleArray = [100, 99, 98, 97];
popExampleArray.pop();
popExampleArray.pop();


//method .unshift() example
const unsftExmplArray = [45, 46, 47, 48];
unsftExmplArray.unshift(43, 44);
unsftExmplArray.unshift(41, '42');
unsftExmplArray.unshift(40);


//method .shift() example
const sftExampleArr = [15, 25, 35, 45, 55];
sftExampleArr.shift();    //delete first element
sftExampleArr.shift();    //delete new "first element" but "previous second"

//method .concat() example
const firstOperArray = [19, 20];
const secondOperArray = [21, 22, 23];
const concatResult = firstOperArray.concat(secondOperArray);

//get and use info 
const versions = [
    {version: 1},
    {version: 2},
    {version: 3}
]
function someVersion(myVersion) {
    return 'You have ' + myVersion + ' version of game';
}
someVersion(versions[1].version)

//create new info
const emptyArray = [];
function infoAdder (array, info) {
    array.push(info);
}
infoAdder(emptyArray, 45);

//spread operator and default value example
function spreadFunc(firstObj, secondObj, defaultObj = {}) {  //use default element
    return {
      ...firstObj,
      ...secondObj,
      ...defaultObj,
    };
  } 
  const summaryObj = spreadFunc(
    { firstEl: 'first value'},
    { secondEl: 'second value'}     //third element is default
  );

//destructuring of the object
const dog = {
    name: 'Barsik',
    ageInYears: 13,
    color: 'silver'
  }
const { name, color } = dog;

//destructuring of the array	
const years = ['25 Years', '27 Years', '30 Years', '33 Years', '35 Years']
const [ younger,,, young, older] = years;   // unnamed two items inside array

//destructuring of the array for changing elements
function swap(arrOn, xi, xj) {
    [arrOn[xi], arrOn[xj]] = [arrOn[xj], arrOn[xi]];   // replace of array elements
  }
  const theatrePlacesNums = [51, 53, 52, 55, 54];
  swap(theatrePlacesNums, 1, 2);
  swap(theatrePlacesNums, 3, 4);

//-------------------------------------------------------------------
//Sixth presentation (Loops)
//-------------------------------------------------------------------
//loop 'for...' example
let sumUsingLoop = 0;
for (let i = 0; i <= 100; i++) {
  sumUsingLoop += i;
}

//loop 'for...' for work with arrays (example)
const numbs = [18, 19, 20, 31, 50.5, 60];   //use number with point
let sumOfNumbs = 0;
for (let i = 0; i < numbs.length; i++) {
  sumOfNumbs += numbs[i];
}

//loop 'for...' for work with arrays (example)
let string2 = '';
const startArr = ['My', 'true', 'name', 'is', 'John,','and', 'I', 'am', 23];
  for (let h = 0; h < startArr.length; h++) {
    string2 += startArr[h] + ' ';
  }

//loop 'for...' for work with arrays (reverse)(example)
let reversStr = '';
const normalArr = [23, 'am', 'I', 'and','John,', 'is', 'name', 'true', 'My'];
  for (let g = normalArr.length - 1; g >= 0; g--) {
    reversStr += normalArr[g] + ' ';
  }

//loop 'for... in' example
const obj10 = {
    first: 10,
    second: 11,
    third: 21
  };
  let smStr = '';
  for (let key in obj10) {
    smStr += key + ", ";
  }

//loop 'while' for work with arrays (example)
const numer = [1, 2, 3, 4, 5, 6];
let sumNumer = 0;
let ab = 0;
while (ab < numer.length) {
  sumNumer += numer[ab];
  ab++;
}

//loop 'while' for work with arrays (example)
const names1 = ['Tony', 'Johnie', 'Messi', 'Fessi', 'Pessi'];
let sumSenten = '';
let ac = 0;
while (ac < names1.length) {
  sumSenten += names1[ac] + ' ';
  ac++;
}

//loop 'do... while' example 
let ar = 9;
let fct = 1;
do {
  fct *= ar;
  ar--;
} while (ar >= 1)

//-------------------------------------------------------------------
//Seventh presentation (Methods for working with arrays)
//-------------------------------------------------------------------
// method .sort() example
const unSort = [25, 15, 20, 19];
unSort.sort(
  (curr, next) => {
    if(curr < next) {
      return -1;
    }
  }
  );

//method .forEach() example
const numberz = [1, 2, 3, 4, 5, 6];
let sumz = 0;
numberz.forEach(num => {
  sumz += num
})

//method .map() fith anonymous fn example
const numz = [1, 2, 3, 4, 5, 6];
const increasedNumz = numz.map(function (num) {
  return num + 5;
})

//method .map() with arrow fn example
const numsZ = [1, 2, 3, 4, 5, 6];
const incrNumsZ = numsZ.map(num => num + 5);

//method .map() with declarated fn example
const numsie = [0, 1, 0, 3, 6, 5, 6];
const incrNum = numsz => {
  if (numsz <= 0) {
    return 10;
  }
  return numsz + 10;
}
const newNumsie = numsie.map(incrNum);

//method .filter() example
const nuMs = [5, 1, 3, 2, 6, 6, 5];
const filNuMs = nuMs.filter(function(num) {
  return num !== 5;
});

//method .filter with array fn example
const numbes = [1, 5, 73, 88, 35, 61];
const filteredNums = numbes.filter((elem) => elem !== 88);

//method .filter for work with objects example
const balls = [
  { color: 'red', printedNumber: 45 },
  { color: 'yellow', printedNumber: 14 },
  { color: 'black', printedNumber: 15 },
  { color: 'blue', printedNumber: 25 },
  { color: 'pink', printedNumber: 11 },
  { color: 'brown', printedNumber: 8 }
];
const printedNumberRes = balls.filter((balls) => balls.printedNumber > 11);

//method .reduce() for work with arrays example
const arrNumsie = [150, 20, 13, 4, 3, 6];
const dec = arrNumsie.reduce(
  (acc, current) => acc -= current,
  500
);

//method .reduce() for filter changes in array example
const anotherBalls = [
  { color: 'red', printedNumber: 45 },
  { color: 'black', printedNumber: 14 },
  { color: 'blue', printedNumber: 15 },
  { color: 'orange', printedNumber: 25 },
  { color: 'pink', printedNumber: 11 },
  { color: 'green', printedNumber: 8 }
];
const filteredBalls = anotherBalls.reduce((acc, element) => {
  if (element.printedNumber > 14) {
    acc.push({
      color: element.color,
      printedNumber: element.printedNumber,
      result: (element.color + ' ') + (element.printedNumber),
    })
  }
  return acc;
}, []);

//method .reduce() for filter and changes in array + spread operator	
const sameBalls = [
  { color: 'red', printedNumber: 45 },
  { color: 'black', printedNumber: 14 },
  { color: 'blue', printedNumber: 15 },
  { color: 'orange', printedNumber: 25 },
  { color: 'pink', printedNumber: 11 },
  { color: 'green', printedNumber: 8 }
];
const filtSameBalls = sameBalls.reduce((acc, item) => {
  if (item.printedNumber > 11) {
    acc.push({
      ...item,
      fullName: (item.color + ' ') + item.printedNumber,
    })
  }
  return acc;
}, []);

//method .sort() example
const nums1 = [4, 9, 7, 0, 15, 3.5];
const sumN = nums1.sort(
  (a, b) => a - b
);

//method .join() example
const phraseArray = ['This', 'is', 'just', 'a', 'beginning'];
const stringPhrase = phraseArray.join(' ');

//method .includes() example
const inclExampleArray = [100, 200, 300];
console.log(inclExampleArray.includes(100));

//method .indexOf() example
const brands = ['lenovo', 'dell', 'msi', 'asus', 'hp'];
 console.log(brands.indexOf('hp'));

 //method .slice() example
const tickets = [5, 7, 10, 4, 8, 6, 2];
const slicedTickets = tickets.slice(0, 5);
console.log(slicedTickets);

//method .splice() example
const alphabet = ['B', 'C', 'D', 'E', 'F', 'G'];
alphabet.splice(0, 0, 'A');
console.log(alphabet);

//-------------------------------------------------------------------
//Eight presentation (Methods for working with strings)
//-------------------------------------------------------------------
//concatination of strings
const employee = {
  firstName: 'John',
  lastName: 'Connor',
};
const welcomeStr = 'Welcome, ' + employee.firstName + ' ' + employee.lastName + '!';

//concatination with another type of data
const nextEmployee = {
  firstName: 'Bohdan',
  lastName: 'Connor',
  tasks: 3,
};
const info = 'Employee ' + nextEmployee.firstName
	+ ' ' + nextEmployee.lastName + ' has ' + 
    + nextEmployee.tasks + ' tasks';

//concatination with Number type of data
const example = 10 + ' years old';

//template literals (template strings)
const yearsNumb = 25;
const type = 'student'
const rslt = `${yearsNumb} old ${type}`;

//template literals (template strings) with ternary operator
const yearsNumb1 = 25;
const type1 = 'student'
const rslt1 = `${yearsNumb1 > 20 ? 45:25} years old ${type1}`;

//method .charAt() example
const biography = 'William Shakespeare was an English playwright, poet and actor.';
const index = 18;
const char = biography.charAt(index);

//method .includes() example
const sculptureTerm = 'Sculpture is the branch of the visual arts that operates in three dimensions.';
const word = 'dimensions';
const hasWord = sculptureTerm.includes(word);
console.log(`The word "${word}" ${hasWord ? 'is' : 'is not'} in the term`);

//method .indexOf() example
const capitalMadrid = 'Capital city Madrid is home to the Royal Palace and Prado museum.';
console.log(capitalMadrid.indexOf('Madrid'));
console.log(capitalMadrid.indexOf('house'));

//method .toLowerCase() example
const javaScrpt = 'JavaScript IS HIGH-LEVEL, OFTEN JUST-IN-TIME compiled and multi-paradigm.';
const normJavaScrpt = javaScrpt.toLowerCase()
console.log (normJavaScrpt);

//method .toUpperCase() example
const parach = 'A parachute is usually made of a light, strong fabric.';
const newParach = parach.toUpperCase();
console.log(newParach);

//method .slice() example
const infoNY = 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean.';
console.log(infoNY.slice(35));
console.log(infoNY.slice(0, 13));
console.log(infoNY.slice(-25));
console.log(infoNY.slice(-42, -25));

//method .split() example
const strLA = 'Los Angeles is a sprawling Southern California city and the center of the nation’s film and television industry.';
const arrLA = strLA.split(' ');
console.log(arrLA);

//method .match() example
const infoArthur = 'King Arthur was a legendary British leader who, according to medieval histories and romances.';
const regex1 = /[A-Z]/g;
const matches = infoArthur.match(regex1);
console.log(matches);

//method .replace() example
const bicycle = 'A bicycle rider is called a cyclist, or bicyclist.';
console.log(bicycle.replace('bicycle', 'bike'));
const regex2 = /called/g;
console.log(bicycle.replace(regex2, 'named'));

//method .trim() example	
const programDesc = '   Write a JavaScript program to count the number of vowels in a given string.   '; 
console.log(programDesc.trim());