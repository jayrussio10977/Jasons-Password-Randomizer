
var generateBtn = document.querySelector("#generate");
var passwordLengthprompt = window.prompt("How long would you like your password to be?")
var confirmLowercase = window.confirm("Would you like lower case values?")
var confirmUppercase = window.confirm("Would you like upper case values?")
var confirmNumbers= window.confirm("Would you like to include numbers?")
var confirmSpecial = window.confirm("Would you like to include special characters?")

var possibleChars =[]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var possibleNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ]
var specialChars = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "]", "^", "_", "`", "{", "}", "|", "`" ]


function getRandomindex(arr=[]) {
  console.log("Getting random element from an array")
  var randomIndex = arr[Math.floor (Math.random() * arr.length)]
  return randomIndex
}

function generatePassword() {
  var result = []
  var parsedPasswordlength = Number.parseInt(passwordLengthprompt)
  console.log(typeof parsedPasswordlength)
  if (parsedPasswordlength< 8 || parsedPasswordlength> 128) {
  window.alert("Password is too long or too short. Please try again.")
  return null
}

if (confirmLowercase) {
  console.log("Has lower case", confirmLowercase)
  possibleChars = possibleChars.concat(lowerCase)
  console.log(possibleChars) 
}

if (confirmUppercase) {
  console.log("Has upper case", confirmUppercase)
  possibleChars = possibleChars.concat(upperCase)
  console.log(possibleChars) 
}

if (confirmNumbers) {
  console.log("Has numbers", confirmNumbers)
  possibleChars = possibleChars.concat(possibleNumbers)
  console.log(possibleChars) 
}

if (confirmSpecial) {
  console.log("Has special characters", confirmSpecial)
  possibleChars = possibleChars.concat(specialChars)
  console.log(possibleChars) 
}

if (possibleChars.length == 0){
window.alert ("You have not selected any characters")
}
for (let i = 0; i < parsedPasswordlength; i++) {
  result.push(getRandomindex(possibleChars))
}

var passwordString = result.join("")
return passwordString
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
