const correctAnswers = localStorage.getItem("correctAnswers") || 0;
const totalTimeSpent = localStorage.getItem("totalTimeSpent") || 0;

document.getElementById("final-score").textContent = `${correctAnswers}`;
document.getElementById("final-time").textContent = `${totalTimeSpent}`;

function restartQuiz() {
    localStorage.removeItem("correctAnswers");
    localStorage.removeItem("totalTimeSpent");
    window.location.href = "/"; // Redirect to quiz page
}