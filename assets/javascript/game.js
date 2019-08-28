var wordEL = document.getElementById("word");
var wrongGuessesEL =[]= document.getElementById("wrongGuesses");
var spaces = document.getElementById("computerWord")
var guessesLeftEL = document.getElementById("guessesLeft");
var winsEL = document.getElementById("wins");
var lossesEL = document.getElementById("losses");

var computerChoices = ["thomas", "element"];
var computerNewWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var spacesToMake= computerNewWord.length;
var spaces =[]
var guesses= wrongGuessesEL


console.log(spacesToMake)
for (var i = 0; i < spacesToMake; i++) {
    spaces.push("_")
    console.log(spaces)
  
  wordEL.textContent=spaces.join(" ")
}
for (var i = 0; i<20; i++) {
  var userGuesses=[]
onkeyup = function(guess) {
  console.log(guess.key)  
}

}
var guesses = [];

document.onkeypress = function(evt) {
    evt = evt || window.event;

    // Ensure we only handle printable keys
    var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;

    if (charCode) {
        guesses.push(String.fromCharCode(charCode));
        
    }
    
};


// guess2.appendChild(wrongGuessesEL);
// appendChild(wrongGuessesEL);
