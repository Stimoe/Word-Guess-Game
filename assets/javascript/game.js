var wordEL = document.getElementById("word");
var wrongGuessesEL = document.getElementById("wrongGuesses");
var spaces = document.getElementById("computerWord")
var guessesLeftEL = document.getElementById("guessesLeft");
var winsEL = document.getElementById("wins");
var lossesEL = document.getElementById("losses");

var computerChoices = ["hippopotamus", "horse", "kangaroo", "kitten", "lion", "lobster", "monkey", "octopus", "owl", "panda", "pig", "puppy","rabbit"]  
var computerNewWord;
var spacesToMake;
var spaces;
var guesses;
var lives;
var wins=0
var losses=0
var currentGuess;
var notInArray=false
var stringSpaces;

// function to reset the game
function gameReset(){
  
 computerNewWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
 spaces =[]
 guesses =[]
 lives=9
 guessesLeftEL.textContent=lives 
 wrongGuessesEL.textContent=guesses
 wordEL.textContent=spaces
 spacesToMake= computerNewWord.length;
 for (var i = 0; i < spacesToMake; i++) {
  spaces.push("_")
  wordEL.textContent=spaces.join(" ") 
}
}

// on key up
document.onkeyup = function(event) {
 
  console.log("event key", event.key)
  // change key event to new variable
 currentGuess=event.key
//  run the key event against the computers word
notInArray=false
 for (var i = 0; i < computerNewWord.length; i++) {
  //  If it matches replaces the spaces with correct letters
  if (computerNewWord[i]===currentGuess){ 
    notInArray=true
    spaces.splice(i, 1, currentGuess)
    wordEL.textContent=spaces.join(" ") 
    stringSpaces=spaces.join("")
    console.log(stringSpaces)
  }
  //check if they won
     if (stringSpaces===computerNewWord){
      wins++
      winsEL.textContent=wins
      alert("you won!!")
      gameReset()
     } 
  } 
//if their guess was not in the word 
   if(!notInArray){
    // reduce lives by 1
     lives--
      // push guess into guesses array
      guesses.push(currentGuess)
      console.log(guesses)
      //update lives and guesses
      wrongGuessesEL.textContent=guesses
      guessesLeftEL.textContent=lives  
      // check if they lost
      if (lives<=0) {
        alert ("you Lost! the animal was " + computerNewWord)
        losses++
        lossesEL.textContent=losses
        gameReset()
      }
  }
}
gameReset();

