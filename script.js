// Assignment Code
var generateBtn = document.querySelector("#generate");
var hasSpecialChars = confrim("should the passord include special characters?");
var numChars = prompt("Minimumcharacters?");
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericChars = ["0","1","2","3","4","5","6","7","8","9"];
var specialChars = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","~","`","{","[","}","]","|",";",":","<",">","?"];

var password ="";
var nextChar;

var combinedArray = [];

if (hasSpecialChars){
    combinedArray.concat(specialChars);
} 
if (hasupperCase){
    combinedArray.concat(upperCase);
}
for (var 1=0; i <numChars-1; i++){
    nextChar=Math.floor(Math.random)(....combinedArray));
    password.concat(nextChar);
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
