
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




function reset (){
    
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

      document.getElementById("subunderscore").innerHTML = "HINT: There are " + resetcomputerRandomSelection.length + " letters in this country name" ;
 }


  document.onkeyup = function (event){
    var resetuserGuess = event.key;
    var resetuserInput = resetuserGuess.toLowerCase();

      if (alphabet.indexOf(resetuserInput) > -1){
      }
      else{
      alert("Please type a-z")
      }

      for (var i=0; i<resetcomputerRandomSelection.length;i++){
        //if userInput matches computerRandomSelections, replace answerArray at that i with userInput
        if (resetcomputerRandomSelection[i].indexOf(resetuserInput) > -1){    resetanswerArray[i] = resetuserInput;
        //then display the already-replaced array in HTML
        document.getElementById("subunderscore").innerHTML = resetanswerArray.join(" ").toUpperCase();
        }
      }
  
      //case2: if user guess is one of the valid alphabet and not in the random word and this guess was not used before
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

//THIS IS WHERE WE PUSH USED LETTERS IN USERINPUTARRAY ARRAY AND SHOW THEM IN HTML=======================
    if ((alphabet.indexOf(resetuserInput) > -1) && (userInputArray.indexOf(resetuserInput) === -1)){
        userInputArray.push(resetuserInput);
        document.getElementById("subusedLetter").innerHTML = userInputArray.join(", ").toUpperCase();
        }


//THIS IS WHERE WE DETERMINE WHAT WE DO IF THE ALL THE GUESSES MATCH THE RAMDOM WORD===========

    if ((resetanswerArray.join("") === resetcomputerRandomSelection) && (attemptCountdown >0)){
        winCount++;
        alert ("You've won this game");
        reset()
        console.log (winCount)

        }

    if ((resetanswerArray.join("") === resetcomputerRandomSelection) && (attemptCountdown ===0)){
          winCount++;
          alert ("You've won this game")
          reset()
        console.log (winCount)
        
        }

//THIS IS WHERE WE GIVE USERS AN ALERT THAT THEY HAVE LOST THE GAME
      if ((resetanswerArray.join("") !== resetcomputerRandomSelection) && (attemptCountdown ===0)) {
          alert ("GAME OVER. You lost. The country was "+ resetcomputerRandomSelection.toUpperCase())
          reset()
            } 

    document.getElementById("subwinCount").innerHTML = winCount;




    //console.log (resetcomputerRandomSelection)
    //console.log (resetanswerArray)
    //console.log (wrongLetter)
    //console.log (userInputArray)



}
}



//THIS IS THE MAIN FUCTION THAT WILL BE CALLED BEFORE RESET FUNCTION WILL BE CALLED. 
//create underscore based on wordlength
for (var i=0; i<computerRandomSelection.length;i++){
    answerArray[i] = "_";
   document.getElementById("subunderscore").innerHTML = "HINT: There are " + computerRandomSelection.length + " letters in this country name" ;
  }

//THIS IS WHERE WE CAPTURE USER INPUT==============
    document.onkeyup = function (event){
      var userGuess = event.key;
      var userInput = userGuess.toLowerCase();

//THIS IS WHERE WE VALIDATE USER'S INPUT TO MAKE SURE IT TAKES ONLY LETTERS AND NOT SIGNS ================
    if (alphabet.indexOf(userInput) > -1){
      document.getElementById("subheader").innerHTML = "HINT: Some countries has at least a space in their names";
    }
    else{
        alert("Please type a-z")
      }
//THIS IS WHERE WE DETERMINE IF USER GUESS IS RIGHT OR WRONG AND DO SOMETHING WITH IT======================

      //case1: if user guess is right then replace answerArray which is an _ with userInput. Do the for loop so that it checks all the letteres in the random word

      for (var i=0; i<computerRandomSelection.length;i++){
        //if userInput matches computerRandomSelections, replace answerArray at that i with userInput
        if (computerRandomSelection[i].indexOf(userInput) > -1){    
          answerArray[i] = userInput;
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

//THIS IS WHERE WE PUSH USED LETTERS IN USERINPUTARRAY ARRAY AND SHOW THEM IN HTML=======================
      if ((alphabet.indexOf(userInput) > -1) && (userInputArray.indexOf(userInput) === -1)){
          userInputArray.push(userInput);
          document.getElementById("subusedLetter").innerHTML = userInputArray.join(", ").toUpperCase();
      }



//THIS IS WHERE WE DETERMINE WINNING AND LOSING SCENARIOS
      
      if ((answerArray.join("") === computerRandomSelection) && (attemptCountdown >0)){
        winCount++;
        alert ("You've won this game");
        reset();
        }

      if ((answerArray.join("") === computerRandomSelection) && (attemptCountdown ===0)){
        winCount++;
        alert ("You've won this game")
        reset()
      
      }


      if ((answerArray.join("") !== computerRandomSelection) && (attemptCountdown ===0)) {
          alert ("GAME OVER. You lost. The country was "+ computerRandomSelection.toUpperCase())
          
          reset()
          } 

 document.getElementById("subwinCount").innerHTML = winCount;

}


    





 


 



    











     
   	