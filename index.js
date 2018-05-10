//This retrieves the question from data.js and prints it to the screen//
const dataNode = document.getElementById('question');
dataNode.textContent= questions.first.question;

//This retrieves the possibleAnswer from data.js and prints it to the screen//
const answerOne = document.getElementById('answerOneLabel');
answerOne.innerHTML = questions.first.possibleAnswer[0];

const answerTwo = document.getElementById('answerTwoLabel');
answerTwo.innerHTML = questions.first.possibleAnswer[1];

const answerThree = document.getElementById('answerThreeLabel');
answerThree.innerHTML = questions.first.possibleAnswer[2];

const answerFour = document.getElementById('answerFourLabel');
answerFour.innerHTML = questions.first.possibleAnswer[3];
