import { generateAdditionEasyQuestion, generateAdditionMediumQuestion, generateAdditionHardQuestion } from "./calculation_types/addition.mjs";
import { generateSubtractionEasyQuestion, generateSubtractionMediumQuestion, generateSubtractionHardQuestion } from "./calculation_types/subtraction.mjs";
import { generateMultiplicationEasyQuestion, generateMultiplicationMediumQuestion, generateMultiplicationHardQuestion } from "./calculation_types/multiplication.mjs";
import { generateDivisionEasyQuestion, generateDivisionMediumQuestion, generateDivisionHardQuestion } from "./calculation_types/division.mjs";

let correctAnswer;
let timer, quizStartTime;
const timeLimit = getTimeLimit();
let correctAnswers = 0;
let totalTimeSpent = 0;

function getTimeLimit() {
    return localStorage.getItem("timeLimit"); 
}

function getQuestionType() {
    return localStorage.getItem("quizType") || "addition"; // Default to addition
}

function getDifficulty() {
    return localStorage.getItem("difficulty") || "easy"; // Default to easy
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
            if (difficulty === "easy") correctAnswer = generateAdditionEasyQuestion();
            else if (difficulty === "medium") correctAnswer = generateAdditionMediumQuestion();
            else if (difficulty === "hard") correctAnswer = generateAdditionHardQuestion();
            break;

        case "subtraction":
            if (difficulty === "easy") correctAnswer = generateSubtractionEasyQuestion();
            else if (difficulty === "medium") correctAnswer = generateSubtractionMediumQuestion();
            else if (difficulty === "hard") correctAnswer = generateSubtractionHardQuestion();
            break;

        case "multiplication":
            if (difficulty === "easy") correctAnswer = generateMultiplicationEasyQuestion();
            else if (difficulty === "medium") correctAnswer = generateMultiplicationMediumQuestion();
            else if (difficulty === "hard") correctAnswer = generateMultiplicationHardQuestion();
            break;
        case "division":
            if (difficulty === "easy") correctAnswer = generateDivisionEasyQuestion();
            else if (difficulty === "medium") correctAnswer = generateDivisionMediumQuestion();
            else if (difficulty === "hard") correctAnswer = generateDivisionHardQuestion();
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

window.mainPage = mainPage; // Expose function to HTML
window.endQuiz = endQuiz; // Expose function to HTML

export {
    generateQuestion,
    checkAnswer,
    startTimer,
    endQuiz,
    mainPage
};