//------------------------
// Turn off prompts if testing
// HTML and CSS
//------------------------
var turnOffPrompts = false;

if (!turnOffPrompts) {
  //------------------------
  // Get user name, greet them
  //------------------------
  var userName = prompt('Hi, Thanks for visiting my site!, what is your name');
  alert('Nice to meet you,' + userName + '. I\'m going you ask you some questions about me.');
  console.log(userName);

  //------------------------
  // variables to keep statistics
  //------------------------
  var finalTally = 0;
  var totalQuestions = 7;

  //------------------------
  // First question to user
  //------------------------
  function checkPet(){
    var response1 = prompt('Do I have a dog?').toLowerCase();
    var answer1 = 'yes';
    if (response1 === answer1 || response1 === answer1[0]) {
      alert('You are correct, ' + userName);
      finalTally++;
    } else {
      alert('You are not correct, ' + userName + '. I do have a dog');
    }
  }
  checkPet();
  var petImage = document.getElementById('pet');
  var petBorder = false;
  petImage.src = 'imgs/Sayla.jpg';
  petBorder = true;
  //------------------------
  // Second question to user
  //------------------------
  function homeTown(){
    var response2 = prompt('Where do I live? Hint: its a popular city in the Northwest.');
    var answer2 = 'seattle';

    if (response2.toLowerCase() === answer2) {
      alert('Yes beautiful Seattle, that\'s my hometown, ' + userName + '.');
      finalTally++;
    } else {
      alert('No, sorry that is not correct. I am from Seattle in Washington.');
    }
  }
  homeTown();
  var homeTownImage = document.getElementById('hometown');
  var homeTownBorder = false;
  homeTownImage.src = 'imgs/seattle.jpg';
  homeTownBorder = true;
  //------------------------
  // Third question to user
  //------------------------
  function faveFood() {
    var response3 = prompt('What\'s my favorite food? Hint: think cheese and pepperoni.').toLowerCase();
    var answer3 = 'pizza';

    if (response3 === answer3) {
      alert('Yay! that\'s correct, ' + userName + '. I love pizza.');
      finalTally++;
    } else {
      alert('No, sorry that is not correct. I love eating pizza.');
    }
  }
  faveFood();
  var foodImage = document.getElementById('food');
  var foodBorder = false;
  foodImage.src = 'imgs/pizza.png';
  foodBorder = true;
  //------------------------
  // Fourth question to user
  //------------------------
  function scaryMovie() {
    var response4 = prompt('What\'s the scariest movie I watched? Hint: ghost that creates physical havoc.').toLowerCase();
    var answer4 = 'poltergeist';

    if (response4 === answer4) {
      alert('That movie gives me the creeps. Good guess, ' + userName + '.');
      finalTally++;
    } else {
      alert('Actually, the movie that scared me the most recently was Poltergeist.');
    }
  }
  scaryMovie();
  var movieImage = document.getElementById('movie');
  var movieBorder = false;
  movieImage.src = 'imgs/movie.jpg';
  movieBorder = true;
  //------------------------
  // Fifth question to user
  //------------------------
  function favePlace() {
    var response5 = prompt('What\'s my favorite place to be Hint: its where the heart is.').toLowerCase();
    var answer5 = 'home';

    if (response5 === answer5) {
      alert('Yes, nothing like a staycation, ' + userName + '.');
      finalTally++;
    } else {
      alert('No, I usually like to laze around at home.');
    }
  }
  favePlace();
  var favPlaceImage = document.getElementById('favplace');
  var favPlaceBorder = false;
  favPlaceImage.src = 'imgs/home.jpg';
  favPlaceBorder = true;
  //------------------------
  // sixth question to user
  //------------------------
  function guessNumber() {
    var answer6 = 1 + Math.floor(Math.random() * 10); // random number between 1 and 10
    console.log('This is my random number between 1 and 10: ' + answer6);
    var numTries = 0;
    var doneGame = false;
    alert('Let\'s play a game. I am thinking of an integer between'
                                  + '1 and 10. You have exactly four guesses to get the correct '
                                  + 'answer. Let\'s go!');
    while(numTries < 4) {
      var response6 = parseInt(prompt('Type in your number'));
      numTries++;
      if (response6 === answer6) {
        alert('You guessed right. That\'s awesome! Thank you for playing my game');
        doneGame = true;
        finalTally++;
        break; // break out of the while loop
      } else {
        if (response6 > answer6) {
          alert('Sorry, guess a lower number. You have ' + (4 - numTries) + ' tries left.');
        }
        else {
          alert('Sorry, guess a higher number. You have ' + (4 - numTries) + ' tries left.');
        }
      }
    }

    if ((numTries === 4) && (!doneGame)) {
      alert('Sorry, you exceeded the number of tries. Exiting game!');
      numTries++;
    }
  }
  guessNumber();

  //------------------------
  //seventh question to user
  //------------------------
  function statesLived(){
    var answer7 = ['California', 'Michigan', 'Connecticut', 'Texas', 'Georgia'];
    var numStateGuesses = 0;
    var done = false;

    while(numStateGuesses < 6) {
      var response7 = prompt('Can you guess a state I have lived in besides Washington?');
      numStateGuesses++;
      for (var i = 0; i < answer7.length; i++) {
        if (response7 === answer7[i]){
          alert('That\'s awesome! You got it right! Here are all the states I '
               + 'lived in - ' + answer7);
          done = true;
          finalTally++;
          break;  // break out of the for loop
        }
      }
      if (done) {
        break; // break out of the while loop
      } else {
        alert('Sorry, guess again, you have ' + (6 - numStateGuesses) + ' tries left.');
      }
    }
    if ((numStateGuesses === 6) && (!done)) {
      alert('Sorry, you exceeded the number of tries. Exiting game!');
      alert('By the way, here are the other states I lived in - ' + answer7);
    }
  }
  statesLived();

  // Reporting perf

  alert(userName + ', you got ' + finalTally + ' questions right ' + ' out of ' + totalQuestions + '.');

  // Show all the list items

  var list1 = document.getElementById('list1');
  list1.style.color = 'black';

  var list2 = document.getElementById('list2');
  list2.style.color = 'black';

  var list3 = document.getElementById('list3');
  list3.style.color = 'black';

  var list4 = document.getElementById('list4');
  list4.style.color = 'black';

  var list5 = document.getElementById('list5');
  list5.style.color = 'black';

}

// // //------------------------
// // draw borders around all images that showed up
// //------------------------
// if (petBorder) {
//   petImage.style.border = '3px solid blue';
// }
// if (homeTownBorder) {
//   homeTownImage.style.border = '3px solid blue';
// }
//
// if (foodBorder) {
//   foodImage.style.border = '3px solid blue';
// }
//
// if (movieBorder) {
//   movieImage.style.border = '3px solid blue';
// }
// if (favPlaceBorder) {
//   favPlaceImage.style.border = '3px solid blue';
// }
