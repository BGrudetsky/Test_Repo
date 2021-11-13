/*const arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
function reverseArrayItems(array) {
    let reverArray = "";
    for (let a = array.length - 1; a >= 0; a--) {
      reverArray += array[a] + " ";
    }
    return console.log(reverArray);
  }
reverseArrayItems(arr)


  function sumNumsInArrays(array1, array2) {
    let sumArray1 = 0;
    let sumArray2 = 0;
    for (let i = 0; i < array1.length; i++) {
      sumArray1 += array1[i];
    }
    for (let n = 0; n < array2.length; n++) {
      sumArray2 += array2[n];
    }
    return sumArray1 + sumArray2;
  }

  let array1   = [4, 6, 7];
  let array2  = [8, 1, 9];
  function sumNumsSamePosition(array1, array2) {
    const summaryArray = [];
    for (let b = 0; b <= array1.length - 1; b++) {
      summaryArray.push(array1[b] + array2[b]);
    }
    return console.log(summaryArray);
  }
  sumNumsSamePosition(array1, array2)


  function sumNums(array) {
    let d = 0;
    let sumOfNumbers = 0;
    while (d <= array.length - 1) {
      sumOfNumbers += array[d];
      d++;
    }
    return console.log(sumOfNumbers);
  }
  sumNums(array1)

  const strArr = ['error01', 'in a galaxy', 'start-error', 'far far', 'away', '0994-error']
  function filterArrayWithStrings(array) {
    let strinArr = [];
    for (let m = 0; m < array.length; m++) {
        if (array[m].length >= 4 && !(array[m].includes('error'))) {
            strinArr.push(array[m])
        } else {
        }
    }
return console.log(strinArr);  
}
filterArrayWithStrings(strArr)
*/
/*
function printEvenNumbers(n) {
    let numb = [];
    for (let k = 1; k <= n; k++) {
      if (k % 2 === 0) {
        numb.push(k);
      }
    }
    return console.log(numb.toString());
  }
  printEvenNumbers (20)*/
/*  const arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
  function reverseArrayItems(array) {
    let reverArray = [];
    for (let a = array.length - 1; a >= 0; a--) {
      reverArray.push (array[a] + " ");
    }
    return console.log(reverArray.toString());
  }
  reverseArrayItems(arr)*/
/*
  function printEvenNumbers(n) {
    let numb = [2];
    for (let k = 4; k <= n; k++) {
      if (k % 2 === 0) {
        numb.push(" " + k);
      } else {
      }
    }
    return console.log(numb.toString());
  }
  printEvenNumbers (22)*/

/*  function spreadFunc(firstObj, secondObj, defaultObj = {}) {
    return {
      ...firstObj,
      ...secondObj,
      ...defaultObj,
    };
  } 
  const newObj = spreadFunc(
    { firstEl: 'first value'},
    { secondEl: 'second value'}
  );
  console.log(newObj);*/
  const numer = [1, 2, 3, 4, 5, 6];
  let sumNumer = 0;
  let ab = 0;
  while (ab < numer.length) {
    sumNumer += numer[ab];
    ab++;
  }
  console.log('sum of nums items is ', sumNumer);
