// Assignment Code
var generateBtn = document.querySelector("#generate");
var LOWERCASE = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UPPERCASE = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var SYMBOLS = ["!", "@", "_", "#", "$", "%", "^", "&", "*", "(", ")", "~", "<", ">", "?"];
var pwdLength = document.querySelector("#pwd-length");
var characterLength = 9

//function to store selected password length
function storeLength() {
  console.log("pwd-length");
}

// Write password to the #password input
function writePassword() {
  var charPool = LOWERCASE.concat(NUMBERS)
  var passwordText = document.getElementById("password");
  var password = ""
  for (var i = 0; i < characterLength; i++) {
  //  console.log(i)
    var randomIndex = Math.floor(Math.random() * charPool.length)
    password += charPool[randomIndex]
  }
  passwordText.textContent = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

