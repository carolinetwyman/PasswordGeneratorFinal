// Assignment Code
var generateBtn = document.querySelector("#generate");
var LOWERCASE = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UPPERCASE = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var SYMBOLS = ["!", "@", "_", "#", "$", "%", "^", "&", "*", "(", ")", "~", "<", ">", "?"];
var characterAmountRange = document.querySelector("#characterAmountRange");
var characterAmountNumber = document.getElementById('characterAmountNumber')
var includeUppercaseElement = document.getElementById('includeUppercase')
var includeNumbersElement = document.getElementById('includeNumbers')
var includeSymbolsElement = document.getElementById('includeSymbols')
var form = document.getElementById('form')
// var characterLength = 9


characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

generateBtn.addEventListener("click", e => {
  e.preventDefault()
  var characterAmount = characterAmountNumber.value
  var includeUppercase = includeUppercaseElement.checked
  var includeNumbers = includeNumbersElement.checked
  var includeSymbols = includeSymbolsElement.checked
  var password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    //console.log(NUMBERS)
    var charCodes = LOWERCASE
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE)
    if (includeNumbers) charCodes = charCodes.concat(NUMBERS)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOLS)
    var passwordText = document.getElementById("password");
    var password = ""
    for (var i = 0; i < characterAmount; i++) {
    //  console.log(i)
      var randomIndex = Math.floor(Math.random() * charCodes.length)
      password += charCodes[randomIndex]
    }
    passwordText.textContent = password
  }

function syncCharacterAmount(e) {
  var value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}






















