// Q1
var myName = "Adesh";

// Q2
let num1 = 39;
console.log(typeof num1);

let str1 = "Adesh";
console.log(typeof str1);

let bool1 = true;
console.log(typeof bool1);

// Q3

var input = "Hello, Good Morning!";

function reverseStr(inputstr) {
  return inputstr.split("").reverse().join("");
}

var reverseString = reverseStr(input);
console.log(reverseString);

// Q4
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

var userInput = prompt("Enter a number:");
var number = parseInt(userInput);

if (number >= 0) {
  var result = checkEvenOrOdd(number);
  console.log("The number " + number + " is " + result + ".");
} else {
  console.log("Invalid input. Please enter a valid number.");
}

// Q5
var fruits = ["Apple", "Banana", "Orange"];

//  Q6
for (var i = 1; i <= 10; i++) {
  console.log(i);
}
// Q7
function calculateArea(length, width) {
  var area = length * width;
  return area;
}

var length = 5;
var width = 10;
var rectangleArea = calculateArea(length, width);
console.log("The area of the rectangle is: " + rectangleArea);
// Q8
var person = {
  name: "Adesh Jadhav",
  age: 21,
  city: "Mumbai",
};
// Q9
// The addEventListener() is an inbuilt function in JavaScript which takes the event to listen for, and a second argument to be called whenever the described event gets fired
// in the below code we have call the alert function when the button is clicked that is it wait for the event to occur and then calls the function to execute
var button = document.getElementById("myButton");
button.addEventListener("click", function () {
  alert("Button was clicked!");
});
// Q10
var button = document.getElementById("changeColorButton");
function changeBackgroundColor() {
  var Color1 = "rgb(251, 154, 60)";
  document.body.style.backgroundColor = Color1;
}
button.addEventListener("click", changeBackgroundColor);
// Q11
// Global Scope: Variables and functions declared in the global scope are accessible from anywhere in your JavaScript code.
// Variables and functions declared within a function or code block have local scope, meaning they are only accessible within that specific function or block.
// This variable is in global scope
var globalVar = "I'm a global variable";

function greet() {
  console.log(globalVar);
}
greet();

function greet() {
  var localVar = "I'm a local variable";
  console.log(localVar);
}
greet();
// Q12
var myArray = [1, 2, 3, 4, 5];
myArray.push(6);
myArray.shift();
console.log(myArray);
// Q13
function sumArray(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

var myArray = [1, 2, 3, 4, 5];
var result = sumArray(myArray);
console.log("The sum of the array is: " + result);
// Q14
// substring(start, end): The substring() method extracts a substring from a string, starting from the start index and ending before the end index
var str = "Hello, World!";
var result = str.substring(0, 5);
console.log(result);

// substr(start, length): The substr() method extracts a substring from a string starting at the start index and continuing for a specified length of characters.
var str = "Hello, World!";
var result = str.substr(7, 5);
console.log(result);

// slice(start, end): The slice() method extracts a portion of a string from the start index to the end index
var str = "Hello, World!";
var result = str.slice(0, 5);
console.log(result);
// Q15
function removeDuplicates(inputArray) {
  var uniqueArray = [];

  for (var i = 0; i < inputArray.length; i++) {
    if (uniqueArray.indexOf(inputArray[i]) === -1) {
      uniqueArray.push(inputArray[i]);
    }
  }
  return uniqueArray;
}

var numbers = [1, 2, 2, 3, 4, 4, 5];
var uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);
// Q16
function concatenateStrings(string1, string2) {
  return string1 + string2;
}
var str2 = "Good, ";
var str3 = "Evening";
var result = concatenateStrings(str2, str3);
console.log(result);
// Q17
var fruits = ["Banana", "Apple", "Chikoo", "Date"];
fruits.sort();
console.log(fruits);
// Q18
function containsSubstring(mainString, substring) {
  return mainString.includes(substring);
}
var str2 = "Hello, world!";
var str3 = "world";
var result = containsSubstring(str2, str3);
console.log(result);
// Q19
function filterOddNumbers(numbers) {
  return numbers.filter(function (number) {
    return number % 2 !== 0;
  });
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var oddNumbers = filterOddNumbers(numbers);
console.log(oddNumbers);
// Q20
var stringNumber = "42";
var number = parseInt(stringNumber);
console.log(number);
// Q21
function joinWords(words) {
  return words.join(" ");
}
var wordArray = ["Hello", "world", "this", "is", "a", "sentence"];
var sentence = joinWords(wordArray);
console.log(sentence);
// Q22
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
console.log(isValidEmail("user@example.com"));
console.log(isValidEmail("invalid-email"));

