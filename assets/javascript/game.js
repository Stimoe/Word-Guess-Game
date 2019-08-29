var wordEL = document.getElementById("word");
var wrongGuessesEL = document.getElementById("wrongGuesses");
var spaces = document.getElementById("computerWord")
var guessesLeftEL = document.getElementById("guessesLeft");
var winsEL = document.getElementById("wins");
var lossesEL = document.getElementById("losses");

var computerChoices = ["thomas", "element"];
var computerNewWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var spacesToMake= computerNewWord.length;
var spaces =[]
var guesses =[]
// var guess =[]
var lives=12
var currentGuess
var notInArray=false
var wrong="p"
guessesLeftEL.textContent=lives

// Figures out how many spaces to make
for (var i = 0; i < spacesToMake; i++) {
    spaces.push("_")
    wordEL.textContent=spaces.join(" ")  
}

document.onkeyup = function(event) {
  
  console.log("event key", event.key)
 currentGuess=event.key
 
 for (var i = 0; i < computerNewWord.length; i++) {
  if (computerNewWord[i]===currentGuess){ 
    notInArray=true
    console.log(currentGuess)
    spaces.splice(i, 1, currentGuess)
    wordEL.textContent=spaces.join(" ") 
    console.log("they guessed " + currentGuess)
    console.log(notInArray)
  }
}
   if(notInArray===false){
    wrong=currentGuess
     lives--
      guesses.push(wrong)
      console.log(guesses)
      wrongGuessesEL.textContent=guesses
      guessesLeftEL.textContent=lives 
  }
  
}




// if(notInArray=false){
//   console.log(notInArray)
//   guesses.push(currentGuess)
//   console.log(guesses)
// }


//   if (computerNewWord[i]!==currentGuess){
//     guesses.push(currentGuess)
//     console.log(guesses)
// }


//   if (notInArray=false) {
     
//     lives--
    
//     // guesses.push(currentGuess)
    
//     console.log("these are guesses" + guesses) 
//     guessesLeftEL.textContent=lives
//      
// }
 



// var string=computerNewWord
// var  newWordString= string.split("");
// console.log(newWordString)

// document.onkeyup = function(event) {
//   console.log("event key", event.key)
//  currentGuess=event.key
//  for (var i = 0; i < lives; i++) {
//   if (newWordString[i]===currentGuess){ 
//     spaces.splice(i, 1, currentGuess)
//   wordEL.textContent=spaces
//     notInArray=true
//   }
//  }

//   if (notInArray === false) {
//     lives--
    
//     guesses.push(currentGuess)
//     console.log(guesses)
    
    
// }
// wrongGuessesEL.textContent=guesses
// }


 


//   if guess===newWordString
//   console.log(guess)

  
  
  
//   for (var i = 0; i < newWordString.length; i++) {
//   if (guess.indexOf(newWordString[i]) > -1) {
//     found = true;
    
//     console.log("same")
//       break;
//   }
// }   

// }   
    // var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;
    // charCode=guess.push(String.fromCharCode(charCode));
    // console.log(guess)

    // for (var  i= 0; i < newWordString.length; i++) {
    //   for(var j=0; j< guess.length; j++)
    //   if (newWordString[i]===guess[j]){

    //     console.log("same")
    //   }
      

// for (var i = 0; i < newWordString.length; i++) {
//     if (guess.indexOf(newWordString[i]) > -1) {
//         found = true;
        
//         console.log("same")
//         guess.pop()
//         break;
//     }
    
// }


       
       
      
      //  else if (firstLetter==="o") {
      //     alert(animalAtCurrentIndex + " stars with a o!");
      //  }
    // }
    // for (let  i= 0; i < myFarm.length; i++) {
    //   var  animalAtCurrentIndex = myFarm[i];
    //    var firstLetter = animalAtCurrentIndex[0];
    //    console.log(firstLetter);
    //    if (firstLetter ==="c") {
    //        alert(animalAtCurrentIndex + " stars with a c!");
    //    }
    //    else if (firstLetter==="o") {
    //       alert(animalAtCurrentIndex + " stars with a o!");
    //    }
    // }
    // var guesses= guess.slice(0)
      // guess[0]=(String(charCode))
      // guess[0]=(String.fromCharCode(charCode))
    //   console.log(guess)
    //   console.log(guesses)
    // for (var i = 0; i < newWordString.length; i++) {
    //   // charCode=guesses.push(String.fromCharCode(charCode));
    //   // console.log(charCode)
    //   if (guess.indexOf(newWordString[i]) > -1) {
    //   console.log("You guessed " + guess + " right!");
    //   }
    //  else 
    // // (charCode) {
    //   {
    //     guesses.push(String.fromCharCode(charCode));
        
    //     wrongGuessesEL.textContent=guesses
    //     console.log(guesses)
    // }
    
  



