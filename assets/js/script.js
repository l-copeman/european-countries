/* jshint esversion: 11 */

let questionNumberIndex = 0;
let shuffleQuestions = createQuestions();
let startPage = document.getElementById('start-page');
let questionPage = document.getElementById('question-page');
let score = 0;

// Add event listener to to fire when the HTML docuement has fully loaded and parsed 
document.addEventListener("DOMContentLoaded", (event) => {
    // Add event listener to start button and name input to begin game
    const click = document.getElementById('start');
    const name = document.getElementById('name');
    click.addEventListener('click', () => {
        if (name.value == "") {
            alert('Please enter a name!');
        } else {
            displayQuestion(shuffleQuestions);
            startPage.classList.add('hide');
            questionPage.classList.remove('hide');
        }
    });
    document.getElementById("answer").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });
    const submit = document.getElementById('submit');
    submit.addEventListener('click', () => {
        checkAnswer();
    });
});

/**
 * Creates a random array of questions from the array given
 */
function createQuestions() {
    // Array of questions to ask
    const questionsCities =
        [
            {
                question: 'What is the capital of France?',
                answer: 'paris',
            },
            {
                question: 'What is the capital of Spain?',
                answer: 'madrid',
            },
            {
                question: 'What is the capital of Hungary?',
                answer: 'budapest',
            },
            {
                question: 'What is the capital of Finland?',
                answer: 'helsinki',
            },
            {
                question: 'What is the capital of Norway?',
                answer: 'oslo',
            },
            {
                question: 'What is the capital of Bulgaria?',
                answer: 'sofia',
            },
            {
                question: 'What is the capital of Austria?',
                answer: 'vienna',
            },
            {
                question: 'What is the capital of Croatia?',
                answer: 'zagreb',
            },
            {
                question: 'What is the capital of Latvia?',
                answer: 'riga',
            },
            {
                question: 'What is the capital of Slovenia?',
                answer: 'ljubljana',
            },
            {
                question: 'What is the capital of Russia?',
                answer: 'moscow',
            },
            {
                question: 'What is the capital of United Kingdom?',
                answer: 'london',
            },
            {
                question: 'What is the capital of Ireland?',
                answer: 'dublin',
            },
            {
                question: 'What is the capital of Ukraine?',
                answer: 'kiev',
            },
            {
                question: 'What is the capital of Romania?',
                answer: 'bucharest',
            },
            {
                question: 'What is the capital of Germany?',
                answer: 'berlin',
            },
            {
                question: 'What is the capital of Netherlands?',
                answer: 'amsterdam',
            },
            {
                question: 'What is the capital of Greece?',
                answer: 'athens',
            },
            {
                question: 'What is the capital of Serbia?',
                answer: 'belgrade',
            },
            {
                question: 'What is the capital of Switzerland?',
                answer: 'bern',
            },
            {
                question: 'What is the capital of Belgium?',
                answer: 'brussels',
            },
            {
                question: 'What is the capital of Portugal?',
                answer: 'lisbon',
            },
            {
                question: 'What is the capital of Cyprus?',
                answer: 'nicosia',
            },
        ];

    let randomArray = [];
    while (questionsCities.length !== 0) {
        let randomIndex = Math.floor(Math.random() * questionsCities.length);
        randomArray.push(questionsCities[randomIndex]);
        questionsCities.splice(randomIndex, 1);
    }
    return randomArray;
}

/**
 * Displays question
 */
function displayQuestion(shuffleQuestions) {
    document.getElementById('answer').value = '';
    let currentQuestion = shuffleQuestions[questionNumberIndex];
    let questionDiv = document.getElementById('question');
    questionDiv.innerHTML = currentQuestion.question;
}

/**
 * Checks whether users answer matches the actual answer
 */
function checkAnswer() {
    let userAnswer = document.getElementById('answer').value;
    //Change users answer to lowercase, to compare with actual answer which is also lowercase
    let lowerCase = userAnswer.toLowerCase();
    let actualAnswer = shuffleQuestions[questionNumberIndex].answer;
    // To prevent an empty answer box being submitted 
    if (userAnswer == "") {
        alert('Please enter an answer!');
        return;
    } else {
        displayQuestion(shuffleQuestions);
    }
    if (lowerCase === actualAnswer) {
        correctTally();
    } else {
        incorrectTally();
    }
    if (questionNumberIndex < 9) {
        questionNumberIndex++;
        displayQuestion(shuffleQuestions);
    } else {
        finalScore();
    }
}

/**
 * Adds 1 to the current correct score tally from the DOM
 */
function correctTally() {
    document.getElementById("correct-score").innerText = ++score;
}

/**
 * Adds 1 to the current incorrect score tally from the DOM
 */
function incorrectTally() {
    let incorrectScore = parseInt(document.getElementById("incorrect-score").innerText);
    document.getElementById("incorrect-score").innerText = ++incorrectScore;
}

/**
 * Loads results page, showing users final score
 */
function finalScore() {
    const resultsPage = document.getElementById('results-page');
    resultsPage.classList.remove('hide');
    questionPage.classList.add('hide');
    // Add final score to completion message
    document.getElementById('final-score').innerText = score;
    // Take users name to personalise completion message
    const name = document.getElementById('name').value;
    const capsName = name.toUpperCase();
    const insertName = document.getElementById('insert-name');
    insertName.innerHTML = capsName;
}
