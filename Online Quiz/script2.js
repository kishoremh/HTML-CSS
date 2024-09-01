const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 1
    },
    {
        question: "What is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        correct: 1
    },
    // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionEl = document.getElementById('question');
    const optionsEl = document.querySelectorAll('.option');

    const currentQuizData = quizData[currentQuestion];
    
    questionEl.innerText = currentQuizData.question;
    optionsEl.forEach((option, index) => {
        option.innerText = currentQuizData.options[index];
    });

    document.getElementById('next-button').style.display = 'none';
    document.getElementById('result-container').style.display = 'none';
}

function checkAnswer(selectedOption) {
    const currentQuizData = quizData[currentQuestion];
    const resultEl = document.getElementById('result');
    
    if (selectedOption === currentQuizData.correct) {
        resultEl.innerText = "Correct!";
        score++;
    } else {
        resultEl.innerText = `Wrong! The correct answer is ${currentQuizData.options[currentQuizData.correct]}.`;
    }

    document.getElementById('next-button').style.display = 'block';
    document.getElementById('result-container').style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<h2>Your score is ${score} out of ${quizData.length}</h2>`;
}

window.onload = loadQuestion;
