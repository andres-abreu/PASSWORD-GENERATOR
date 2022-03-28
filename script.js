//Function to generate randon numbers

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
  };
  
  //Generate password function
  
  function generatePassword () {
    
    
    var characters = {
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbers: "123456789",
      specialChar: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
    }
  
    //variable for the selected characters
    
    var charOnPass = []
    
    //Variables
    var passwordLengthOptions = "";
    var smallercaseOption = "";
    var capitolcaseOption = "";
    var numberOption = "";
    var specialCharOption = "";
    
    // Prompt for the lenght of the password
    
    while (true) {
      passwordLengthOptions = window.prompt("How many characters does this password have? (Type a number between 8 and 128)")
      passwordLengthOptions = parseInt(passwordLengthOptions)
      console.log(typeof(passwordLengthOptions))
      if (passwordLengthOptions > 7 && passwordLengthOptions < 129) {
        passwordLength = passwordLengthOptions;
        break
      } else {
        alert("Please enter a number between 8 thru 128")
      }
    };
    // Prompts for character types
    
    smallercaseOption = window.prompt("Do you want to include lowercase letters? Type 'y' for (yes) or 'n' for (no) y/n")
    capitolcaseOption = window.prompt("Do you want to include uppercase letters? Type 'y' for (yes) or 'n' for (no) y/n")
    numberOption = window.prompt("Do you want to include numerical values? Type 'y' for (yes) or 'n' for (no) y/n")
    specialCharOption = window.prompt("Do you want to include special character? Type 'y' for (yes) or 'n' for (no) y/n")
  
  
    // How many character will the pasword have
    var passwordLength = passwordLengthOptions 
  
    // Selected characters types
    if (smallercaseOption === "y") {
      charOnPass.push(characters.lowercase)
    }
    if (capitolcaseOption === "y") {
      charOnPass.push(characters.uppercase)
    }
    if (numberOption === "y") {
      charOnPass.push(characters.numbers)
    }
    if (specialCharOption === "y") {
      charOnPass.push(characters.specialChar)
    }
  
    password = ""
    while (password.length != passwordLength) {
      //random index on char on pass
      charOnPassIndex = randomNumber(0,charOnPass.length-1)
      //random index on charOnPass item
      let value = charOnPass[charOnPassIndex][randomNumber(0,charOnPass[charOnPassIndex].length - 1)];
      password += value;
    }
    return password
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);