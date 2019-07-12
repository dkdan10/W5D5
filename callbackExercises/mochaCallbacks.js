let dateFormat = require('dateformat');

class Clock {
  constructor() {
    // 1. Create a Date object.
    this.date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    // 3. Call printTime.
    // printTime();
    // 4. Schedule the tick at 1 second intervals.  
  }

  printTime() {
    // Format the time in HH:MM:SS
    let toPrint = dateFormat(this.date, "HH:MM:ss");
    // Use console.log to print it.
    console.log(toPrint);
  }

  _tick() {
    // 1. Increment the time by one second.
    this.date.setSeconds(this.date.getSeconds() + 1);
    // 2. Call printTime.
    this.printTime();
  }
}

const clock = new Clock();
clock.printTime();

// setInterval(() => {
//   clock._tick();
// }, 1000);

// const readline = require('readline');

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {reader.close(); return completionCallback(sum)}
  reader.question('What number would you like to add? \n', res => {
    let int = parseInt(res);
    sum += int;
    console.log(`The current sum is: ${sum}`);
    addNumbers(sum, numsLeft - 1, completionCallback);
  });

}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater ${el2}? \n`, res => {
    let resBool = (res === 'yes') ? true : false;
    callback(resBool);
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if(i < arr.length - 1){
    askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
      if (isGreaterThan) {
        [arr[i], arr[i + 1]] = [arr[i+1], arr[i]];
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  else{
    outerBubbleSortLoop(madeAnySwaps);
  }
}


function absurdBubbleSort(arr, completionCallback) {
  function outerBubbleSortLoop (anySwaps) {
    if (anySwaps === true) {innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)}
    else {completionCallback(arr);}
  }
  outerBubbleSortLoop(true);
}

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

Function.prototype.myBind= function (context, ...outerArgs) {
  let that = context;
  return (...innerArgs) => {
    this.call(that)
  };
}
class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function () {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"


Function.prototype.myThrottle = function(inyrval) {
  let tooSoon = false;
  return () => {
    if (tooSoon === false) {
      tooSoon = true;
      setTimeout(() => {
        tooSoon = false;
      }, inyrval);
      this();
    }
  }
}


Function.prototype.myDebounce = function(inyrval) {
  let hasBeenCalled = false
  let thisTimeout;
  return () => {
    if (hasBeenCalled) {
      clearTimeout(thisTimeout);
    } else {
      hasBeenCalled = true;
    }
    thisTimeout = setTimeout(() => {
      this();
      hasBeenCalled = false;
    },inyrval);
  }
}
