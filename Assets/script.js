// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberChars = "1234567890"
var specialChars = "!@#$%^&*()_+-={}[]|\:<>?,./"
var progressPassword = ""

function generatePassword() {
   var finalPassword = ""
    var passwordLength =  parseInt(prompt("How many characters do you want your password to have?"));
    if (passwordLength <8 || passwordLength > 128) {
        alert("Please input a value between 8 and 128 :-) Thanks");
    }
    if (passwordLength >= 8 && passwordLength <= 128) {
        var includeLower = confirm("Would you like to use lowercase characters?");
   
        var includeUpper = confirm("Would you like to use uppercase characteres?");
   
        var includeSpecial = confirm("Would you like to include special characters?");

        var includeNumbers = confirm("Would you like to include numbers?");
        if (includeLower) {
            progressPassword = progressPassword + lowercaseChars;
            console.log(progressPassword); 
        }
        if (includeUpper) {
            progressPassword = progressPassword + uppercaseChars;
            console.log(progressPassword); 
        }
        if (includeSpecial) {
            progressPassword = progressPassword + specialChars;
            console.log(progressPassword); 
        }
        if (includeNumbers) {
            progressPassword = progressPassword + numberChars;
            console.log(progressPassword); 
        }
        for (var i=0; i<passwordLength; i++) {
            finalPassword = finalPassword + progressPassword[Math.floor(Math.random() * passwordLength)];
        }
   
    } 
return finalPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
