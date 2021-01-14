// Create Arrays

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "", "?", "/", "~"];

var passPool = [];

var finalPassword = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");
//consol.logged generateBtn
console.log(generateBtn);

//defined function for generating password.
function generatePassword() {
  //Prompt to select number of characters
  var numberOfCharacters = prompt(
    "How many characters would you like to include? Please choose a number between 8 and 125"
  );
  //convert variable to number output
  numberOfCharacters = Number(numberOfCharacters);
  // define function for when number of characters falls within range and when it does not
  if (numberOfCharacters >= 8 && numberOfCharacters <= 125) {
    //log input to consol
    console.log(numberOfCharacters);
    //confirm if user would like to use lowercase
    var lowerCaseLetters = confirm(
      "Would you like to include lowercase letters in your password?"
    );
    //log true or false for lowercase letters
    console.log(lowerCaseLetters);
    // confirm is user would like to use uppercase letters
    var upperCaseLetters = confirm(
      "Would you like to include uppercase letters in your password?"
    );
    //log true or false for uppercase letters
    console.log(upperCaseLetters);
    // confirm is user would like to use numbers
    var selectNumbers = confirm(
      "Would you like to include numbers in your password?"
    );
    //log true or false for numbers
    console.log(selectNumbers);
    // confirm is user would like to use symbols
    var selectSymbols = confirm(
      "Would you like to include numbers in your password?"
    );
    // log true or false for symbols
    console.log(selectSymbols);
    // if statements add character arrays to password pool if true
    if (upperCaseLetters) {
      passPool = passPool.concat(upperCase);
      console.log(passPool);
    }
    if (lowerCaseLetters) {
      passPool = passPool.concat(lowerCase);
      console.log(passPool);
    }
    if (selectNumbers) {
      passPool = passPool.concat(numbers);
      console.log(passPool);
    }
    if (selectSymbols) {
      passPool = passPool.concat(symbols);
      console.log(passPool);
    }
    //Make for loop
    for (i = 0; i < numberOfCharacters; i++) {
      //use math at random method to select character
      randomCharacter = passPool[Math.floor(Math.random() * passPool.length)];
      console.log(randomCharacter);
      //add character to finalPassword with push method
      finalPassword.push(randomCharacter);
      console.log(finalPassword);
    }
  }
  // else statement to prompt the user to choose a number in range if they input one out of range
  else {
    alert("Please input a number between 8 and 125");
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");
//consol.logged generateBtn
console.log(generateBtn);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
