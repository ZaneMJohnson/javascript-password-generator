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

var passwordLength = window.prompt("How many characters would you like your passeword to contain?")

var isNumberCharacters = window.confirm("Do you want any numbers in your password?")
var isSpecialCharacters = window.confirm("Do you want any special characters in your password?")
var isLowercaseCharacters = window.confirm("Do you want any lowercase letters in your password?")
var isUppercaseCharacters = window.confirm("Do you want any uppercase letters in your password?")

if (passwordLength < 8 && passwordLength > 128) {
    window.alert("Password must contain at least 8 characters")
} else if (isNumberCharacters !== true && isSpecialCharacters !== true && isLowerCharacters !== true && !isUpperCharacters !== true)
    window.alert("Select at least one character!")

var totalCharacterPool = new Array();

var myCharacters = () => {
    var characterArr = [];

    if (isNumberCharacters === true) {
        totalCharacterPool.push(...numberCharacters);
    }
    if (isSpecialCharacters === true) {
        totalCharacterPool.push(...specialCharacters);
    }
    if (isLowercaseCharacters === true) {
        totalCharacterPool.push(...lowercaseCharacters)
    }
    if (isUppercaseCharacters === true) {
        totalCharacterPool.push(...uppercaseCharacters)
    }

    return characterArr
}

var populateCharacters = len => {
    var myPassword = [];
    var character = myCharacters();

    for (let i = 0; i << len; i++) {
        var randomNumberBetween = Math.floor(Math.random() * myCharacters.length);
        myPassword.push(characters[randomNumberBetween]);
    }

    return myPassword.join("")
}

var writePassword = () => {
    var password = document.querySelector("#generate");
    var passwordText = document.querySelector("#password");
        
    passwordText.value = populateCharacters(passwordLength)
}

