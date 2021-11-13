// Task 1 - should return the string "Hello, World!"
function sayHelloWorld() {
    return console.log("Hello, World!");
  }
  sayHelloWorld();
  
  // Task 2 - should return the string "Hello, Somename!"
function sayHello(name) {
    return console.log("Hello,", name);
  }
  sayHello("Bohdan");
  
  // Task 3 - should return sum of two numbers
  // a + b
function sumNumbers(a, b) {
    const sum = a + b;
    return console.log(sum);
  }
  sumNumbers(15, 5);

// Task 4 - should return a value by key in provided object
// provided object - { name: 'Name' }
// result - 'Name'
function valueByKeyInObject(key, obj = {name: 'Bohdan'}) {
    return console.log(obj.name);
}
valueByKeyInObject()

// Task 5 - should return an object with new field and value
// without object - { name: 'Name' }
// with an object - { name: 'Name', age: 100 }
function extendObject(key, value, obj = {name: 'Bohdan'}) {
    const newObj = Object.assign({}, obj);
    newObj.age = 100;
    console.log (newObj.valueOf());
}
extendObject()
// Task 6 - should return a larger argument increased by 100
// with (10, 7) output - 110
// with (10, 77) output - 177
function increaseBiggerArg(a, b) {
    console.log(100 + Math.max(a, b)); 
}
increaseBiggerArg(10, 7)
increaseBiggerArg(10, 77)

// Task 7 - calculate the area of a figure using
// provided type: "square", "circle", or "rectangle"
// for circle "a" is radius
// for square only "a" needed
function calculateFigureArea(figureType, a, b) {
    if (figureType === 'circle') {
        const circArea = Math.pow (a, a) * Math.PI;
        console.log('The area of the circe is', circArea);
      } else if (figureType === 'square') {
        const squArea = Math.pow (a, a);
        console.log('The square area is ', squArea);
      } else if (figureType === 'rectangle') {
        const rectArea = a * b;
        console.log('The area of rectangle is', rectArea);
      } else {
          console.log('Sorry. It is impossible to calculate the area.')
      }
}
calculateFigureArea ('circle', 5, 8)