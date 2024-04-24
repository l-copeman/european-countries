let questionNumberIndex = 0;
let shuffleQuestions = createQuestions();

// let introPage = document.getElementsByClassName('start-page');

let startPage = document.getElementById('start-page');
let questionPage = document.getElementById('question-page');
// let resultsPage = document.getElementsByClassName('results-page');
console.log(shuffleQuestions[1]);
console.log(shuffleQuestions[2]);
console.log(shuffleQuestions[3]);

// Add event listener to to fire when the HTML docuement has fully loaded and parsed 
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    // Add event listener to start button and name input to begin game
    const click = document.getElementById('start');
    const name = document.getElementById('name');
    //const hide = document.getElementsByClassName('hide');
    click.addEventListener('click', () => {
        if (name.value == "") {
            alert('Please enter a name!');
        } else {

            console.log(shuffleQuestions);
            displayQuestion(shuffleQuestions);

            // document.getElementsByClassName('start-page').forEach(el=>el.classList.add('hide'));
            // document.querySelectorAll('.question-page').forEach(el=>el.classList.remove('hide'));

            startPage.classList.add('hide');
            questionPage.classList.remove('hide');

        }
    })

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
// function displayQuestionDiv() {

//     let questionElement = document.getElementById('question');
//     let questionDiv = document.createElement('div');

//     questionElement.appendChild(questionDiv);

//     console.log('question div created');

//     return questionDiv;

// }

/**
 * Displays question
 */
function displayQuestion(shuffleQuestions) {

    document.getElementById('answer').value = '';

    console.log(shuffleQuestions);

    let currentQuestion = shuffleQuestions[questionNumberIndex];
    console.log(currentQuestion, 'test');
    console.log(currentQuestion.question);
    console.log(currentQuestion.answer);
    let questionDiv = document.getElementById('question');
    questionDiv.innerHTML = currentQuestion.question;
    // displayQuestionDiv().innerHTML = currentQuestion.question;

    // createAnswerDiv();
}

/**
 * Creates div to enter answer
 */
// function createAnswerDiv() {

//     let answer = document.getElementById('answer');
//     let answerDiv = document.createElement('div');
//     answer.appendChild(answerDiv);

//     console.log('answer Div created');

//     // checkAnswer();

// }

// const submit = document.getElementById('submit');
// submit.addEventListener('click', () => {
//     checkAnswer();
// });

/**
 * Checks whether users answer matches the actual answer
 */
function checkAnswer() {

    let userAnswer = document.getElementById('answer').value;
    let lowerCase = userAnswer.toLowerCase();
    console.log('lower-case', lowerCase);
    let actualAnswer = shuffleQuestions[questionNumberIndex].answer;
    console.log('This is the actual answer', actualAnswer);
    console.log(`This is what the user entered ${userAnswer}`);

    if (lowerCase === actualAnswer) {
        console.log('correct answer');
        correctTally();
    } else {
        console.log('Incorrect answer');
        incorrectTally();
    }

    if (questionNumberIndex < 9) {
        questionNumberIndex++;
        console.log(questionNumberIndex, 'test');
        displayQuestion(shuffleQuestions);
    } else {
        finalScore();
        console.log(finalScore());
    }


};

let score = 0;

/**
 * Adds 1 to the current correct score tally from the DOM
 */
function correctTally() {

    // let score = parseInt(document.getElementById("correct-score").innerText);
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
function finalScore() {

    let resultsPage = document.getElementById('results-page');
    resultsPage.classList.remove('hide');
    questionPage.classList.add('hide');

   // let finalTally = document.getElementById('correct-score').value;
     document.getElementById('final-score').innerText = score;

    // let correctTally() =  

    //console.log(finalTally, 'final-score');



    const name = document.getElementById('name').value;
    console.log('users name is', name);
    const insertName = document.getElementById('insert-name');
    insertName.innerHTML = name

   // alert(`Well done ${name} you scored ${score}`);

};
