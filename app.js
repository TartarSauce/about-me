//------------------------
// Get user name, greet them
//------------------------
var userName = prompt('Hi, Thanks for visiting my site!, what is your name');
alert('Nice to meet you,' + userName + '. I\'m going you ask you some questions about me.');
console.log(userName);

//------------------------
// First question to user
//------------------------
var response1 = prompt('Do I have a dog?').toLowerCase();
var answer1 = 'yes';
var petImage = document.getElementById('pet');

if (response1 === answer1 || response1 === answer1[0]) {
  alert('You are correct, ' + userName);
  petImage.src = 'imgs/Sayla.jpg';
} else {
  alert('You are not correct, ' + userName + '. I do have a dog');
}

//------------------------
// Second question to user
//------------------------
var response2 = prompt('Where do I live? Hint: its a popular city in the Northwest.');
var answer2 = 'seattle';
var homeTownImage = document.getElementById('hometown');

if (response2.toLowerCase() === answer2) {
  alert('Yes beautiful Seattle, that\'s my hometown, ' + userName + '.');
  homeTownImage.src = 'imgs/seattle.jpg';
} else {
  alert('No, sorry that is not correct. I am from Seattle in Washington.');
}

//------------------------
// Third question to user
//------------------------
var response3 = prompt('What\'s my favorite food? Hint: think cheese and pepperoni.').toLowerCase();
var answer3 = 'pizza';
var foodImage = document.getElementById('food');

if (response3 === answer3) {
  alert('Yay! that\'s correct, ' + userName + '. I love pizza.');
  foodImage.src = 'imgs/pizza.png';
} else {
  alert('No, sorry that is not correct. I love eating pizza.');
}

//------------------------
// Fourth question to user
//------------------------
var response4 = prompt('What\'s the scariest movie I watched? Hint: ghost that creates physical havoc.').toLowerCase();
var answer4 = 'poltergeist';
var movieImage = document.getElementById('movie');

if (response4 === answer4) {
  alert('That movie gives me the creeps. Good guess, ' + userName + '.');
  movieImage.src = 'imgs/movie.jpg';
} else {
  alert('Actually, the movie that scared me the most recently was Poltergeist.');
}

//------------------------
// Fifth question to user
//------------------------
var response5 = prompt('What\'s my favorite place to be Hint: its where the heart is.').toLowerCase();
var answer5 = 'home';
var favPlaceImage = document.getElementById('favplace');

if (response5 === answer5) {
  alert('Yes, nothing like a staycation, ' + userName + '.');
  favPlaceImage.src = 'imgs/home.jpg';
} else {
  alert('No, I usually like to laze around at home.');
}