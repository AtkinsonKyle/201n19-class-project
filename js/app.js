'use strict';


var askName = prompt('What is your name?').toLowerCase();

askUserName();

function askUserName() {


  document.write('<h2>Hello ' + askName + ', these are your results:</h2>');
}


alert('Prepare for a challenge ' + askName + '!');
var CA = 0;
var IA = 0;

askQ1();

function askQ1() {

  var myName = prompt('Is the author of this webpage\'s name kyle?');

  if (myName.toLowerCase() === 'yes' || myName.toLowerCase() === 'y') {
    alert('Correct');
    CA++;
  }
  else {
    alert('Incorrect');
    IA++;

  }
}

askQ2();

function askQ2() {

  var military = prompt('Did I serve in the United States Coast Guard?');

  if (military.toLowerCase() === 'no' || military.toLowerCase() === 'n') {
    alert('Correct');
    CA++;

  }
  else {
    alert('Incorrect');
    IA++;

  }

}

askQ3();

function askQ3() {

  var job = prompt('Was my last job at Top Pot?');

  if (job.toLowerCase() === 'no' || job.toLowerCase() === 'n') {
    alert('Correct');
    CA++;

  }
  else {
    alert('Incorrect');
    IA++;

  }

}

askQ4();

function askQ4() {

  var diploma = prompt('Did I get my high school diploma at R.J. Reynolds?');

  if (diploma.toLowerCase() === 'no' || diploma.toLowerCase() === 'n') {
    alert('Correct');
    CA++;

  }
  else {
    alert('Incorrect');
    IA++;

  }

}

askQ5();

function askQ5() {

  var Japan = prompt('Did I serve in Japan?');

  if (Japan.toLowerCase() === 'yes' || Japan.toLowerCase() === 'y') {
    alert('Correct');
    CA++;

  }
  else {
    alert('Incorrect');
    IA++;
  }

}

numberGame();

function numberGame() {

  var trys = 4;
  var dive = prompt('How deep have I ever dove underwater, it\'s a number between 150\' and 170\'?');
  var feet = 164;
  var Q6CorrAns = false;


  while (trys > 0) {
    var guesses = Number(prompt(`${dive} You have ${trys} guesses left.`));
    trys--;

    if (guesses === feet) {
      alert(`${feet} is right! I dove down to 164' in Lake Washington, it's not only cold but very dark!`);
      CA++;
      trys = 0;
      Q6CorrAns = true;
    }
    else {
      dive = 'That\'s wrong, try again!';

      if (guesses > feet) {
        dive += `The depth is shallower than your guess, try again! ${trys} guesses left.`;
      }
      if (guesses < feet) {
        dive += `The depth is greater than your guess, try again! ${trys} guesses left.`;
      }
    }
  }

  if (Q6CorrAns === false) {
    alert(`Sorry, ${feet} is the correct depth. It's not only cold but very dark!`);
    IA++;
  }
}

var correct;
var incorrect;
if (CA === 0 || CA > 1) {
  correct = 'answers';
}
else {
  correct = 'answer';
}

if (IA === 0 || IA > 1) {
  incorrect = 'answers';
}
else {
  incorrect = 'answer';
}


askQ7();

function askQ7() {

  var favBand = prompt('Guess one of my top four favorite bands!');
  var bands = ['led zeppelin', 'greta van fleet', 'system of a down', 'rage against the machine'];
  var attemptsQ7 = 6;
  var AnsCorr7 = false;

  while (attemptsQ7 > 0 && !AnsCorr7) {
    attemptsQ7--;
    for (var i = 0; i < bands.length; i++) {
      if (favBand === bands[i]) {
        alert(`Great job, ${askName}! That's one of my favorite bands!`);
        CA++;
        AnsCorr7 = true;
      }
    }
    if (attemptsQ7 > 0 && !AnsCorr7) {
      favBand = prompt(`That is incorrect ${askName}, try again!`).toLowerCase();
    }
  }
  if (attemptsQ7 === 0 && !AnsCorr7) {
    alert(`Thanks for playing ${askName}, you're out of guesses`);
  }
}
