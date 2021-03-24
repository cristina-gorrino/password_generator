// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// min 8 char, max 128 char
var length

// lower, upper, special, numeric characters
// must have at least one of these types
var hasLowercase
var hasUppercase
var hasSpecial
var hasNumeric