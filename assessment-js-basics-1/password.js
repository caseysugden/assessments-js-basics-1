// Create a new file called password.js. Write a program that does the following:
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Welcome the user to the password validator tool
console.log("Welcome to the Aperture Science Laboratories Computer-Aided Enrichment Center password validator tool, human.");

// Prompt the user for a password to validate
// Check if the user’s password meets the following constraint:
// At least 10 characters long
// If the user’s password meets the constraint, show a success message to the user
// If the user’s password fails the constraint, show a failure message to the user
reader.question("Please enter your Aperture Science Enrichment Center password, human.", function(input){  	
  password = input;
  if ((password.length >= 10) && (password.includes('!')) && (password.includes('@')) && (password.includes('#'))) {
  console.log("Very good, human. Please proceed to the party and have some cake.");
    console.log(
`
             ,   ,   ,   ,             
           , |_,_|_,_|_,_| ,           
       _,-=|;  |,  |,  |,  |;=-_       
     .-_| , | , | , | , | , |  _-.     
     |:  -|:._|___|___|__.|:=-  :|     
     ||*:  :    .     .    :  |*||     
     || |  | *  |  *  |  * |  | ||     
 _.-=|:*|  |    |     |    |  |*:|=-._ 
-    ._:  | *  |  *  |  * |  :_.'    -
 =_      -=:.___:_____|___.: =-     _= 
    - . _ __ ___  ___  ___ __ _ . -    


`
)
} else {
    console.log("Your password was invalid, human. This will be dealt with promptly, human.");
}
  reader.close();
});
