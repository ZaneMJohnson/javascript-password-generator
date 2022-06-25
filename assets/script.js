var numberCharacters = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];
var specialCharacters = [
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"
];
var lowercaseCharacters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
var uppercaseCharacters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

var passwordLength = window.prompt("How many characters would you like your password to contain?")

if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be at least 8 characters");
}

var isNumberCharacters = window.confirm("Do you want any numbers in your password?")
var isSpecialCharacters = window.confirm("Do you want any special characters in your password?")
var isLowercaseCharacters = window.confirm("Do you want any lowercase letters in your password?")
var isUppercaseCharacters = window.confirm("Do you want any uppercase letters in your password?")

if (!isNumberCharacters && !isSpecialCharacters && !isLowercaseCharacters && !isUppercaseCharacters) {
    window.alert("Select at least one character!")
}

var myCharacters = () => {
    var characterArr = [];

    if (isNumberCharacters) {
        characterArr.push(...numberCharacters);
    }
    if (isSpecialCharacters) {
        characterArr.push(...specialCharacters);
    }
    if (isLowercaseCharacters) {
        characterArr.push(...lowercaseCharacters)
    }
    if (isUppercaseCharacters) {
        characterArr.push(...uppercaseCharacters)
    }

    return characterArr
}

var generatePassword = len => {
    var myPassword = [];
    var characters = myCharacters()

    for (let i = 0; i < len; i++) {
        var randomNumberBetween = Math.floor(Math.random() * characters.length);
        myPassword.push(characters[randomNumberBetween]);
    }

    return myPassword.join("")
}

var generateBtn = document.querySelector("#generate");
  
function writePassword() {
   var password = generatePassword(passwordLength);
   var passwordText = document.querySelector("#password");
 
   passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);