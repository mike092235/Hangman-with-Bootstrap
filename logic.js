// GLOBAL VARIABLES
// =====================================================================
// Arrays and Variables for holding data
var wordOptions = ["bulls", "celtics", "magics", "wizards", "lakers", "nuggets"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = []; // b _ _ _ _ 
var wrongLetters = []

//Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// FUNCTIONS (Reusable blocks of code that I will call upon when needed)
// =====================================================================

function startGame () {
  selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
  lettersinWord = selectedWord.split("");
  numBlanks = lettersinWord.length;

  // Reset
  guessesLeft = 9;
  wrongLetters = [];
  blanksAndSuccesses = [];

  // Populate blanks and successes with right number of blanks.
  for (var i=0; i<numBlanks; i++){
    blanksAndSuccesses.push("_");
  }

  // Change HTML to reflect round conditions
  document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("numGuesses").innerHTML = guessesLeft;
  document.getElementById("winCounter").innerHTML = winCount;
  document.getElementById("lossCounter").innerHTML = lossCount;

  //testing / debugging
  console.log(selectedWord);
  console.log(lettersinWord);
  console.log(numBlanks);
  console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
  // Check if letter exists in code at all

  var isLetterInWord = false;

  for(var i=0; i<numBlanks; i++){
    if(selectedWord[i] == letter) {
      isLetterInWord = true;
      alert("Letter Found");
    }
  }
}
// MAIN PROCESS
// =====================================================================

// Initiates the code the first time
startGame();

// Register keyClicks

document.onkeyup = function(event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

  // Testing / Debugging
  console.log(letterGuessed);
}














