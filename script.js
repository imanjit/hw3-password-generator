var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("")
var numbers = "0123456789".split("")
var specialChars = "!@#$%^&*()_-=+{[]}\\|:;'\"<>,.?/".split("")

var generateBtn = document.querySelector("#generate");

function writePassword() {
    var characters = [];
    var result = "";
    var length = prompt("How many characters would you like your password to be?");
    if (length < 8 || length > 128) {
        alert("Please choose a password between 8 and 128 characters.");
    }
    else {
        if (confirm("Include uppercase?")) {
            Array.prototype.push.apply(characters, uppercase);
        }
        if (confirm("Include lowercase?")) {
            Array.prototype.push.apply(characters, lowercase);
        }
        if (confirm("Include numbers?")) {
            Array.prototype.push.apply(characters, numbers);
        }
        if (confirm("Include special characters?")) {
            Array.prototype.push.apply(characters, specialChars);
        }
        else {
            for(var i = 0; i < length; i++) {
                var random = Math.floor(Math.random() * characters.length);
                result += characters[random];
            }
        }
        document.querySelector("#password").textContent = result;
    }
};
generateBtn.addEventListener("click", writePassword);