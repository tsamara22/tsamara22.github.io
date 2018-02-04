
            // Create score titles variables
//wins, losses, guesses left, already guessed, computer guess

// Store the value of wins in "winns" variable and set value to 0" 
// Store the value of guesses left in "guessesLeft" variable and set value to 10" 
// Store the value of losses in "losses" variable and set value to 0" 
//create variable that keep count of letters that have already been guessed and assign value as array
//create variable that keep count of computer guesses and assign value as null



var wins = document.getElementById("wins").innerHTML = 0;
var guessesLeft = document.getElementById("guessesLeft").innerHTML = 10;
var losses = document.getElementById("losses").innerHTML = 0;
var alreadyGuessed = [];
var computerGuess = null;

//Create function reset() that will pick random letters by the computer*
//In the function, create a variable to hold the array and create an array, call it computerPossGuess
//Use Math.floor(Math.random()) meathod to get random letter
//Consol.log computerGuess
//Run function 

function reset(){
                var computerPossGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "u", "x", "y", "z"];
                computerGuess = computerPossGuess[Math.floor(Math.random() * computerPossGuess.length)];
                console.log(computerGuess);
                }

            // initial letter guessed by computer
            reset();


// when a key is pressed, an 'event' will be triggered
            document.onkeyup = function (event){
                // When user hits a key that is the first guess
                var userGuess = event.key;
                 // console.log the user guess to make sure it is working
                    //  console.log(userGuess);               
                // if else statement to check if the logic works or not
                if(computerGuess == userGuess){
                    // if the computer and user guesses are the same then console.log a win
                        // console.log("win");
                    // Now try adding +1 to the wins column
                    document.getElementById("wins").textContent = wins+=1;
                    // reset the guesses left if the letter is guessed right
                    document.getElementById("guessesLeft").textContent = guessesLeft = 10; 
                     // reset the previously guessed letters to nothing in the array buth visually in HTML and actually in the array data
                    document.getElementById("alreadyGuessed").innerHTML = [];
                    for (i = alreadyGuessed.length; i > 0; i--) {
                        alreadyGuessed.pop();
                    }
                    // generate another random number by the computer
                    reset();

                } else if (guessesLeft == 0){
                    // Add 1 to losses if guesses left hits 0
                    document.getElementById("losses").textContent = losses += 1; 
                     // reset the guesses left if the letter is guessed wrong 10 times
                    document.getElementById("guessesLeft").textContent = guessesLeft = 10; 
                    // generate another random letter by the computer (plus clear the already guessed)
                    reset();
                    // reset the previously guessed letters to nothing in the array buth visually in HTML and actually in the array data
                    document.getElementById("alreadyGuessed").innerHTML = [];
                    for(i = alreadyGuessed.length; i > 0; i--){
                        alreadyGuessed.pop();
                    }

                } else if(computerGuess !== userGuess){
                    // Now subtract one from 10 if guessed wrong
                    document.getElementById("guessesLeft").textContent = guessesLeft-=1; 
                    // add the letter to the array for already guessed
                    alreadyGuessed.push(userGuess);
                        // This prints the array after the addition
                    for(i = 0;i < alreadyGuessed.length; i++){
                        // console.log(alreadyGuessed);
                        document.getElementById("alreadyGuessed").innerHTML = alreadyGuessed;
                    }
                } 
            
            }
