'use strict';
console.log('This file is connected');

var userName = prompt('What is your name?').trim();
while (!userName) {
  userName = prompt('What is your name, Please, provide it now!');
}
var greeting;
greeting = 'Welcome, ' + userName + '!';


document.getElementById('greeting').innerHTML = greeting;

var userPoints = 0;

function question1() {
  var hair = prompt('Hello, ' + userName + '! Does Nathan have long hair?').toLowerCase().trim();
  while (hair !== 'yes' && hair !== 'no' && hair !== 'y' && hair !== 'n') {
    hair = prompt('Please use yes/no or y/n. Does Nathan have long hair?').toLowerCase().trim();
  }
  if (hair === 'yes' || hair === 'y') {
    alert('Nope! Nathan has been shaving his head for over 10 years now!');
  } else if (hair === 'no' || hair === 'n') {
    alert('That\'s correct! Nathan has been shaving his head for over 10 years now!');
    userPoints += 1;
  }

} question1();

function question2() {
  var degree = prompt('Next question, ' + userName + '. Does Nathan have more than one post-high school degree?').toLowerCase().trim();
  while (degree !== 'yes' && degree !== 'no' && degree !== 'y' && degree !== 'n') {
    degree = prompt('Please use yes/no or y/n. Does Nathan have more than one post-high school degree?').toLowerCase().trim();
  }
  if (degree === 'yes' || degree === 'y') {
    alert('Correct! Nathan has 2 Associate degrees and a Bachelor degree.');
    userPoints += 1;
  } else if (degree === 'no' || degree === 'n') {
    alert('Wrong! Nathan has 2 Associate degrees and a Bachelor degree.');
  }
} question2();
function question3() {
  var kids = prompt('Third question. Does Nathan have any children?').toLowerCase().trim();
  while (kids !== 'yes' && kids !== 'no' && kids !== 'y' && kids !== 'n') {
    kids = prompt('How many times must we go over this, ' + userName + '? Please use yes/no or y/n. Does Nathan have any children?').toLowerCase().trim();
  }
  if (kids === 'yes' || kids === 'y') {
    alert('Correct! Nathan has 1 son.');
    userPoints += 1;
  } else if (kids === 'no' || kids === 'n') {
    alert('Wrong, sorry! Nathan has 1 son.');
  }
} question3();
function question4() {
  var pets = prompt('Are you an animal lover, ' + userName + '? How about Nathan, do you think he has any pets?').toLowerCase().trim();
  while (pets !== 'yes' && pets !== 'no' && pets !== 'y' && pets !== 'n') {
    pets = prompt('Use yes/no or y/n, ' + userName + '. I don\'t what to have to tell you again. Does Nathan have any pets?').toLowerCase().trim();
  }
  if (pets === 'yes' || pets === 'y') {
    alert('Absolutely! Nathan has 1 puppy name Beanie!');
    userPoints += 1;
  } else if (pets === 'no' || pets === 'n') {
    alert('Wrong. Nathan is definitely an animal person. He has 1 puppy name Beanie!');
  }

} question4();

function question5() {
  var travel = prompt('Fifth one, ' + userName + '! Has Nathan ever traveled across the ocean?').toLowerCase().trim();
  while (travel !== 'yes' && travel !== 'no' && travel !== 'y' && travel !== 'n') {
    travel = prompt('Yes/no or y/n only, ' + userName + '. I\'m disapointed in you. Has Nathan ever traveled across the ocean?').toLowerCase().trim();
  }
  if (travel === 'yes' || travel === 'y') {
    alert('Nope! Nathan has been to Canada and Mexico, but has yet to leave the continent.');
  } else if (travel === 'no' || travel === 'n') {
    alert('That\'s correct! Nathan has been to Canada and Mexico, but has yet to leave the continent.');
    userPoints += 1;
  }

} question5();
//  The following code was borrowed from Craig during Lab discussion
function question6() {
  var opportunities = 4;
  var answer = 5;

  while (opportunities > 0) {
    var userChoice = prompt('Guess the number I\'m thinking of between 1-20. You have ' + opportunities + ' guesses.').trim();
    if (!userChoice) {
      break;
    }
    userChoice = Number(userChoice);

    if (userChoice === answer) {
      alert('Correct! Great guessing!');
      userPoints += 1;
      opportunities = 0;
      break;
    }
    else {
      if (userChoice < answer){
        alert('Too Low!');
      }
      if (userChoice > answer) {
        alert('Too High!');
      }
    }
    opportunities--;
    console.log('guessCount is ' + opportunities);
  }
  alert('The answer was ' + answer + '!');
} question6();

function question7() {
  var favoriteFood = ['pizza', 'tacos', 'steak', 'potatoes'];
  console.log(favoriteFood);

  var opportunitiesTwo = 6;

  while (opportunitiesTwo > 0) {
    var guess = prompt(userName + ', what is one of Nathan\'s favorite foods? You have ' + opportunitiesTwo + ' guesses left.').toLowerCase().trim();
    var correct = false;
    if (!guess) {
      break;
    }

    for (var i = 0; i < favoriteFood.length; i++){
      if(guess === favoriteFood[i]){
        alert('Correct! That is one of Nathan\'s favorite foods!');
        correct =true;
        userPoints++;
        break;
      }
    }
    if(correct === false){
      alert('Nope! Try again!');
    } else{
      break;
    }
    opportunitiesTwo--;
  }

  alert('My favorite foods are ' + favoriteFood + '. Thanks for playing!');
} question7();
alert('You got ' + userPoints + ' out of 7 points correct.');
console.log('This is the user point total: ', userPoints);
