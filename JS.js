//Hello Wrold
console.log("Hello Wrold!");

//Variables
var myVariable = "Hello, World!";
let myVariable = "Hello, World!";
const myVariable = "Hello, World!";

//Data types
//Primitive
/** Number  */
var age = 25;
var temperature = 98.6;

/** String  */
var name = "John Doe";
var message = "Hello, world!";

/**  Boolean */
var isLogged = true;
var hasPermission = false;

/** Null  */
var myVariable = null;

/** Undefined  */
var myVariable;

/** Symbol  */
var mySymbolWithDescription = Symbol("This is a symbol");

//Non Primitive
/** Object  */
var person = {
  name: "John Doe",
  age: 25,
  city: "New York",
};

var car = {
  make: "Toyota",
  model: "Camry",
  year: 2021,
};

//Operators
/** Arithmetic Operators  */
var num1 = 10;
var num2 = 5;

var sum = num1 + num2; // Addition: 15
var difference = num1 - num2; // Subtraction: 5
var product = num1 * num2; // Multiplication: 50
var quotient = num1 / num2; // Division: 2
var remainder = num1 % num2; // Modulus: 0
var increment = ++num1; // Increment: 11
var decrement = --num2; // Decrement: 4

/** Assignment Operators  */
var x = 10;

x += 5; // Equivalent to x = x + 5: 15
x -= 3; // Equivalent to x = x - 3: 12
x *= 2; // Equivalent to x = x * 2: 24
x /= 4; // Equivalent to x = x / 4: 6
x %= 3; // Equivalent to x = x % 3: 0

/** Comparison Operators  */
var a = 5;
var b = 10;

var isEqual = a == b; // Equality: false
var isNotEqual = a != b; // Inequality: true
var isGreaterThan = a > b; // Greater than: false
var isLessThan = a < b; // Less than: true
var isGreaterOrEqual = a >= b; // Greater than or equal: false
var isLessOrEqual = a <= b; // Less than or equal: true

/** Logical Operators  */
var isTrue = true;
var isFalse = false;

var andOperator = isTrue && isFalse; // Logical AND: false
var orOperator = isTrue || isFalse; // Logical OR: true
var notOperator = !isTrue; // Logical NOT: false

/** String Concatenation Operator  */
var firstName = "John";
var lastName = "Doe";

var fullName = firstName + " " + lastName; // String Concatenation: "John Doe"

/** Bitwise Operators  */
//Bitwise AND
var a = 5; // Binary: 0101
var b = 3; // Binary: 0011

var result = a & b; // Binary result: 0001 (Decimal: 1)

//Bitwise OR
var a = 5; // Binary: 0101
var b = 3; // Binary: 0011

var result = a | b; // Binary result: 0111 (Decimal: 7)

//Bitwise XOR
var a = 5; // Binary: 0101
var b = 3; // Binary: 0011

var result = a ^ b; // Binary result: 0110 (Decimal: 6)

//Bitwise NOT
var a = 5; // Binary: 00000000000000000000000000000101

var result = ~a; // Binary result: 11111111111111111111111111111010 (Decimal: -6)

/** Ternary Operators  */
var age = 18;
var message = age >= 18 ? "You are an adult" : "You are not an adult";
console.log(message); // Output: "You are an adult"

/** Type Operators  */
typeof 42; // "number"
typeof "Hello"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" (Note: This is considered a bug in JavaScript)
typeof [1, 2, 3]; // "object"
typeof { name: "John", age: 30 }; // "object"
typeof function () {}; // "function"

//Type Conversions
/** String Conversion   */
var num = 42;
var str = String(num);
console.log(str); // "42"

var bool = true;
var boolStr = bool.toString();
console.log(boolStr); // "true"

/** Number Conversion   */
var strNum = "42";
var num = Number(strNum);
console.log(num); // 42

var bool = true;
var boolNum = +bool;
console.log(boolNum); // 1

/** Integer Conversion   */
var strNum = "42.9";
var intNum = parseInt(strNum);
console.log(intNum); // 42

var floatNum = 3.14;
var intFloat = +floatNum;
console.log(intFloat); // 3

/** Float Conversion   */
var strNum = "3.14";
var floatNum = parseFloat(strNum);
console.log(floatNum); // 3.14

var intNum = 42;
var floatInt = +intNum;
console.log(floatInt); // 42.0

/** Boolean Conversion   */
var str = "Hello";
var bool = Boolean(str);
console.log(bool); // true

var num = 0;
var numBool = !!num;
console.log(numBool); // false

//Equality
/** Strict Equality (===)  */
console.log(5 === 5); // true
console.log("Hello" === "Hello"); // true
console.log(5 === "5"); // false (different types)
console.log(true === 1); // false (different types)
console.log(null === undefined); // false (different types)

/** Loose Equality (==)  */
console.log(5 == 5); // true
console.log("Hello" == "Hello"); // true
console.log(5 == "5"); // true (converted "5" to a number)
console.log(true == 1); // true (converted true to 1)
console.log(null == undefined); // true (both are considered equal in loose equality)

//Conditional statements
/** if Statement  */
var age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}

/** if-else Statement */
var age = 16;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult yet.");
}

/** else-if Statement */
var time = 14;

if (time < 12) {
  console.log("Good morning!");
} else if (time < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

/** switch Statement */
var day = 3;
var dayName;

switch (day) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  default:
    dayName = "Unknown";
}

console.log("Today is " + dayName + ".");

//Looping code
/** for Loop  */
for (var i = 0; i < 5; i++) {
  console.log(i);
}

/** while Loop  */
var i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

/** do-while Loop */
var i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);

/** for...in Loop  */
var person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};

for (var key in person) {
  console.log(key + ": " + person[key]);
}

/** for...of Loop  */
var numbers = [1, 2, 3, 4, 5];

for (var num of numbers) {
  console.log(num);
}

//Functions
// Function declaration
function greet(name) {
  console.log("Hello, " + name + "!");
}

// Function call
greet("John"); // Output: Hello, John!

// Function with return value
function addNumbers(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

var result = addNumbers(3, 5);
console.log(result); // Output: 8

//Scope
// Global scope
var globalVariable = "I'm a global variable";

function myFunction() {
  // Local scope
  var localVariable = "I'm a local variable";
  console.log(globalVariable); // Accessible
  console.log(localVariable); // Accessible

  // Nested function
  function nestedFunction() {
    var nestedVariable = "I'm a nested variable";
    console.log(globalVariable); // Accessible
    console.log(localVariable); // Accessible
    console.log(nestedVariable); // Accessible
  }

  nestedFunction();
}

myFunction();

console.log(globalVariable); // Accessible
console.log(localVariable); // Error: localVariable is not defined
console.log(nestedVariable); // Error: nestedVariable is not defined

//Nested function scope
function outerFunction() {
  var outerVariable = "I'm an outer variable";

  function innerFunction() {
    var innerVariable = "I'm an inner variable";

    console.log(outerVariable); // Accessible
    console.log(innerVariable); // Accessible
  }

  innerFunction();
}

outerFunction();

//Closure
function outerFunction() {
  var outerVariable = "I'm an outer variable";

  function innerFunction() {
    console.log(outerVariable); // Accessing outerVariable from the outer scope
  }

  return innerFunction; // Returning the innerFunction
}

var closure = outerFunction(); // Assigning the returned innerFunction to a variable
closure(); // Calling the closure function

//Currying
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

var multiplyByTwo = multiply(2);
console.log(multiplyByTwo(4)); // Output: 8

var multiplyByThree = multiply(3);
console.log(multiplyByThree(5)); // Output: 15

//this keyword
/** Global Context  */
console.log(this); // Output: Window (in browser) or global (in Node.js)

/** Function Context  */
function myFunction() {
  console.log(this);
}

myFunction(); // Output: Window (in browser) or global (in Node.js)

/** Method Context  */
var obj = {
  name: "John",
  greet: function () {
    console.log("Hello, " + this.name + "!");
  },
};

obj.greet(); // Output: Hello, John!

/** Constructor Context  */
function Person(name) {
  this.name = name;
}

var person = new Person("John");
console.log(person.name); // Output: John

/** Event Listener Context  */
var button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log(this); // Output: <button> element
});

/** Explicit Context Binding  */
function greet() {
  console.log("Hello, " + this.name + "!");
}

var person = {
  name: "John",
};

greet.call(person); // Output: Hello, John!

//Constructor
// Constructor function for creating Person objects
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    console.log(
      "Hello, my name is " + this.name + " and I am " + this.age + " years old."
    );
  };
}

// Creating instances using the constructor
var person1 = new Person("John", 30);
var person2 = new Person("Jane", 25);

// Accessing properties and calling methods of the instances
console.log(person1.name); // Output: John
console.log(person2.age); // Output: 25

person1.greet(); // Output: Hello, my name is John and I am 30 years old.
person2.greet(); // Output: Hello, my name is Jane and I am 25 years old.

//Prototype
// Constructor function for creating Person objects
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype of Person
Person.prototype.greet = function () {
  console.log(
    "Hello, my name is " + this.name + " and I am " + this.age + " years old."
  );
};

// Creating instances using the constructor
var person1 = new Person("John", 30);
var person2 = new Person("Jane", 25);

// Accessing properties and calling the prototype method
console.log(person1.name); // Output: John
console.log(person2.age); // Output: 25

person1.greet(); // Output: Hello, my name is John and I am 30 years old.
person2.greet(); // Output: Hello, my name is Jane and I am 25 years old.

//Inheritance
// Parent constructor function
function Shape(color) {
  this.color = color;
}

// Method defined on the prototype of Shape
Shape.prototype.getColor = function () {
  return this.color;
};

// Child constructor function inheriting from Shape
function Circle(radius, color) {
  Shape.call(this, color); // Call the parent constructor to inherit properties
  this.radius = radius;
}

// Linking the prototypes to establish inheritance
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// Method defined on the prototype of Circle
Circle.prototype.getArea = function () {
  return Math.PI * this.radius * this.radius;
};

// Creating instances
var circle = new Circle(5, "red");

console.log(circle.getColor()); // Output: red
console.log(circle.getArea()); // Output: 78.53981633974483

//Prototypal inheritance
// Prototype object
var personPrototype = {
  greet: function () {
    console.log(
      "Hello, my name is " + this.name + " and I am " + this.age + " years old."
    );
  },
};

// Create a new object using Object.create() and assign the prototype
var person1 = Object.create(personPrototype);
person1.name = "John";
person1.age = 30;

// Create another object inheriting from the same prototype
var person2 = Object.create(personPrototype);
person2.name = "Jane";
person2.age = 25;

// Access the inherited method
person1.greet(); // Output: Hello, my name is John and I am 30 years old.
person2.greet(); // Output: Hello, my name is Jane and I am 25 years old.

//Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Creating instances of the Person class
var person1 = new Person("John", 30);
var person2 = new Person("Jane", 25);

// Accessing properties and calling methods of the instances
console.log(person1.name); // Output: John
console.log(person2.age); // Output: 25

person1.greet(); // Output: Hello, my name is John and I am 30 years old.
person2.greet(); // Output: Hello, my name is Jane and I am 25 years old.

//Iterables and Iterators
/** Iterables */
// Custom iterable object
const myIterable = {
  data: ["apple", "banana", "cherry"],
  currentIndex: 0,
  next() {
    if (this.currentIndex < this.data.length) {
      return { value: this.data[this.currentIndex++], done: false };
    } else {
      return { done: true };
    }
  },
  [Symbol.iterator]() {
    return this;
  },
};

// Iterating over the iterable using a for...of loop
for (const item of myIterable) {
  console.log(item);
}

/** Iterators */
// Custom iterator object
const myIterator = {
  data: ["apple", "banana", "cherry"],
  currentIndex: 0,
  next() {
    if (this.currentIndex < this.data.length) {
      return { value: this.data[this.currentIndex++], done: false };
    } else {
      return { done: true };
    }
  },
};

// Using the iterator object
const iterator = myIterator.next();
console.log(iterator.value); // Output: apple
console.log(iterator.done); // Output: false

console.log(myIterator.next().value); // Output: banana
console.log(myIterator.next().value); // Output: cherry
console.log(myIterator.next().done); // Output: true

//Generators
// Generator function
function* myGenerator() {
  yield "apple";
  yield "banana";
  yield "cherry";
}

// Using the generator function
const newIterator = myGenerator();

console.log(newIterator.next().value); // Output: apple
console.log(newIterator.next().value); // Output: banana
console.log(newIterator.next().value); // Output: cherry
console.log(newIterator.next().done); // Output: true

//Timeouts and Intervals
/** Timeouts */
console.log("Before timeout");

setTimeout(function () {
  console.log("Inside timeout");
}, 2000);

console.log("After timeout");
// Output
// Before timeout
// After timeout
// Inside timeout

/** Intervals */
// Interval example
let counter = 0;

function intervalFunc() {
  console.log("Interval: " + counter);
  counter++;

  if (counter > 5) {
    clearInterval(intervalId);
  }
}

console.log("Before interval");

const intervalId = setInterval(intervalFunc, 1000);

console.log("After interval");

// Before interval
// After interval
// Interval: 0
// Interval: 1
// Interval: 2
// Interval: 3
// Interval: 4
// Interval: 5

//Callbacks
// Example function with a callback
function doSomethingAsync(callback) {
  setTimeout(function () {
    // Simulating an asynchronous operation
    const result = "Operation completed";

    // Invoke the callback function with the result
    callback(result);
  }, 2000);
}

// Callback function
function handleResult(result) {
  console.log("Received result: " + result);
}

// Call the function and pass the callback
doSomethingAsync(handleResult);

//Callbacks Hell
// Callback hell example
asyncOperation1(function (result1) {
  asyncOperation2(result1, function (result2) {
    asyncOperation3(result2, function (result3) {
      asyncOperation4(result3, function (result4) {
        // Process result4
      });
    });
  });
});

// Promise-based example
asyncOperation1()
  .then(function (result1) {
    return asyncOperation2(result1);
  })
  .then(function (result2) {
    return asyncOperation3(result2);
  })
  .then(function (result3) {
    return asyncOperation4(result3);
  })
  .then(function (result4) {
    // Process result4
  })
  .catch(function (error) {
    // Handle errors
  });

//Promise
// Promise example
const asyncOperation = () => {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const randomNum = Math.random();

      if (randomNum < 0.5) {
        resolve("Operation succeeded");
      } else {
        reject("Operation failed");
      }
    }, 2000);
  });
};

// Using the Promise
asyncOperation()
  .then((result) => {
    console.log("Success: " + result);
  })
  .catch((error) => {
    console.log("Error: " + error);
  });

//Async & Await
// Async/await example
const asyncOperationNew = () => {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const randomNum = Math.random();

      if (randomNum < 0.5) {
        resolve("Operation succeeded");
      } else {
        reject("Operation failed");
      }
    }, 2000);
  });
};

// Using async/await
const performAsyncTask = async () => {
  try {
    const result = await asyncOperationNew();
    console.log("Success: " + result);
  } catch (error) {
    console.log("Error: " + error);
  }
};

performAsyncTask();

//Event Loop
//Code
console.log("Start");

setTimeout(function () {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(function () {
  console.log("Promise callback");
});

console.log("End");

// Output
// Start
// End
// Promise callback
// Timeout callback

//HOF

const firstOrderFunc = () => console.log("Hello, I am a First order function");
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);

//Pure Function

//Impure
let numberArray = [];
const impureAddNumber = (number) => numberArray.push(number);
//Pure
const pureAddNumber = (number) => (argNumberArray) =>
  argNumberArray.concat([number]);

//Display the results
console.log(impureAddNumber(6)); // returns 1
console.log(numberArray); // returns [6]
console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
console.log(numberArray); // returns [6]

//Unary Function

const unaryFunction = (a) => console.log(a + 10); // Add 10 to the given argument and display the value

//Hoisting

console.log(message); //output : undefined
var message = "The variable Has been hoisted";

//First Class Function

const handler = () => console.log("This is a click handler function");
document.addEventListener("click", handler);

//First Order Function

const firstOrder = () => console.log("I am a first order function!");

//Memoization

const memoizAddition = () => {
  let cache = {};
  return (value) => {
    if (value in cache) {
      console.log("Fetching from cache");
      return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
    } else {
      console.log("Calculating result");
      let result = value + 20;
      cache[value] = result;
      return result;
    }
  };
};
// returned function from memoizAddition
const addition = memoizAddition();
console.log(addition(20)); //output: 40 calculated
console.log(addition(20)); //output: 40 cached

//Promise Chaining

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 2
    return result * 3;
  })
  .then(function (result) {
    console.log(result); // 6
    return result * 4;
  });

//Promise.all

Promise.all([Promise1, Promise2, Promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(`Error in promises ${error}`));

//Promise.race

var promise1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});
var promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then(function (value) {
  console.log(value); // "two" // Both promises will resolve, but promise2 is faster
});

//Rest Parameter

function total(...args) {
  let sum = 0;
  for (let i of args) {
    sum += i;
  }
  return sum;
}
console.log(total(1, 2)); //3
console.log(total(1, 2, 3)); //6
console.log(total(1, 2, 3, 4)); //13
console.log(total(1, 2, 3, 4, 5)); //15

//Spread Operator

function calculateSum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(calculateSum(...numbers)); // 6

//WeakSet

var ws = new WeakSet();
var user = {};
ws.add(user);
ws.has(user); // true
ws.delete(user); // removes user from the set
ws.has(user); // false, user has been removed

//WeakMap

var ws = new WeakMap();
var user = {};
ws.set(user);
ws.has(user); // true
ws.delete(user); // removes user from the map
ws.has(user); // false, user has been removed

//Debouncing

function debounce(func, timeout = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
function fetchResults() {
  console.log("Fetching input suggestions");
}
const processChange = debounce(() => fetchResults());

//Throttling

const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
window.addEventListener("scroll", () => {
  throttle(handleScrollAnimation, 100);
});

//Call

var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?

//Apply

var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?

//Bind

var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);
inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?

//localStorage
// Save data to localStorage
localStorage.setItem("key", "value");

// Get saved data from localStorage
let data = localStorage.getItem("key");

// Remove saved data from localStorage
localStorage.removeItem("key");

// Remove all saved data from localStorage
localStorage.clear();

//sessionStorage
// Save data to sessionStorage
sessionStorage.setItem("key", "value");

// Get saved data from sessionStorage
let dataN = sessionStorage.getItem("key");

// Remove saved data from sessionStorage
sessionStorage.removeItem("key");

// Remove all saved data from sessionStorage
sessionStorage.clear();
