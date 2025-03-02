let num1, num2, correctAnswer;
let timer;
const timeLimit = 10; // Time limit per question in seconds

function getQuestionType() {
    return localStorage.getItem("quizType") || "addition"; // Default to addition
}

function generateQuestion() {
    operation = getQuestionType();
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;

    switch (operation) {
        case "addition":
            correctAnswer = num1 + num2;
            document.getElementById("question").textContent = `What is ${num1} + ${num2}?`;
            break;
        case "subtraction":
            correctAnswer = num1 - num2;
            document.getElementById("question").textContent = `What is ${num1} - ${num2}?`;
            break;
        case "multiplication":
            correctAnswer = num1 * num2;
            document.getElementById("question").textContent = `What is ${num1} × ${num2}?`;
            break;
        case "division":
            num1 = num2 * Math.floor(Math.random() * 10) + 1; // Ensure divisibility
            correctAnswer = num1 / num2;
            document.getElementById("question").textContent = `What is ${num1} ÷ ${num2}?`;
            break;
        case "mixed":
            const types = ["addition", "subtraction", "multiplication", "division"];
            localStorage.setItem("quizType", types[Math.floor(Math.random() * types.length)]);
            generateQuestion(); // Call again with new operation
            return;
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
        document.getElementById("feedback").textContent = "✅ Correct!";
        document.getElementById("feedback").style.color = "green";
        clearTimeout(timer); // Stop timer
        setTimeout(generateQuestion, 100); // Load new question after 50/1000 second
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
    alert("Quiz Ended!");
    window.location.href = "/results"; // Redirect to quiz page

}

// Listen for changes in input field (checks answer as user types)
document.getElementById("answer").addEventListener("input", checkAnswer);

// Initialize first question on page load
window.onload = generateQuestion;
