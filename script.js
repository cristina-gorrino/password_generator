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
      hasValidLength = true;
    } else {
      passwordLength = prompt("The password length must be least 8 characters and no more than 128. Please enter a number");
    }
  }
  // Password components
  var specialChar = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  var nums = [0,1,2,3,4,5,6,7,8,9];
  var upLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
  var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

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
    } else {
      alert("The password must contain at least one of these character types. Please choose again.");
      var hasLowercase = confirm("Should this password contain lowercase letters? OK for yes, Cancel for no.");
      if (hasLowercase){
        hasValidComponent = true;
      }
      var hasUppercase = confirm("Should this password contain uppercase letters? OK for yes, Cancel for no.");
      if (hasUppercase){
        hasValidComponent = true;
      }
      var hasNumeric = confirm("Should this password contain numeric characters? OK for yes, Cancel for no.");
      if (hasNumeric){
        hasValidComponent = true;
      }
      var hasSpecial = confirm("Should this password contain special characters? OK for yes, Cancel for no.");
      if (hasSpecial){
        hasValidComponent = true;
      }
    }

    // Building Password
    var chooseFromArray = [];
    var passwordArray = [];
    
    // Create an array with all the required characters to choose from
    if (hasLowercase) {
      chooseFromArray = chooseFromArray.concat(lowLetters);
    } 
    if (hasUppercase) {
      chooseFromArray = chooseFromArray.concat(upLetters);
    } 
    if (hasNumeric) {
      chooseFromArray = chooseFromArray.concat(nums);
    } 
    if (hasSpecial) {
      chooseFromArray = chooseFromArray.concat(specialChar);
    }

    var hasValidResult = false;
    while (hasValidResult === false) {
    // Choose characters from the combined array untill you fill the passwordArray to the required length
      while (passwordArray.length < passwordLength) {
        // choose a random number within the chooseFromArray, take the element at that index and add it to passwordArray
        var i = Math.floor(Math.random() * Math.floor(chooseFromArray.length));
        var newArr = passwordArray.push(chooseFromArray[i]);
      }
      // Check for a valid result that includes at least one character of each required component
      var validatorArray = []
      if (hasLowercase) {
        var found = passwordArray.some(r=> lowLetters.indexOf(r) >= 0);
        var tempArray = validatorArray.push(found);
      }
      if (hasUppercase) {
        var found2 = passwordArray.some(r=> upLetters.indexOf(r) >= 0);
        var tempArray = validatorArray.push(found2);
      }
      if (hasNumeric) {
        var found3 = passwordArray.some(r=> nums.indexOf(r) >= 0);
        var tempArray = validatorArray.push(found3);
      }
      if (hasSpecial) {
        var found4 = passwordArray.some(r=> specialChar.indexOf(r) >= 0);
        var tempArray = validatorArray.push(found4);
      }
      // Check that we found at least one element from each required category
      hasValidResult = validatorArray.every( e  => e === true);
    }

   var passwordFinal = passwordArray.join('');
    console.log(`passwordFinal: ${passwordFinal}`);
    return passwordFinal;

  }
  
  
}
 


