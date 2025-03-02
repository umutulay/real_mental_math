let num1, num2, correctAnswer;
let timer, quizStartTime;
const timeLimit = 10; // Time limit per question in seconds
let correctAnswers = 0;
let totalTimeSpent = 0;

function getQuestionType() {
    return localStorage.getItem("quizType") || "addition"; // Default to addition
}

function generateAdditionQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 + num2;
    updateQuestionText(`${num1} + ${num2}`);
}

function generateSubtractionQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 - num2;
    updateQuestionText(`${num1} - ${num2}`);
}

function generateMultiplicationQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 * num2;
    updateQuestionText(`${num1} * ${num2}`);
}

function generateDivisionQuestion() {
    num2 = Math.floor(Math.random() * 10) + 1;
    num1 = num2 * (Math.floor(Math.random() * 10) + 1); // Ensure divisibility
    correctAnswer = num1 / num2;
    updateQuestionText(`${num1} ÷ ${num2}`);
}

function generateMixedQuestion() {
    const types = ["addition", "subtraction", "multiplication", "division"];
    localStorage.setItem("quizType", types[Math.floor(Math.random() * types.length)]);
    generateQuestion(); // Recursively call generateQuestion with new type
}

function updateQuestionText(questionText) {
    document.getElementById("question").textContent = `What is ${questionText}?`;
}

function generateQuestion() {
    if (!quizStartTime) quizStartTime = Date.now(); // Start tracking time on first question

    const operation = getQuestionType();

    switch (operation) {
        case "addition":
            generateAdditionQuestion();
            break;
        case "subtraction":
            generateSubtractionQuestion();
            break;
        case "multiplication":
            generateMultiplicationQuestion();
            break;
        case "division":
            generateDivisionQuestion();
            break;
        case "mixed":
            generateMixedQuestion();
            return;
    }

    document.getElementById("answer").value = ""; // Clear input
    document.getElementById("feedback").textContent = ""; // Clear feedback
    document.getElementById("timer").textContent = `Time left: ${timeLimit}s`;

    document.getElementById("answer").focus(); // Auto-focus input field

    startTimer();
}

// Start first question on page load
window.onload = generateQuestion;
