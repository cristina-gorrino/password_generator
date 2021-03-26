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
  // Password components
  var specialChar = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  var nums = [0,1,2,3,4,5,6,7,8,9];
  var letters = "abcdefghijklmnopqrstuvwxyz";

  // Ask user for required password components
  // lower, upper, special, numeric characters
  // must have at least one of these types
  
  var hasValidComponent = false;

  while (hasValidComponent === false){
    var hasLowercase = confirm("Should this password contain lowercase letters? OK for yes, Cancel for no.");
    var hasUppercase = confirm("Should this password contain uppercase letters? OK for yes, Cancel for no.");
    var hasNumeric = confirm("Should this password contain numeric characters? OK for yes, Cancel for no.");
    var hasSpecial = confirm("Should this password contain special characters? OK for yes, Cancel for no.");
    
    if (hasLowercase || hasUppercase || hasNumeric || hasSpecial) {
      hasValidComponent = true;
    }
    
  }
  
  
}
 


