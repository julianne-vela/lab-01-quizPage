// import functions and grab DOM elements
import { countAsAYes } from './utils.js';


const quizButton = document.getElementById('quiz-button');
const resultsDiv = document.getElementById('results-div');
// const infoSection = document.getElementById('info');
// const listSection = document.getElementById('lists');

// initialize state
let correctAnswers = 0;

// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {
    alert('Welcome to the Alchemy Campaign!');

    const confirmation = confirm('Are you sure you want to continue this adventure?');

    if (!confirmation) return;

    const firstName = prompt('What is your characters first name?');
    const lastName = prompt('What is your characters last name?');
    const firstAnswer = prompt('Does Vin Diesel play D&D?');
    const secondAnswer = prompt('Was Dungeons and Dragons initially created in 2000?');
    const thirdAnswer = prompt('Dont you want to play Dungeons and Dragons now?');

    if (countAsAYes(firstAnswer)) correctAnswers++;
    if (!countAsAYes(secondAnswer)) correctAnswers++;
    if (countAsAYes(thirdAnswer)) correctAnswers++;

    const resultsStr = `Hello ${firstName} ${lastName}! Congrats! You've completed the quiz and got ${correctAnswers} answers correct!`;

    resultsDiv.textContent = resultsStr;
});