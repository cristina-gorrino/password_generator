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

function generatePassword() {
  // Ask user for password length, then validate 
  // min 8 char, max 128 char
  var passwordLength = prompt("Enter the password length. At least 8 characters and no more than 128.");
  var hasValidLength = false;

  while (hasValidLength === false){
    if (passwordLength >= 8 && passwordLength <= 128) {
      console.log("next question"); // REMOVE
      hasValidLength = true;
    } else {
      passwordLength = prompt("The password length must be least 8 characters and no more than 128. Please enter a number");
    }
  }
  
  var specialChar = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  var nums = [0,1,2,3,4,5,6,7,8,9];
  var letters = "abcdefghijklmnopqrstuvwxyz";

  console.log(specialChar);
}
 


// lower, upper, special, numeric characters
// must have at least one of these types
var hasLowercase
var hasUppercase
var hasSpecial
var hasNumeric