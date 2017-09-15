
//GLOBAL VARIABLES 
var countryArray = ["kazakhstan","kyrgyzstan","tajikistan","turkmenistan", "uzbekistan","china","north korea", "mongolia","south korea","brunei darussalam","cambodia","indonesia","laos", "malaysia", "myanmar", "philippines", "singapore", "thailand", "timor leste", "vietnam", "afghanistan", "bangladesh", "bhutan", "india", "iran", "maldives", "nepal", "pakistan", "sri lanka", "armenia", "azerbaijan", "bahrain", "cyprus", "georgia", "iraq", "israel", "jordan", "kuwait", "lebanon", "oman", "qatar", "saudi arabia", "turkey", "united arab emirates", "yemen"]
var computerRandomSelection = countryArray[Math.floor(Math.random() *
countryArray.length)] 
var wrongLetter = []; 
var answerArray = []; 
var alphabet =["a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z", " "];
var userInputArray = [];
var attemptCountdown = 10; 
var winCount = 0;

alert("Welcome! You are about to have fun guessing country names in Asia. Remember, these countries could be from anywhere in Asia including the Middle East. Have fun!")

//BELOW THIS LINE IS WHERE WE CREATE A FUNCTION WHICH WILL BE CALLED WHEN THE MAIN FUNCTION IS OVER
function reset (){
    
    //we have to reset some value of some variables carried-over from the main function and declare some new variables that we don't need to have carried over from the main function
    attemptCountdown = 10;
    answerArray = [];
    document.getElementById("attemptCountdown").innerHTML = "You have " + attemptCountdown + " attempts left";

     wrongLetter = [];
    document.getElementById("subwrongLetter").innerHTML = wrongLetter.join(", ").toUpperCase();


    userInputArray  = [];
     document.getElementById("subusedLetter").innerHTML = userInputArray.join(", ").toUpperCase();
    
    var resetanswerArray =[];
    var resetcomputerRandomSelection = countryArray[Math.floor(Math.random() *countryArray.length)] 
        
      for (var i=0; i<resetcomputerRandomSelection.length;i++){
      resetanswerArray[i] = "_";

    document.getElementById("subunderscore").innerHTML = "There are " + resetcomputerRandomSelection.length + " letters in this country name" ;
 }

    document.onkeyup = function (event){
    var resetuserGuess = event.key;
    var resetuserInput = resetuserGuess.toLowerCase();

//THIS IS WHERE WE VALIDATE USER'S INPUT TO MAKE SURE IT TAKES ONLY LETTERS AND NOT SIGNS.
      if (alphabet.indexOf(resetuserInput) > -1){
      }
      else{
      alert("Please type a-z")
      }

//THIS IS WHERE WE DETERMINE IF USER GUESS IS RIGHT OR WRONG AND DO SOMETHING WITH IT.

      //scenario 1: if user guess is right then replace answerArray which is an _ with userInput. Do the for loop so that it checks all the letteres in the random word
      for (var i=0; i<resetcomputerRandomSelection.length;i++){

        //if userInput matches computerRandomSelections, replace answerArray at that i with userInput
        if (resetcomputerRandomSelection[i].indexOf(resetuserInput) > -1){    resetanswerArray[i] = resetuserInput;

        //then display the already-replaced array in HTML
        document.getElementById("subunderscore").innerHTML = resetanswerArray.join(" ").toUpperCase();
        }
      }
  
      //scenario 2: if user guess is one of the valid alphabet and not in the random word and this guess was not used before
      if ((alphabet.indexOf(resetuserInput) > -1) && (resetcomputerRandomSelection.indexOf(resetuserInput) === -1) && (wrongLetter.indexOf(resetuserInput) === -1)){

          //then, add userInput to wrongLetter array
          wrongLetter.push(resetuserInput);

          //and display them in HTML
          document.getElementById("subwrongLetter").innerHTML = wrongLetter.join(", ").toUpperCase();

          //attemptcoundown goes down by -1
          attemptCountdown--;

          //print attempt left in HTML
          document.getElementById("attemptCountdown").innerHTML = "You have " + attemptCountdown + " attempts left";
    
      }

//THIS IS WHERE WE PUSH USED LETTERS IN USERINPUTARRAY ARRAY AND SHOW THEM IN HTML.

    //we make sure that the input is valid and that we don't already have that leter in the userInputArray
    if ((alphabet.indexOf(resetuserInput) > -1) && (userInputArray.indexOf(resetuserInput) === -1)){
        userInputArray.push(resetuserInput);
        document.getElementById("subusedLetter").innerHTML = userInputArray.join(", ").toUpperCase();
        }


//THIS IS WHERE WE DETERMINE WHAT WE DO AFTER WE HAVE WINNING OR LOSING SCENAIRO.

    //winning scenairo 1 (winning when there are still attemptps left)
    if ((resetanswerArray.join("") === resetcomputerRandomSelection) && (attemptCountdown >0)){
        winCount++;
        alert ("You've won this game");
        reset()
        console.log (winCount)
        }

    //winning scenario 2 (winning right when the attepmt is at zero)
    if ((resetanswerArray.join("") === resetcomputerRandomSelection) && (attemptCountdown ===0)){
          winCount++;
          alert ("You've won this game")
          reset()
        console.log (winCount)
        }

    //losing sceinario (no more attempt left to keep trying)
      if ((resetanswerArray.join("") !== resetcomputerRandomSelection) && (attemptCountdown ===0)) {
          alert ("GAME OVER. You lost. The country was "+ resetcomputerRandomSelection.toUpperCase())
          reset()
            }

//THIS IS WHERE WE DO THE WIN COUNTS
    document.getElementById("subwinCount").innerHTML = winCount;

    }
  }







//BELOW THIS IS THE MAIN FUCTION THAT WILL BE CALLED BEFORE RESET FUNCTION WILL BE CALLED. 

//THIS IS WHERE WE CREATE UNDERSCORE BASED ON RANDOM WORD LENGTH.
for (var i=0; i<computerRandomSelection.length;i++){
    answerArray[i] = "_";
   document.getElementById("subunderscore").innerHTML = "There are " + computerRandomSelection.length + " letters in this country name" ;
  }

//THIS IS WHERE WE CAPTURE USER INPUT.
    document.onkeyup = function (event){
      var userGuess = event.key;
      var userInput = userGuess.toLowerCase();

//THIS IS WHERE WE VALIDATE USER'S INPUT TO MAKE SURE IT TAKES ONLY LETTERS AND NOT SIGNS.
    if (alphabet.indexOf(userInput) > -1){
      document.getElementById("subheader").innerHTML = "HINT: Some countries has at least a space in their names";
    }
    else{
        alert("Please type a-z")
      }
//THIS IS WHERE WE DETERMINE IF USER GUESS IS RIGHT OR WRONG AND DO SOMETHING WITH IT.

      //scenario 1: if user guess is right, then we replace answerArray which is an _ with userInput. We do the for loop so that it checks all the letteres in the random word.
      for (var i=0; i<computerRandomSelection.length;i++){
console.log(computerRandomSelection);

        //if userInput matches computerRandomSelections, replace answerArray at that i with userInput
        if (computerRandomSelection[i].indexOf(userInput) > -1){    
          answerArray[i] = userInput;


        //then display the already-replaced array in HTML
        document.getElementById("subunderscore").innerHTML = answerArray.join(" ").toUpperCase();
        }
      }
console.log(answerArray.join(""))
console.log(answerArray.join())
console.log(answerArray.join(" "))
console.log(answerArray.join ("  "))
      //scenario 2: if user guess is one of the valid alphabet and not in the random word and this guess was not used before
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

//THIS IS WHERE WE PUSH USED LETTERS IN USERINPUTARRAY ARRAY AND SHOW THEM IN HTML.
      //we make sure that the input is valid and that we don't already have that leter in the userInputArray
      if ((alphabet.indexOf(userInput) > -1) && (userInputArray.indexOf(userInput) === -1)){
          userInputArray.push(userInput);
          document.getElementById("subusedLetter").innerHTML = userInputArray.join(", ").toUpperCase();
      }



//THIS IS WHERE WE DETERMINE WHAT WE DO WITH WINNING AND LOSING SCENARIOS FOR THE FIRST TIME. SINCE THIS IS THE FIRST TIME THESE THINGS COULD HAPPEN, WE NEED TO CALL RESET FUNCTION AT THE END OF EACH SCENARIO
      
      //winning scenario 1 (winning when there are still attemptps left)
      if ((answerArray.join("") === computerRandomSelection) && (attemptCountdown >0)){
        winCount++;
        alert ("You've won this game");
        reset();
        }
      //winning scenario 2 (winning right when the attepmt is at zero)
      if ((answerArray.join("") === computerRandomSelection) && (attemptCountdown ===0)){
        winCount++;
        alert ("You've won this game")
        reset()
      
      }

      //losing scenario (no more attempt left to keep trying)
      if ((answerArray.join("") !== computerRandomSelection) && (attemptCountdown ===0)) {
          alert ("GAME OVER. You lost. The country was "+ computerRandomSelection.toUpperCase())
          
          reset()
          } 
//THIS IS WHERE WE DISPLAY WIN COUNTS
 document.getElementById("subwinCount").innerHTML = winCount;

}


    





 


 



    











     
   	