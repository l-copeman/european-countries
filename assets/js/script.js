let questionNumberIndex = 0
let shuffleQuestions = createQuestions();

// Add event listener to to fire when the HTML docuement has fully loaded and parsed 
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    // Add event listener to start button and name input to begin game
    const click = document.getElementById('start');
    const name = document.getElementById('name');
    const hide = document.getElementsByClassName('hide');
    click.addEventListener('click', () => {
        if (name.value == "") {
            alert('Please enter a name!')
        } else {

            console.log(shuffleQuestions);
            displayQuestion(shuffleQuestions)
        }
    })

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
    console.log(randomArray);
    return randomArray;

    // let randomQuestion = randomArray[0].question;
    // console.log(randomQuestion);

    // let randomAnswer = randomArray[0].answer;
    // console.log(randomAnswer);

    // return [randomQuestion, randomAnswer];

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
function displayQuestion(shuffleQuestions) {

    let currentQuestion = shuffleQuestions[questionNumberIndex];
    console.log(currentQuestion);
    console.log(currentQuestion.question);
    console.log(currentQuestion.answer);
        displayQuestionDiv().innerHTML = currentQuestion.question;

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

   // checkAnswer();

}

const submit = document.getElementById('submit');
submit.addEventListener('click', checkAnswer());

/**
 * Checks whether users answer matches the actual answer
 */
function checkAnswer() {

    let userAnswer = document.getElementById('answer');
    let actualAnswer = shuffleQuestions[questionNumberIndex];
        console.log(actualAnswer);

    if (userAnswer === actualAnswer) {
        console.log('correct answer');
        correctTally();
    } else {
        console.log('Incorrect answer');
        incorrectTally();
    }

    questionNumberIndex++;
    displayQuestion;

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
