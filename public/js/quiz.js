import { generateAdditionEasyQuestion, generateAdditionMediumQuestion, generateAdditionHardQuestion } from "/js/operations/addition.js";
import { generateSubtractionQuestion } from "/js/operations/subtraction.js";
import { generateMultiplicationQuestion } from "/js/operations/multiplication.js";
import { generateDivisionQuestion } from "/js/operations/division.js";

let correctAnswer;
let timer, quizStartTime;
const timeLimit = 10;
let correctAnswers = 0;
let totalTimeSpent = 0;

function getQuestionType() {
    return localStorage.getItem("quizType") || "addition";
}

function getDifficulty() {
    return localStorage.getItem("difficulty") || "easy";
}

function generateQuestion() {
    if (!quizStartTime) quizStartTime = Date.now();

    let operation = getQuestionType();
    let difficulty = getDifficulty();

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
            correctAnswer = generateSubtractionQuestion();
            break;
        case "multiplication":
            correctAnswer = generateMultiplicationQuestion();
            break;
        case "division":
            correctAnswer = generateDivisionQuestion();
            break;
    }

    document.getElementById("answer").value = "";
    document.getElementById("feedback").textContent = "";
    document.getElementById("timer").textContent = `Time left: ${timeLimit}s`;
    document.getElementById("answer").focus();
    
    startTimer();
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("answer").value);

    if (userAnswer === correctAnswer) {
        correctAnswers++;
        clearTimeout(timer);
        setTimeout(generateQuestion, 100);
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
    totalTimeSpent = Math.floor((Date.now() - quizStartTime) / 1000);
    localStorage.setItem("correctAnswers", correctAnswers);
    localStorage.setItem("totalTimeSpent", totalTimeSpent);
    window.location.href = "/results";
}

document.getElementById("answer").addEventListener("input", checkAnswer);
window.onload = generateQuestion;

function mainPage() {
    window.location.href = "/";
}
