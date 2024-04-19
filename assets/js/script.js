console.log('start');

document.getElementById('start').addEventListener('click', createQuestions());

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
    let randomIndex = Math.floor(Math.random() * questionsCities.length);
    let random = console.log(questionsCities[randomIndex]);
    return console.log(random);
  }



function displayQuestion() { };
function checkAnswer() { };
function correctScore() { };
