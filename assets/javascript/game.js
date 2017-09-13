
//GLOBAL VARIABLES 
var countryArray = ["chad", "brunei", "canada", "sri lanka"] 
var computerRandomSelection = countryArray[Math.floor(Math.random() *
countryArray.length)] 
console.log(computerRandomSelection); 
var wrongLetter = []; 
var answerArray = []; 
var alphabet =["a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z", " "];
var userInputArray = [];
var attemptCountdown = 7; 
var winCount = 0;



function reset (){
    attemptCountdown = 7;

    document.getElementById("attemptCountdown").innerHTML = "You have " + attemptCountdown + " attempts left";

    for (var i=0; i<computerRandomSelection.length;i++){
    answerArray[i] = "_";
   document.getElementById("subunderscore").innerHTML = "HINT: There are " + computerRandomSelection.length + " letters in this country name" ;


    wrongLetter = [];
    document.getElementById("subwrongLetter").innerHTML = wrongLetter.join(", ").toUpperCase();


    userInputArray  = [];
     document.getElementById("subusedLetter").innerHTML = userInputArray.join(", ").toUpperCase();
  

    //document.onkeyup = function (event){
    //}
    //var userGuess = event.key;
    //var userInput = userGuess.toLowerCase();
  
    console.log (answerArray)
    console.log (wrongLetter)
    console.log (userInputArray)

}


//create underscore based on wordlength
for (var i=0; i<computerRandomSelection.length;i++){
    answerArray[i] = "_";
   document.getElementById("subunderscore").innerHTML = "HINT: There are " + computerRandomSelection.length + " letters in this country name" ;
  }
   	console.log(answerArray);

//THIS IS WHERE WE CAPTURE USER INPUT==============
    document.onkeyup = function (event){
      var userGuess = event.key;
      var userInput = userGuess.toLowerCase();

//THIS IS WHERE WE VALIDATE USER'S INPUT TO MAKE SURE IT TAKES ONLY LETTERS AND NOT SIGNS ================
    if (alphabet.indexOf(userInput) > -1){
      }
    else{
        alert("Please type a-z")
      }
//THIS IS WHERE WE DETERMINE IF USER GUESS IS RIGHT OR WRONG AND DO SOMETHING WITH IT======================

      //case1: if user guess is right then replace answerArray which is an _ with userInput. Do the for loop so that it checks all the letteres in the random word

      for (var i=0; i<computerRandomSelection.length;i++){
        //if userInput matches computerRandomSelections, replace answerArray at that i with userInput
        if (computerRandomSelection[i].indexOf(userInput) > -1){    answerArray[i] = userInput;
        //then display the already-replaced array in HTML
        document.getElementById("subunderscore").innerHTML = answerArray.join(" ").toUpperCase();
        }
      }
  
      //case2: if user guess is one of the valid alphabet and not in the random word and this guess was not used before
      if ((alphabet.indexOf(userInput) > -1) && (computerRandomSelection.indexOf(userInput) === -1) && (wrongLetter.indexOf(userInput) === -1)){
          //then, add userInput to wrongLetter array
          wrongLetter.push(userInput);
          //and display them in HTML
          document.getElementById("subwrongLetter").innerHTML = wrongLetter.join(", ").toUpperCase();
          //attemptcoundown goes down by -1
          attemptCountdown--;
          //print attempt left in HTML
          document.getElementById("attemptCountdown").innerHTML = "You have " + attemptCountdown + " attempts left";
    
      }
        console.log(attemptCountdown)

//THIS IS WHERE WE PUSH USED LETTERS IN USERINPUTARRAY ARRAY AND SHOW THEM IN HTML=======================
      if ((alphabet.indexOf(userInput) > -1) && (userInputArray.indexOf(userInput) === -1)){
          userInputArray.push(userInput);
          document.getElementById("subusedLetter").innerHTML = userInputArray.join(", ").toUpperCase();
      }

//THIS IS WHERE WE DETERMINE WHAT WE DO IF THE ALL THE GUESSES MATCH THE RAMDOM WORD===========

      if (answerArray.join("") === computerRandomSelection){
        winCount++;
        alert ("You've won this game");
        reset();
        console.log(winCount);

        }

//THIS IS WHERE WE GIVE USERS AN ALERT THAT THEY HAVE LOST THE GAME
        if ((answerArray.join("") !== computerRandomSelection) && (attemptCountdown ===0)) {
          alert ("GAME OVER. You lost")
          reset()
            } 
}

//THIS IS WHERE WE STOP THE PROGRAM FROM RUNNING IF USER RUNS OUT OF FAILED ATTEMPT QUOTA
 

      if (attemptCountdown ===0){
        reset()
      
   }


 


 



    











     
   	