function startQuiz() {
    const selectedType = document.getElementById("quiz-type").value;
    localStorage.setItem("quizType", selectedType); // Store the selection
    const selectedDiffi = document.getElementById("difficulty").value;
    localStorage.setItem("difficulty", selectedDiffi); // Store the selection    
    const timerType = document.getElementById("timer-type").value;
    localStorage.setItem("timerType", timerType); // Store the selection
    const timeLimit = document.getElementById("time-limit").value;
    localStorage.setItem("timeLimit", timeLimit); // Store
    window.location.href = "/quiz"; // Redirect to quiz page
}

