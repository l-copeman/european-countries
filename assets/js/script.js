// Add event listener to to fire when the HTML docuement has fully loaded and parsed 

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    // Add event listener to start button and name input to begin game
    let click = document.getElementById('start');
    let name = document.getElementById('name');
    let hide = document.getElementsByClassName('hide');
    click.addEventListener('click', () => {
        if (name.value == "") {
            alert ('Please enter a name!')
        } else {
            displayQuestion()
        }})

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
                answer: 'Paris',
            },
            {
                question: 'What is the capital of Spain?',
                answer: 'Madrid',
            },
            {
                question: 'What is the capital of Hungary?',
                answer: 'Budapest',
            },
            {
                question: 'What is the capital of Finland?',
                answer: 'Helsinki',
            },
            {
                question: 'What is the capital of Norway?',
                answer: 'Oslo',
            },
            {
                question: 'What is the capital of Bulgaria?',
                answer: 'Sofia',
            },
            {
                question: 'What is the capital of Austria?',
                answer: 'Vienna',
            },
            {
                question: 'What is the capital of Croatia?',
                answer: 'Zagreb',
            },
            {
                question: 'What is the capital of Latvia?',
                answer: 'Riga',
            },
            {
                question: 'What is the capital of Slovenia?',
                answer: 'Ljubljana',
            },
            {
                question: 'What is the capital of Russia?',
                answer: 'Moscow',
            },
            {
                question: 'What is the capital of United Kingdom?',
                answer: 'London',
            },
            {
                question: 'What is the capital of Ireland?',
                answer: 'Dublin',
            },
            {
                question: 'What is the capital of Ukraine?',
                answer: 'Kiev',
            },
            {
                question: 'What is the capital of Romania?',
                answer: 'Bucharest',
            },
            {
                question: 'What is the capital of Germany?',
                answer: 'Berlin',
            },
            {
                question: 'What is the capital of Netherlands?',
                answer: 'Amsterdam',
            },
        ];

    let randomArray = [];
    while (questionsCities.length !== 0) {
        let randomIndex = Math.floor(Math.random() * questionsCities.length);
        randomArray.push(questionsCities[randomIndex]);
        questionsCities.splice(randomIndex, 1);
    }

    let randomQuestion = randomArray[0].question;
    console.log(randomQuestion);

    let randomAnswer = randomArray[0].answer;
    console.log(randomAnswer);

    return [randomQuestion, randomAnswer];

}

/**
 * Creates div for questions
 */
function displayQuestionDiv() {

    let questionElement = document.getElementById('question');
    let questionDiv = document.createElement('div');

    questionElement.appendChild(questionDiv);

    console.log('question div created');

    return questionDiv;

}

/**
 * Displays question
 */
function displayQuestion() {

    let question = createQuestions()[0];
    displayQuestionDiv().innerHTML = question;

    createAnswerDiv();
}

/**
 * Creates div to enter answer
 */
function createAnswerDiv() {

    let answer = document.getElementById('answer');
    let answerDiv = document.createElement('div');
    answer.appendChild(answerDiv);

    console.log('answer Div created');

    checkAnswer();

}

/**
 * Checks whether users answer matches the actual answer
 */
function checkAnswer() {

    let userAnswer = document.getElementById('answer');
    let actualAnswer = createQuestions()[1];
    
    console.log(actualAnswer);

    if (userAnswer === actualAnswer) {
        console.log('correct answer');
        correctTally();
    } else {
        console.log('Incorrect answer');
        incorrectTally();
    }

};

/**
 * Adds 1 to the current correct score tally from the DOM
 */
function correctTally() {

    let score = parseInt(document.getElementById("correct-score").innerText);
    document.getElementById("correct-score").innerText = ++score;

};

/**
 * Adds 1 to the current incorrect score tally from the DOM
 */
function incorrectTally() {
    
    console.log('incorrectTallyAdded')
    
    let incorrectScore = parseInt(document.getElementById("incorrect-score").innerText);
    document.getElementById("incorrect-score").innerText = ++incorrectScore;

};

/**
 * Calculates final total of correct answers
 */
function finalScore() { };
