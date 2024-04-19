/* console.log('start');

document.getElementById('start').addEventListener('click', createQuestions()); */

function createQuestions() {
    /* Array of questions to ask */
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

function displayQuestion(maxQuestions) {

    let quiz = document.getElementById("question");
    let numQuestionsDisplayed = 0;
    // Add the question to the quiz
    let question = createQuestions()[0];
    let questionDiv = document.createElement("div");
    questionDiv.innerHTML = question;
    quiz.appendChild(questionDiv);

    checkAnswer();
}




// Call the function to display the quiz
displayQuestion(9);

function checkAnswer() {
    let userAnswer = document.getElementById('answer');
    let actualAnswer = createQuestions()[1];
    console.log(actualAnswer);
    if (userAnswer === actualAnswer) {
        console.log('correct answer');
    } else {
        console.log('incorrect answer');
    }

};

function correctScore() { };
