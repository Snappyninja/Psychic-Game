    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y", "z"];
    var userGuesses =[];
    var wins = 0;
    var losses = 0;
    var tries = 9;
          // Randomly chooses a choice from the options array. This is the Computer's guess.
          var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
          console.log(computerGuess);
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;


      
      if(computerChoices.includes(userGuess) && (!userGuesses.includes(userGuess))){
        tries--;
        if ((userGuess === computerGuess)){
          wins++;
          computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
          tries = 9;
          userGuesses = [];
          console.log(computerGuess);

        }else if((userGuess != computerGuess) && (tries > 0)) {
         userGuesses.push(userGuess);
        
        }else if((userGuess != computerGuess) && (tries === 0))  {
         losses++;
         computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
         tries = 9;
         userGuesses = [];
         console.log(computerGuess);
        }

        
      }

       var html =
       "<p>Wins:" + wins + "</p>" +
       "<br>" +
       "<p>Losses:" + losses + "</p>" +
       "<br>" +
       "<p>Guesses Left:" + tries + "</p>" +
       "<br>" +
       "<p>Your Guesses so far:" + userGuesses +"</p>";
          document.querySelector("#game").innerHTML = html;

     
    };