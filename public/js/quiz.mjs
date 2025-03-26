import { generateAdditionEasyQuestion, generateAdditionMediumQuestion, generateAdditionHardQuestion } from "./addition.mjs";

let correctAnswer;
let timer, quizStartTime;
const timeLimit = 10; // Time limit per question in seconds
let correctAnswers = 0;
let totalTimeSpent = 0;

function getQuestionType() {
    return localStorage.getItem("quizType") || "addition"; // Default to addition
}

function getDifficulty() {
    return localStorage.getItem("difficulty") || "easy"; // Default to easy
}

function generateSubtractionEasyQuestion() {
    num1 = Math.floor(Math.random() * 10);    // Random number between 0 and 9
    num2 = Math.floor(Math.random() * 10);
    correctAnswer = num1 - num2;
    document.getElementById("question").textContent = `${num1} - ${num2}`;
}

function generateSubtractionMediumQuestion() {
    num1 = Math.floor(Math.random() * 10);    // Random number between 0 and 9
    num2 = Math.floor(Math.random() * 100);
    correctAnswer = num1 - num2;
    document.getElementById("question").textContent = `${num1} - ${num2}`;
}

function generateSubtractionHardQuestion() {
    num1 = Math.floor(Math.random() * 100);    // Random number between 0 and 9
    num2 = Math.floor(Math.random() * 100);
    correctAnswer = num1 - num2;
    document.getElementById("question").textContent = `${num1} - ${num2}`;
}

function generateMultiplicationEasyQuestion() {
    num1 = Math.floor(Math.random() * 10); // Random number between 0 and 9
    num2 = Math.floor(Math.random() * 10); // Random number between 0 and 9
    correctAnswer = num1 * num2;
    document.getElementById("question").textContent = `${num1} x ${num2}`;
}

function generateMultiplicationMediumQuestion() {
    num1 = Math.floor(Math.random() * 100); // Random number between 0 and 99
    num2 = Math.floor(Math.random() * 10); // Random number between 0 and 9
    correctAnswer = num1 * num2;
    document.getElementById("question").textContent = `${num1} x ${num2}`;
}

function generateMultiplicationHardQuestion() {
    num1 = Math.floor(Math.random() * 100); // Random number between 0 and 99
    num2 = Math.floor(Math.random() * 100); // Random number between 0 and 99
    correctAnswer = num1 * num2;
    document.getElementById("question").textContent = `${num1} x ${num2}`;
}

function generateDivisionEasyQuestion() {
    num2 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 9
    num1 = num2 * (Math.floor(Math.random() * 10) + 1); // Random number between 1 and 9
    correctAnswer = num1 / num2;
    document.getElementById("question").textContent = `${num1} / ${num2}`;
}

function generateDivisionMediumQuestion() {
    num2 = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 99
    num1 = num2 * (Math.floor(Math.random() * 30) + 1); // Random number between 1 and 30
    correctAnswer = num1 / num2;
    document.getElementById("question").textContent = `${num1} / ${num2}`;
}

function generateDivisionHardQuestion() {
    num2 = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 99
    num1 = num2 * (Math.floor(Math.random() * 100) + 1); // Random number between 1 and 99
    correctAnswer = num1 / num2;
    document.getElementById("question").textContent = `${num1} / ${num2}`;
}

function generateQuestion() {
    if (!quizStartTime) quizStartTime = Date.now(); // Start tracking time on first question

    let operation = getQuestionType();
    const difficulty = getDifficulty();

    if (operation === "mixed") {
        const types = ["addition", "subtraction", "multiplication", "division"];
        operation = types[Math.floor(Math.random() * types.length)];
    }

    switch (operation) {
        case "addition":
            if (difficulty === "easy") generateAdditionEasyQuestion();
            else if (difficulty === "medium") generateAdditionMediumQuestion();
            else if (difficulty === "hard") generateAdditionHardQuestion();
            break;

        case "subtraction":
            if (difficulty === "easy") generateSubtractionEasyQuestion();
            else if (difficulty === "medium") generateSubtractionMediumQuestion();
            else if (difficulty === "hard") generateSubtractionHardQuestion();
            break;

        case "multiplication":
            if (difficulty === "easy") generateMultiplicationEasyQuestion();
            else if (difficulty === "medium") generateMultiplicationMediumQuestion();
            else if (difficulty === "hard") generateMultiplicationHardQuestion();
            break;
        case "division":
            if (difficulty === "easy") generateDivisionEasyQuestion();
            else if (difficulty === "medium") generateDivisionMediumQuestion();
            else if (difficulty === "hard") generateDivisionHardQuestion();
            break;
    }

    document.getElementById("answer").value = ""; // Clear input
    document.getElementById("feedback").textContent = ""; // Clear feedback
    document.getElementById("timer").textContent = `Time left: ${timeLimit}s`;

    document.getElementById("answer").focus(); // Auto-focus input field

    startTimer();
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("answer").value);

    if (userAnswer === correctAnswer) {
        // document.getElementById("feedback").textContent = "✅ Correct!";
        // document.getElementById("feedback").style.color = "green";
        correctAnswers++; // Increase correct answer count
        clearTimeout(timer); // Stop timer
        setTimeout(generateQuestion, 100); // Load new question after 100ms
    }
}

function startTimer() {
    let timeLeft = timeLimit;
    clearInterval(timer);

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById("timer").textContent = `Time left: ${timeLeft}s`;
        } else {
            clearInterval(timer);
            document.getElementById("feedback").textContent = "⏳ Time's up! New question.";
            document.getElementById("feedback").style.color = "orange";
            setTimeout(generateQuestion, 1000);
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timer);

    // Calculate total time spent
    totalTimeSpent = Math.floor((Date.now() - quizStartTime) / 1000); // Convert ms to seconds

    // Store stats in localStorage
    localStorage.setItem("correctAnswers", correctAnswers);
    localStorage.setItem("totalTimeSpent", totalTimeSpent);

    // alert("Quiz Ended!");
    window.location.href = "/results"; // Redirect to results page
}

// Listen for changes in input field (checks answer as user types)
document.getElementById("answer").addEventListener("input", checkAnswer);

// Initialize first question on page load
window.onload = generateQuestion;

function mainPage() {
    window.location.href = "/";
}

