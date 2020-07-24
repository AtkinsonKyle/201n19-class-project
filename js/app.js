'use strict';

alert("You are about to be challenged")
var CA = 0;
var IA = 0;

var myName = prompt('Is my name kyle?');

if (myName.toLowerCase() == 'yes') {
  alert("Correct");
  CA++;
}
else {
  alert("Incorrect")
  IA++;

}
console.log(myName + ', my name is Kyle');

var military = prompt('Did I serve in the United States Coast Guard?');

if (military.toLowerCase() == 'no') {
  alert("Correct");
  CA++;

}
else {
  alert("Incorrect")
  IA++;

}
console.log(military);

var job = prompt('Was I at Top Pot last?');

if (job.toLowerCase() == 'no') {
  alert("Correct");
  CA++;

}
else {
  alert("Incorrect")
  IA++;

}
console.log(job);

var diploma = prompt('Did I get my high school diploma at R.J. Reynolds?');

if (diploma.toLowerCase() == 'no') {
  alert("Correct");
  CA++;

}
else {
  alert("Incorrect")
  IA++;

}
console.log(diploma);

var goal = prompt('Is one of my goals to buy a cadillac?');

if (goal.toLowerCase() == 'no') {
  alert("Correct");
  CA++;

}
else {
  alert("Incorrect")
  IA++;

}
console.log(goal);

var Japan = prompt('Did I serve in Japan?');

if (Japan.toLowerCase() == 'yes') {
  alert("Correct");
  CA++;

}
else {
  alert("Incorrect")
  IA++;
}
console.log(Japan);

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


/* if (myName === true) {
  console.log('true');
} else {
  console.log('false');
}
/* var from = prompt('Where are you from?');
 var fruit = prompt('What is your favorite fruit?');
 var show = prompt('What is your favorite show to watch?');
 console.log('Hello! Welcome, ' + name + ', I like to eat a ' + fruit + ' and watch ' + show + ' in ' + from + ' also!');

 alert('Hello! Welcome, ' + name + ', I like to eat a ' + fruit + ' and watch ' + show + ' in ' + from + ' also!'); */

// logical operators
/* var myBool = true;
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
} */