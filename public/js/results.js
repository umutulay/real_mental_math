const correctAnswers = localStorage.getItem("correctAnswers") || 0;
const totalTimeSpent = localStorage.getItem("totalTimeSpent") || 0;

document.getElementById("score").textContent = `Correct Answers: ${correctAnswers}`;
document.getElementById("time").textContent = `Total Time Spent: ${totalTimeSpent} seconds`;

function restartQuiz() {
    localStorage.removeItem("correctAnswers");
    localStorage.removeItem("totalTimeSpent");
    window.location.href = "/"; // Redirect to quiz page
}