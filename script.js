// Assignment Code
var generateBtn = document.querySelector("#generate");
// // // different variables for password
var lowerCaseAr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numericCharsArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharsArr = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "~",
  "{",
  "[",
  "}",
  "]",
  "|",
  ";",
  ":",
  "<",
  ">",
  "?",
];

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// Write password to the #password input

function generatePassword() {
  var passLength = prompt(
    "Please choose a password length between 8 and 128 characters."
  );

  if (passLength >= 8 && passLength <= 128) {
    alert("Perfect, please continue");
    // WHEN prompted for password criteria
    // THEN I select which criteria to include in the password
    var lowerCase = confirm("Would you like to use any lower case letters?");
    var upperCase = confirm("Would you like to use any upper case letters?");
    var numericChars = confirm("Would you like to use any numbers?");
    var specialChars = confirm(
      "Would you like to use any special characters? "
    );

    var password = "";
    var combinedArray = [];

    // if/else statements//
    if (lowerCase) {
      combinedArray.push(lowerCaseAr);
    }
    if (upperCase) {
      combinedArray.push(upperCaseArr);
    }
    if (numericChars) {
      combinedArray.push(numericCharsArr);
    }
    if (specialChars) {
      combinedArray.push(specialCharsArr);
    }
    // WHEN all prompts are answered
    // THEN a password is generated that matches the selected criteria
    for (i = 0; i < passLength; i++) {
      nextArr = combinedArray[Math.floor(Math.random() * combinedArray.length)];
      password += nextArr[Math.floor(Math.random() * nextArr.length)];
    }
    return password;
  } else {
    alert("Thats not a valid length, try again.");
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
