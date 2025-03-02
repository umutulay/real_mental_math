let num1, num2, correctAnswer;
let timer;
const timeLimit = 10; // Time limit per question in seconds

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 + num2;

    document.getElementById("question").textContent = `What is ${num1} + ${num2}?`;
    document.getElementById("answer").value = ""; // Clear input
    document.getElementById("feedback").textContent = ""; // Clear feedback
    document.getElementById("timer").textContent = `Time left: ${timeLimit}s`;

    document.getElementById("answer").focus(); // Auto-focus input field

    startTimer();
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value);

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "✅ Correct! Well done!";
        document.getElementById("feedback").style.color = "green";
        clearTimeout(timer); // Stop timer
        setTimeout(generateQuestion, 50); // Load new question after 1 second
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

// Listen for changes in input field (checks answer as user types)
document.getElementById("answer").addEventListener("input", checkAnswer);

// Initialize first question on page load
window.onload = generateQuestion;
