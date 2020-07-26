'use strict';

//ASK FOR USERNAME
/*var askName = prompt('What is your name?').toLowerCase();

document.write('<h2>Hello ' + askName + ', these are your results:</h2>');

//INTRO TO QUESTIONS
alert("Prepare for a challenge " + askName + "!");
var CA = 0;
var IA = 0;

//FIRST QUESTION
var myName = prompt('Is the author of this webpage\'s name kyle?');

if (myName.toLowerCase() == 'yes' || myName.toLowerCase() == 'y') {
  alert("Correct");
  CA++;
}
else {
  alert("Incorrect")
  IA++;

}

//console.log(myName + ', my name is Kyle');

//SECOND QUESTION
var military = prompt('Did I serve in the United States Coast Guard?');

if (military.toLowerCase() == 'no' || military.toLowerCase() == 'n') {
  alert("Correct");
  CA++;

}
else {
  alert("Incorrect")
  IA++;

}
//console.log(military);

//THIRD QUESTION
var job = prompt('Was my last job at Top Pot?');

if (job.toLowerCase() == 'no') {
  alert("Correct");
  CA++;

}
else {
  alert("Incorrect")
  IA++;

}
//console.log(job);

//FOURTH QUESTION
var diploma = prompt('Did I get my high school diploma at R.J. Reynolds?');

if (diploma.toLowerCase() == 'no') {
  alert("Correct");
  CA++;

}
else {
  alert("Incorrect")
  IA++;

}
//console.log(diploma);

//FIFTH QUESTION
var goal = prompt('Is one of my goals to buy a cadillac?');

if (goal.toLowerCase() == 'no') {
  alert("Correct");
  CA++;

}
else {
  alert("Incorrect")
  IA++;

}
//console.log(goal);

//SIXTH QUESTION
var Japan = prompt('Did I serve in Japan?');

if (Japan.toLowerCase() == 'yes') {
  alert("Correct");
  CA++;

}
else {
  alert("Incorrect")
  IA++;
}
//console.log(Japan);

var correct;
var incorrect;
if (CA == 0 || CA > 1) {
  correct = "answers";
}
else {
  correct = "answer";
}

if (IA == 0 || IA > 1) {
  incorrect = "answers";
}
else {
  incorrect = "answer";
}
*/
var trys = 0;
var dive = prompt('How deep have I ever dove underwater, it\'s a number between 130\' and 170\'?');

while (trys < 4) {
  trys++;
}

if (trys === 4) {
  dive = alert('Looks like you didn\'t guess correctly, I dove down to 164\'');
}

else if (dive > feet) {
  dive = prompt('Too high, let\'s bring it down a bit.');
} 
else if (dive < feet) {
  dive = prompt('Little higher than that, keep trying.');
} 
else if (dive === 11) {
  alert("Exactly right!");
    trys++;
    break;
  }

alert('The secret number was ' + dive + '.');

/* if (myName === true) {
  console.log('true');
} 
else {
  console.log('false');
}
var from = prompt('Where are you from?');
 var fruit = prompt('What is your favorite fruit?');
 var show = prompt('What is your favorite show to watch?');
 console.log('Hello! Welcome, ' + name + ', I like to eat a ' + fruit + ' and watch ' + show + ' in ' + from + ' also!');

 alert('Hello! Welcome, ' + name + ', I like to eat a ' + fruit + ' and watch ' + show + ' in ' + from + ' also!');

// logical operators
var myBool = true;
var anotherBool = false;
var thirdBool = true;


if (myBool && thirdBool) {
  console.log('myBool and thirdBool are true');
}
else if (myBool || anotherBool) {
  console.log('myBool OR anotherBool is true');
}
else if (thirdBool) {
  console.log('thirdBool is true');
}
*/