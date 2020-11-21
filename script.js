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
    var passLength = prompt("Please choose a password length between 8 and 128 characters.");
    if (passLength >= 8 && passLength <= 128) {
    alert("Perfect, please continue");
    // WHEN prompted for password criteria
    // THEN I select which criteria to include in the password
    lowerCase = confirm("Would you like to use any lower case letters?");
    upperCase = confirm("Would you like to use any upper case letters?");
    numericChars = confirm("Would you like to use any numbers?"); 
    specialChars = confirm("Would you like to use any special characeters? ")   
}
    else{
    (passLength > 7 && passlength < 129)
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
