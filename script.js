// Assignment Code
var generateBtn = document.querySelector("#generate");
// // // different variables for password
var lowerCase = ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
var upperCase = ("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
var numericChars = ("0","1","2","3","4","5","6","7","8","9");
var specialChars = ("!","@","#","$","%","^","&","*","(",")","-","_","=","+","~","`","{","[","}","]","|",";",":","<",">","?");

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// Write password to the #password input

function generatePassword(){
    var passLength = prompt("Please choose 8 to 128 characters to create your password.");

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page



// // // different variables for password
// var lowerCase = ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
// var upperCase = ("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
// var numericChars = ("0","1","2","3","4","5","6","7","8","9");
// var specialChars = ("!","@","#","$","%","^","&","*","(",")","-","_","=","+","~","`","{","[","}","]","|",";",":","<",">","?");

// // // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // GIVEN I need a new, secure password
// // WHEN I click the button to generate a password
// // THEN I am presented with a series of prompts for password criteria

// function generatePassword(){
//     prompt("Please choose a password length between 8 and 128.");

// }

// // Write password to the #password input
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");
//     passwordText.value = password;
// }

// // WHEN prompted for password criteria
// // THEN I select which criteria to include in the password



// // WHEN prompted for the length of the password
// // THEN I choose a length of at least 8 characters and no more than 128 characters

// // if (passLength >= 8 && passLength <= 128){
// //     alert("You have Chosen " + passLength)
// // }
// // WHEN prompted for character types to include in the password
// // THEN I choose lowercase, uppercase, numeric, and/or special characters

// // WHEN I answer each prompt
// // THEN my input should be validated and at least one character type should be selected
// // WHEN all prompts are answered

// // THEN a password is generated that matches the selected criteria

// // WHEN the password is generated
// // THEN the password is either displayed in an alert or written to the page


// var password = " ";
// var nextChar;

// var combinedArray = [];

// if (hasSpecialChars){
//     combinedArray.concat(specialChars);
// } 
// if (hasupperCase){
//     combinedArray.concat(upperCase);
// }
// for (var i=0; i < numChars-1; i++){
//     nextChar=Math.floor(Math.random)(....combinedArray));
//     password.concat(nextChar);
// }
// // // Write password to the #password input
// // function writePassword() {
// //   var password = generatePassword();
// //   var passwordText = document.querySelector("#password");
// //   passwordText.value = password;
// // }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
