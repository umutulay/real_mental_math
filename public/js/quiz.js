let num1, num2, correctAnswer;
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

function generateAdditionEasyQuestion() {
    num1 = Math.floor(Math.random() * 11); // Random number between 0 and 10
    num2 = Math.floor(Math.random() * 11);
    correctAnswer = num1 + num2;
    document.getElementById("question").textContent = `${num1} + ${num2}`;
}

function generateAdditionMediumQuestion() {
    num1 = Math.floor(Math.random() * 11); // Random number between 0 and 10
    num2 = Math.floor(Math.random() * 101); // Random number between 0 and 100
    correctAnswer = num1 + num2;
    document.getElementById("question").textContent = `${num1} + ${num2}`;
}

function generateAdditionHardQuestion() {
    num1 = Math.floor(Math.random() * 101); // Random number between 0 and 100
    num2 = Math.floor(Math.random() * 101);
    correctAnswer = num1 + num2;
    document.getElementById("question").textContent = `${num1} + ${num2}`;
}

function generateSubstractionQuestion() {
    num1 = Math.floor(Math.random() * 101); // Random number between 0 and 100
    num2 = Math.floor(Math.random() * 101);
    correctAnswer = num1 - num2;
    document.getElementById("question").textContent = `${num1} - ${num2}`;
}

function generateMultiplicationQuestion() {
    num1 = Math.floor(Math.random() * 101); // Random number between 0 and 100
    num2 = Math.floor(Math.random() * 11); // Random number between 0 and 10
    correctAnswer = num1 * num2;
    document.getElementById("question").textContent = `${num1} x ${num2}`;
}

function generateDivisionQuestion() {
    num2 = Math.floor(Math.random() * 101) + 1; // Random number between 1 and 100
    num1 = num2 * (Math.floor(Math.random() * 30) + 1); // Random number between 1 and 30
    correctAnswer = num1 / num2;
    document.getElementById("question").textContent = `${num1} / ${num2}`;
}


function generateQuestion() {
    if (!quizStartTime) quizStartTime = Date.now(); // Start tracking time on first question

    operation = getQuestionType();
    difficulty = getDifficulty();

    if (operation === "mixed") {
        const types = ["addition", "substraction", "multiplication", "division"];
        operation = types[Math.floor(Math.random() * types.length)];
    }

    switch (operation) {
        case "addition":
            if (difficulty === "easy") {
                generateAdditionEasyQuestion();
                break;
            }
            if (difficulty === "medium") {
                generateAdditionMediumQuestion();
                break;
            }
            if (difficulty === "hard") {
                generateAdditionHardQuestion();
                break;
            }
         case "substraction":
            generateSubstractionQuestion();
            break;
        case "multiplication":
            generateMultiplicationQuestion();
            break;
        case "division":
            generateDivisionQuestion();
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