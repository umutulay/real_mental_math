import { generateQuestion as getNewQuestion} from "./generate_question.mjs";

let correctAnswer;
let timer, quizStartTime;
const timeLimit = getTimeLimit();
const timerType = getTimerType();
let correctAnswers = 0;
let totalTimeSpent = 0;
let totalTimerStarted = false;

function getTimeLimit() {
    return localStorage.getItem("timeLimit"); 
}

function getTimerType() {
    return localStorage.getItem("timerType"); 
}

function generateQuestion() {
    if (!quizStartTime) quizStartTime = Date.now();
    correctAnswer = getNewQuestion();
    document.getElementById("answer").value = "";
    document.getElementById("feedback").textContent = "";
    document.getElementById("answer").focus();

    if (timerType === "per-question") {
        document.getElementById("timer").textContent = `Time left: ${timeLimit}s`;
        startTimer(); // restart per-question timer
    } else if (timerType === "total-time" && !totalTimerStarted) {
        document.getElementById("timer").textContent = `Time left: ${timeLimit}s`;
        startTimer(); // start total-time timer once
        totalTimerStarted = true;
    }
}


function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("answer").value);
    if (userAnswer === correctAnswer) {
        correctAnswers++;
        if (timerType === "per-question") {
            clearInterval(timer);
        }
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
            if (timerType === "per-question") {
                setTimeout(generateQuestion, 1000);
            } else if (timerType === "total-time") {
                endQuiz();
            }
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