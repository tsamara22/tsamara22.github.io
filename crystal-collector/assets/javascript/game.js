var computerRandom
var totalPlayerGuess;
var playerGuessArray = [];
var totalPlayerGuess = playerGuessArray
var sum = totalPlayerGuess


//Create a function that will pick a random number between 19 and 120
//Random number picked by computer between 19 and 120
function getComputerRandom(){
				


				// Store random value in computerRandom
                computerRandom = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
                
                console.log(computerRandom);
                //Document ready function to set value of element on load
               	$(document).ready(function(){
               	//Use selector to append the element that is stored in variable	
        $("#computer-random").append(computerRandom);
    });

        }				// initial number guessed by computer
                getComputerRandom();
        
                //Create function to get random number between 1 and 12
function getCrystalOneRandom(){
				// Store random value in crystalOneRandom
                crystalOneRandom = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
                console.log(crystalOneRandom);


                $("#crystal-1").on("click", function() {

                   playerGuessArray.push(crystalOneRandom);

                      //insert function
                   function sumOfTotalPlayerGuess(){
			var sum = 0;
            $.each(totalPlayerGuess,function(){sum+=parseFloat(this) || 0;});
            console.log(sum)  
            if (sum > computerRandom){ 
            //$("#win-lost").append("Too bad! You Lost.");
            	alert("Too Bad! You Lost Play Again");
            	function resetFunction() {
    			location.reload();
			}
			resetFunction()
            }

            if (sum === computerRandom) {
            //$("#win-lost").append("Great Job! You win");
				alert("You Won! Play Again");
				function resetFunction() {
    			location.reload();
			}
			resetFunction()            	
}
       }
 		sumOfTotalPlayerGuess();

                   // End Function
                 


                 //Add the contents of the array and save them in sum
                  
             for (var i = 0, sum = 0; i < playerGuessArray.length; sum += playerGuessArray[i++])
                   	console.log(sum);
                   //Put the total in id player-random
                   document.getElementById("player-random").innerHTML = sum;

                  
    });
            }

 //Call function
            getCrystalOneRandom()



                //Create function to get random number between 1 and 12
function getCrystalTwoRandom(){
				// Store random value in crystalTwoRandom
                crystalTwoRandom = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
                console.log(crystalTwoRandom);


                $("#crystal-2").on("click", function() {

                   playerGuessArray.push(crystalTwoRandom);

                      //insert function
                   function sumOfTotalPlayerGuess(){
			var sum = 0;
            $.each(totalPlayerGuess,function(){sum+=parseFloat(this) || 0;});
            console.log(sum)  
            if (sum > computerRandom){ 
            //$("#win-lost").append("Too bad! You Lost.");
            	alert("Too Bad! You Lost Play Again");
            	function resetFunction() {
    			location.reload();
			}
			resetFunction()
            }

            if (sum === computerRandom) {
            //$("#win-lost").append("Great Job! You win");
				alert("You Won! Play Again");
				function resetFunction() {
    			location.reload();
			}
			resetFunction()            	
}
       }
 		sumOfTotalPlayerGuess();

                   // End Function
                 


                 //Add the contents of the array and save them in sum  
                 sum = 0; 
             for (var i = 0, sum = 0; i < playerGuessArray.length; sum += playerGuessArray[i++])
                   	console.log(sum);
                   //Put the total in id player-random
                   document.getElementById("player-random").innerHTML = sum;
                   
                  
    });
            }

 //Call function
            getCrystalTwoRandom()

               //Create function to get random number between 1 and 12
function getCrystalThreeRandom(){
				// Store random value in crystalThreeRandom
                crystalThreeRandom = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
                console.log(crystalThreeRandom);


                $("#crystal-3").on("click", function() {

                   playerGuessArray.push(crystalThreeRandom);

                      //insert function
                   function sumOfTotalPlayerGuess(){
			var sum = 0;
            $.each(totalPlayerGuess,function(){sum+=parseFloat(this) || 0;});
            console.log(sum)  
            if (sum > computerRandom){ 
            //$("#win-lost").append("Too bad! You Lost.");
            	alert("Too Bad! You Lost Play Again");
            	function resetFunction() {
    			location.reload();
			}
			resetFunction()
            }

            if (sum === computerRandom) {
            //$("#win-lost").append("Great Job! You win");
				alert("You Won! Play Again");
				function resetFunction() {
    			location.reload();
			}
			resetFunction()            	
}
       }
 		sumOfTotalPlayerGuess();

                   // End Function
                 


                 //Add the contents of the array and save them in sum 
                 sum = 0;  
             for (var i = 0, sum = 0; i < playerGuessArray.length; sum += playerGuessArray[i++])
                   	console.log(sum);
                   //Put the total in id player-random
                   document.getElementById("player-random").innerHTML = sum;

                  
    });
            }

 //Call function
            getCrystalThreeRandom()

              //Create function to get random number between 1 and 12
function getCrystalFourRandom(){
				// Store random value in crystalFourRandom
                crystalFourRandom = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
                console.log(crystalFourRandom);


                $("#crystal-4").on("click", function() {

                   playerGuessArray.push(crystalFourRandom);

                   //insert function
                   function sumOfTotalPlayerGuess(){
			var sum = 0;
            $.each(totalPlayerGuess,function(){sum+=parseFloat(this) || 0;});
            console.log(sum)  
           
            if (sum > computerRandom){ 
            
            	$("#win-lost").append("Too bad! You Lost.");
            	alert("Too Bad! You Lost Play Again");
            	


            	playerGuessArray = [];
				function resetFunction() {
    			location.reload();
			}
			resetFunction()  
            } else

            if (sum === computerRandom) {
				
				$("#win-lost").append("You Won! Play Again");
				
				playerGuessArray = [];
				function resetFunction() {
    			location.reload();
			}
			resetFunction()  
			
			
			          	
			}
			
           
       }
 		sumOfTotalPlayerGuess();

                   // End Function
                 //Add the contents of the array and save them in sum  
                 sum = 0; 
             for (var i = 0, sum = 0; i < playerGuessArray.length; sum += playerGuessArray[i++])
                   	console.log(sum);
                   //Put the total in id player-random
                   document.getElementById("player-random").innerHTML = sum;
                
    });
            }
            getCrystalFourRandom() 


//<--Computer number is displayed on screen
//<--Crystals
//When page loads, crytstals will each generate a random number
//  Each crystal will generate a random number between 1 and 12
//	Store that number in a variable.
//	When clicked, send that number to total score variable. If clicked again, add another number to the player score and add together variable




//<--The players score
//Start at 0
//Total score is generated by adding each number that is clicked on the crystals
//If total score excedes the computer score, do the following:

//If statement to compare the computer and player score then triger action based on result.

//<--Scoreboard
//Display "You lost!"
//Add 1 point to Losses lable.
//If the players score matches the computer generated number then display "You won!" and add 1 point to Wins lable.

//Game ends when there is a winner and then it will start over keeping the existing score wins and losses.

