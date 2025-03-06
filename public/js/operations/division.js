export function generateDivisionQuestion() {
    let num2 = Math.floor(Math.random() * 101) + 1; // Random number between 1 and 100
    let num1 = num2 * (Math.floor(Math.random() * 30) + 1); // Random number between 1 and 30
    let correctAnswer = num1 / num2;
    document.getElementById("question").textContent = `${num1} / ${num2}`;
    return correctAnswer;
}

