function startQuiz() {
    const selectedType = document.getElementById("quiz-type").value;
    localStorage.setItem("quizType", selectedType); // Store the selection
    const selectedDiffi = document.getElementById("difficulty").value;
    localStorage.setItem("difficulty", selectedDiffi); // Store the selection    
    window.location.href = "/quiz"; // Redirect to quiz page
}

