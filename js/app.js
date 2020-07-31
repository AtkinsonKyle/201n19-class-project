'use strict';


var askName = prompt('What is your name?').toLowerCase();

askUserName();

function askUserName() {
  //ASK FOR USERNAME

  document.write('<h2>Hello ' + askName + ', these are your results:</h2>');
}

//INTRO TO QUESTIONS
alert('Prepare for a challenge ' + askName + '!');
var CA = 0;
var IA = 0;

askQ1();

function askQ1() {
  //FIRST QUESTION
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
  //SECOND QUESTION
  var military = prompt('Did I serve in the United States Coast Guard?');

  if (military.toLowerCase() === 'no' || military.toLowerCase() === 'n') {
    alert('Correct');
    CA++;

  }
  else {
    alert('Incorrect');
    IA++;

  }
  //console.log(military);
}

askQ3();

function askQ3() {
  //THIRD QUESTION
  var job = prompt('Was my last job at Top Pot?');

  if (job.toLowerCase() === 'no') {
    alert('Correct');
    CA++;

  }
  else {
    alert('Incorrect');
    IA++;

  }
  //console.log(job);
}

askQ4();

function askQ4() {
  //FOURTH QUESTION
  var diploma = prompt('Did I get my high school diploma at R.J. Reynolds?');

  if (diploma.toLowerCase() === 'no') {
    alert('Correct');
    CA++;

  }
  else {
    alert('Incorrect');
    IA++;

  }
  //console.log(diploma);
}

askQ5();

function askQ5() {
  //FIFTH QUESTION
  var Japan = prompt('Did I serve in Japan?');

  if (Japan.toLowerCase() === 'yes') {
    alert('Correct');
    CA++;

  }
  else {
    alert('Incorrect');
    IA++;
  }
  //console.log(Japan);
}

numberGame();

function numberGame() {
  //NUMBER GAME
  var trys = 4;
  var dive = prompt('How deep have I ever dove underwater, it\'s a number between 150\' and 170\'?');
  var feet = 164;
  var Q6CorrAns = false;

  //START PROMPTING
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
      //  alert('That\'s wrong, try again!');

      // HIGH OR LOW PROMPTS
      if (guesses > feet) {
        prompt('That\'s too deep, try again!');
      }
      if (guesses < feet) {
        prompt('The depth is greater than your guess, try again!');
      }
    }
  }
  //MARVEL END GAME
  if (Q6CorrAns === false) {
    alert(`Sorry, ${feet} is the correct depth. It's not only cold but very dark!`);
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
  //7TH QUESTION
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
