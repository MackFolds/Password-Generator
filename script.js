// Array of Characters
var caseArray=[];
var lowerCaseRequired=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseRequired=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
var numericCharactersRequired=["0","1","2","3","4","5","6","7","8","9"];
var specialCharactersRequired=["!","@","#","$","%","^","&"];

// function for generating the password
// function for generating the password
function generatePassword() {

  var lowerCaseCheck = window.confirm('Are you reqired to have any Lowercase Characters?');
  var upperCaseCheck = window.confirm('Are you reqired to have any Uppercase Characters?');
  var specialCharactersCheck = window.confirm('Are you reqired to have any Special Characters?');
  var numericCharactersCheck = window.confirm('Are you reqired to have any Numeric Characters?');

  while (lowerCaseCheck == false && upperCaseCheck == false && specialCharactersCheck == false && numericCharactersCheck == false) {
      window.alert("Select a minium of one option.");
      var lowerCaseCheck = window.confirm('Are you reqired to have any Lowercase Characters?');
      var upperCaseCheck = window.confirm('Are you reqired to have any Uppercase Characters?');
      var specialCharactersCheck = window.confirm('Are you reqired to have any Special Characters?');
      var numericCharactersCheck = window.confirm('Are you reqired to have any Numeric Characters?');
  }

  // loop to check for password length. 

  var passwordLength = parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
  while (passwordLength < 8 || passwordLength > 128 || typeof (passwordLength) != "number" || passwordLength === null) {
      alert("Please choose a number that is more than 8 and less than 128 characters");
      passwordLength = parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
  }
  console.log(passwordLength);


  if (lowerCaseCheck == true) {
      caseArray.push(...lowerCaseRequired);
  }
  if (upperCaseCheck == true) {
      caseArray.push(...upperCaseRequired)
  }
  if (numericCharactersCheck == true) {
      caseArray.push(...numericCharactersRequired)
  }
  if (specialCharactersCheck == true) {
      caseArray.push(...specialCharactersRequired)
  }


  let finalPassword = [];
  //// a loop for the length of the password
  console.log("case array: ", caseArray);
  for (var i = 0; i < passwordLength; i++) {

      var randIndex = Math.floor(Math.random() * caseArray.length); //gets random index out of caseArray.length
      var randElement = caseArray[randIndex]; //gets the character with that index from caseArray
      finalPassword.push(randElement)

      // var randomCharArrayNum;
      // var selectedCharArray;
      // var randomCharNum;
      // var randomChar;
      // var passwordGen = "";

      // randomCharArrayNum = parseInt(Math.floor(Math.random() * caseArray.length));

      // selectedCharArray = caseArray[randomCharArrayNum];
      // console.log("The array has " + caseArray.length + " entries");
      // console.log(randomCharArrayNum);

      // randomCharNum = Math.floor(Math.random() * selectedCharArray.length);
      // console.log("The selected Array is the " + selectedCharArray);
      // console.log("The selected random index is " + randomCharNum);

      // randomChar = selectedCharArray[randomCharNum];
      // console.log(randomChar);
      // console.log("Your random character array num is " + randomCharArrayNum + " and your random character number is " + randomCharNum);

      // passwordGen += randomChar;

  }
  return finalPassword.join('');
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password)
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
